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
    <ui-base-title>Eleições</ui-base-title>
    <div>
      <ui-btn @click="addElection">Nova Eleição</ui-btn>
      <ui-btn color="red" variant="outlined" @click="electionsStore.$reset">Reset</ui-btn>
    </div>
    <div>
      <div v-if="!elections.length">Ainda não tem eleições cadastradas</div>
      <div v-else class="d-flex flex-wrap justify-space-around">
        <ui-base-card
          v-for="item in elections"
          :key="item.id"
          class="ma-2 pa-2"
          height="150"
          :subtitle="item.votingDate"
          :title="item.name"
          width="400"
        >
          <div class="text-right">
            <ui-btn color="green" variant="text">Editar</ui-btn>
          </div>
        </ui-base-card>
      </div>
    </div>
  </div>
</template>
