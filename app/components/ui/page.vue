<script setup lang="ts">
  interface Props {
    title?: string
    showBack?: boolean
  }
  const { title = '' } = defineProps<Props>()
</script>

<template>
  <section>
    <header>
      <slot v-if="$slots.breadcrumb" name="breadcrumb" />
      <div v-if="showBack || title || $slots.title" class="d-flex align-center justify-start ga-2">
        <div v-if="showBack" class="text-left"><ui-link-back icon /></div>
        <ui-heading v-if="title" :level="3">{{ title }}</ui-heading>
        <slot v-else-if="$slots.title" name="title" />
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer v-if="$slots.footer" class="page-footer mb-6">
      <slot name="footer" />
    </footer>
  </section>
</template>
