<script setup lang="ts">
  import { AppError } from '~/error/AppError'
  import { z } from '~/schemas'
  import { DemandItemReadSchema } from '~/schemas/uge'
  import type { DemandStatusRead } from '~/types'
  definePageMeta({
    layout: 'default',
    showBack: true,
    menu: {
      title: 'Demandas',
      hidden: false,
    },
  })
  const route = useRoute()
  const id = computed(() => route.params.id as string)
  const { get } = useDemand()
  const {
    data: demand,
    pending,
    error,
    refresh,
  } = await useAsyncData(`demand-${id.value}`, () => get(id.value))

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode ?? 500,
      message: 'Demanda não encontrada',
      fatal: true,
    })
  }
  const supabase = useSupabaseClient()
  const {
    data: demandItems,
    error: itemsError,
    status: demandItemsStatus,
  } = useAsyncData('demand_items_', async () => {
    const { data } = await supabase
      .from('demand_items')
      .select(
        `
      id, created_at, updated_at, quantity, estimated_price, offered_price,
       product: products (id, name, description, specifications),
       packaging: packaging_types (name),
       status: demand_status(id, name, code, color)
      `,
      )
      .eq('demand_id', id.value)
    if (error.value) console.log(itemsError.value)
    const parsed = z.array(DemandItemReadSchema).safeParse(data)
    if (!parsed.success) {
      console.dir(parsed.error.format(), { depth: null })
      console.log(parsed.error)
      throw new AppError('Erro ao validar dados de demanda', parsed.error)
    }
    return parsed.data
  })

  const { data: transitions } = await supabase
    .from('demand_status_transitions')
    .select(
      `
    from_status_id,
    to_status:demand_status!demand_status_transitions_to_status_id_fkey (
      id,
      code,
      name,
      color,
      sort_order
    )
  `,
    )
    .eq('active', true)

  const transitionsMap = computed(() =>
    (transitions ?? []).reduce<Record<string, DemandStatusRead[]>>((acc, t) => {
      if (!t.to_status) return acc
      ;(acc[t.from_status_id] ??= []).push(t.to_status)

      return acc
    }, {}),
  )

  const getNextStatuses = (statusId: string) => {
    return transitionsMap.value[statusId] ?? []
  }

  const updateStatus = (name: string) => {
    console.log('updateStatus: ', name)
  }
</script>

<template>
  <ui-page :title="demand?.description">
    <template #header_action>
      <ui-btn color="primary" icon="plus" :to="`./${id}/product/new`">Adicionar Produto</ui-btn>
    </template>
    <ui-card-grid v-if="pending">Carregando...</ui-card-grid>
    <div v-else-if="error">Da um refresh <ui-btn @click="refresh()">Refresh</ui-btn></div>
    <ui-card-grid v-else>
      <div>Data do cadastro: {{ dateBr(demand!.created_at) }}</div>
      <div>Data da Disputa: {{ dateBr(demand!.dispute_date) }}</div>
    </ui-card-grid>

    <ui-list :items="demandItems" :status="demandItemsStatus">
      <ui-list-item
        v-for="item in demandItems"
        :key="item.id"
        :base-color="item.status.color || 'grey'"
        >{{ item.product.name }} - {{ item.quantity }} - {{ item.packaging.name }} -
        {{ item.status.name }}
        <ui-btn
          v-for="next in getNextStatuses(item.status.id)"
          :key="next.id"
          :color="next.color"
          @click="updateStatus(next.name)"
          >{{ next.id }}</ui-btn
        >
      </ui-list-item>
    </ui-list>
    <pre>
      {{ transitions }}
    </pre>
    <pre>
      {{ transitionsMap }}
    </pre>
  </ui-page>
</template>
