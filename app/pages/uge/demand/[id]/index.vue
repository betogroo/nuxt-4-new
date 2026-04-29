<script setup lang="ts">
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

  const { demand, items, error, pending, status, refresh } = useDemandPage(id.value)

  const updateStatus = (name: string) => {
    console.log('updateStatus Test: ', name)
  }
</script>

<template>
  <ui-page v-if="demand" :title="demand?.description">
    <template #header_action>
      <ui-btn color="primary" icon="plus" :to="`./${id}/product/new`">Adicionar Produto</ui-btn>
    </template>
    <ui-card-grid v-if="pending">Carregando...</ui-card-grid>
    <div v-else-if="error">
      <ui-alert :title="`Erro: ${error.message}`" type="error" />
      <ui-btn @click="refresh()">Refresh</ui-btn>
    </div>
    <ui-card-grid v-else>
      <div>Data do cadastro: {{ dateBr(demand!.created_at) }}</div>
      <div>Data da Disputa: {{ dateBr(demand!.dispute_date) }}</div>
    </ui-card-grid>

    <ui-list :items="items" :status="status">
      <ui-list-item v-for="item in items" :key="item.id" hide-menu :title="item.product.name">
        <template #middle1>
          {{ item.product.name }} - {{ item.quantity }} - {{ item.packaging.name }} -
          {{ item.status.name }}
        </template>

        <template #middle2>
          <div v-for="next in item.nextStatuses" :key="next.to_status.id">
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
    {{ error?.message }}
  </ui-page>
</template>
