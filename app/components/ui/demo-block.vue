<script setup lang="ts">
  const isVisible = ref(false)
  const toggleCode = () => (isVisible.value = !isVisible.value)
</script>

<template>
  <ClientOnly>
    <ui-card variant="outlined">
      <h5 class="text-right">
        Ver código <ui-btn-icon :icon="isVisible ? 'arrow-hide' : 'code'" @click="toggleCode" />
      </h5>
      <slot name="demo" />
      <ui-card v-if="isVisible" variant="text">
        <slot name="code" />
      </ui-card>
    </ui-card>
  </ClientOnly>
</template>
