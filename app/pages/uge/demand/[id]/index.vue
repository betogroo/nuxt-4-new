<script setup lang="ts">
  import { AppError } from '~/error/AppError'
  import { DemandItemReadRowsSchema } from '~/schemas'
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
      *
      `,
      )
      .eq('demand_id', id.value)
    if (error.value) console.log(itemsError.value)
    const parsed = DemandItemReadRowsSchema.safeParse(data)
    if (!parsed.success) {
      console.log(parsed.error)
      throw new AppError('Erro ao validar dados de demanda', parsed.error)
    }
    return parsed.data
  })
</script>

<template>
  <ui-page :title="demand?.description">
    <template #header_action>
      <ui-btn color="primary" icon="plus" :to="`./${id}/product/new`">Novo Processo</ui-btn>
    </template>
    <ui-card-grid v-if="pending">Carregando...</ui-card-grid>
    <div v-else-if="error">Da um refresh <ui-btn @click="refresh()">Refresh</ui-btn></div>
    <ui-card-grid v-else>
      <div>Data do cadastro: {{ dateBr(demand!.created_at) }}</div>
      <div>Data da Disputa: {{ dateBr(demand!.dispute_date) }}</div>
    </ui-card-grid>

    <pre>{{ demandItems }}</pre>
    <div>{{ demandItemsStatus }}</div>
  </ui-page>
</template>
