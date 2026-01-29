<script setup lang="ts">
  const route = useRoute()
  const { get } = useElection()

  const id = computed(() => route.params.id as string)

  const {
    data: election,
    pending,
    error,
    refresh,
  } = await useAsyncData(`election-${id.value}`, () => get(id.value))

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode ?? 500,
      message: 'Eleição não encontrada',
      fatal: true,
    })
  }
</script>

<template>
  <div>
    <ui-card-grid v-if="pending"
      ><ui-skeleton-loader :count="SKELETON_LOADER_COUNT.image" type="image" width="350"
    /></ui-card-grid>
    <div v-else-if="error">Da um refresh <ui-btn @click="refresh()">Refresh</ui-btn></div>
    <ui-card-grid v-else>
      {{ election }}
    </ui-card-grid>
  </div>
</template>
