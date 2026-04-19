<script setup lang="ts">
  import { AppError } from '~/error/AppError'

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
  const { getNextStatuses, fetchDemandStatusTransitions } = useDemandStatusTransition()

  const { demand, items, error, pending, status, refresh } = await useDemandPage(id.value)
  console.log('teste: ', demand)

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode ?? 500,
      message: 'Demanda não encontrada',
      fatal: true,
    })
  }

  const { data: transitions } = useAsyncData('demand_status_transitions', async () => {
    try {
      return await fetchDemandStatusTransitions()
    } catch (error) {
      if (error instanceof AppError) {
        throw createError({ statusCode: 400, message: error.message })
      }
      throw createError({
        statusCode: 500,
        message: 'Erro inesperado',
      })
    }
  })

  const updateStatus = (name: string) => {
    console.log('updateStatus Test: ', name)
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

    <ui-list :items="items" :status="status">
      <ui-list-item v-for="item in items" :key="item.id" :base-color="item.status.color || 'grey'"
        >{{ item.product.name }} - {{ item.quantity }} - {{ item.packaging.name }} -
        {{ item.status.name }}
        <template #actions>
          <div
            v-for="next in getNextStatuses(item.status.id, transitions)"
            :key="next.to_status.id"
          >
            <ui-btn :color="next.to_status.color" @click="updateStatus(next.to_status.id)">{{
              next.action_label
            }}</ui-btn>
            <ui-btn v-if="next.to_status.allow_cancel" color="error" variant="outlined"
              >Cancelar</ui-btn
            >
          </div>
        </template>
      </ui-list-item>
    </ui-list>
  </ui-page>
</template>
