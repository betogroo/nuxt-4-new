<script setup lang="ts">
  const isVisible = ref(false)
  const toggleCode = () => (isVisible.value = !isVisible.value)
</script>

<template>
  <ClientOnly>
    <ui-card variant="outlined">
      <ui-demo-block-toolbar>
        <ui-btn-icon :icon="isVisible ? 'arrow-hide' : 'code'" @click="toggleCode" />
      </ui-demo-block-toolbar>
      <ui-card v-if="isVisible" variant="text">
        <slot name="code" />
      </ui-card>
      <slot name="demo" />
    </ui-card>
  </ClientOnly>
</template>
