<script setup lang="ts">
  interface Props {
    imgSrc: string
    title: string
    text: string
    to?: string
  }
  defineProps<Props>()
  const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <v-empty-state :image="imgSrc" size="300" text-width="350">
    <template #media>
      <v-img class="mb-8" />
    </template>

    <template #title>
      <div class="text-h6 text-high-emphasis">{{ title }}</div>
    </template>

    <template #text>
      <div class="text-body-1 text-justify">
        {{ text }}
        Clique <ui-btn variant="text" @click="handleClearError()">aqui</ui-btn>
        para retornar a página inicial
      </div>
    </template>
  </v-empty-state>
</template>
