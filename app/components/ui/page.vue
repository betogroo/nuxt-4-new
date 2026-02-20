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
        <v-row align="center">
          <v-col cols="6">
            <ui-heading v-if="title" :level="3">{{ title }}</ui-heading>
            <slot v-else-if="$slots.title" name="title" />
          </v-col>

          <v-col v-if="$slots.header_action" class="text-right" cols="6"
            ><slot name="header_action"
          /></v-col>
        </v-row>
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
