<script setup lang="ts">
  const $emit = defineEmits<{
    'menu-click': []
  }>()

  const menuClick = () => {
    $emit('menu-click')
  }
</script>

<template>
  <v-list-item v-bind="$attrs">
    <template #append>
      <ui-btn-icon icon="menu-h" @click="menuClick" />
    </template>
    <template #prepend>
      <div class="d-flex flex-column">
        <h1 class="text-subtitle-1 font-weight-bold">
          <slot name="title" />
        </h1>
        <h2 class="text-body-2 font-weight-light">
          <slot name="subtitle" />
        </h2>
      </div>
    </template>
  </v-list-item>
</template>
