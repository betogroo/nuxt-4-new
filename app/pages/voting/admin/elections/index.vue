<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Admin - Elections',
      hidden: false,
    },
  })

  const mockElection = {
    id: 'c82f9c77-6bb2-4db1-bc73-2cfa9120f781',
    name: 'High School Representative Election',
    votingDate: '2025-08-12T14:00:00.000Z',
    candidateDigits: 2,
    createdAt: '2025-02-18T11:25:40.000Z',
  }
  const electionsStore = useElectionsStore()
  const { elections } = storeToRefs(electionsStore)

  const addElection = () => {
    electionsStore.addElection(mockElection)
    console.log(mockElection)
  }
</script>

<template>
  <div>
    <ui-heading :level="3">Eleições</ui-heading>
    <div>
      <ui-btn @click="addElection">Nova Eleição</ui-btn>
      <ui-btn color="red" variant="outlined" @click="electionsStore.$reset">Reset</ui-btn>
    </div>
    <div>
      <div v-if="!elections.length">Ainda não tem eleições cadastradas</div>
      <ui-card-grid v-else>
        <ui-card
          v-for="item in elections"
          :key="item.id"
          :subtitle="item.votingDate"
          :title="item.name"
          width="350"
        >
          <template #actions>
            <ui-btn color="green" variant="outlined">Editar</ui-btn>
          </template>
        </ui-card>
      </ui-card-grid>
    </div>
  </div>
</template>
