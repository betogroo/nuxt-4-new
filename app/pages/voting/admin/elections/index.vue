<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Admin - Elections',
      hidden: false,
      areas: ['navbar'],
      priority: 'elections',
      icon: 'election',
    },
  })

  const { elections, fetchAll } = useElection()
  const electionsStore = useElectionsStore()

  const addElection = () => {
    console.log('Vai add')
  }
  await fetchAll()
</script>

<template>
  <div>
    <ui-heading :level="3">Eleições</ui-heading>
    <div>
      <ui-btn icon="plus" @click="addElection">Nova Eleição</ui-btn>
      <ui-btn color="red" icon="reset" variant="outlined" @click="electionsStore.$reset"
        >Reset</ui-btn
      >
    </div>
    <div>
      <div v-if="!elections">Ainda não tem eleições cadastradas</div>
      <ui-card-grid v-else>
        <ui-card v-for="item in elections" :key="item.id" :title="item.name" width="350">
          <template #actions>
            <ui-btn color="green" variant="outlined">Editar</ui-btn>
          </template>
        </ui-card>
      </ui-card-grid>
    </div>
  </div>
</template>
