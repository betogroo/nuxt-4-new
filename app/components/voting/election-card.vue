<script setup lang="ts">
  import type { Election } from '~/types'

  interface Props {
    election: Election
  }
  defineProps<Props>()
</script>

<template>
  <ui-card :subtitle="dateBr(election.date)" :title="election.name" width="350">
    <template #actions>
      <ui-btn color="green" variant="outlined">Editar</ui-btn>
    </template>
  </ui-card>
</template>
