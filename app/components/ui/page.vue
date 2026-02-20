<script setup lang="ts">
  interface Props {
    title?: string
    showBack?: boolean
  }
  const { title = '', showBack = false } = defineProps<Props>()
  const slots = useSlots()

  const hasHeader = showBack || !!title || !!slots.title || !!slots.header_action
</script>

<template>
  <section>
    <header>
      <slot v-if="$slots.breadcrumb" name="breadcrumb" />

      <div v-if="hasHeader" class="d-flex align-center justify-start ga-2">
        <div v-if="showBack" class="text-left">
          <ui-link-back icon />
        </div>

        <v-row align="center">
          <!-- COLUNA ESQUERDA -->
          <v-col>
            <ui-heading v-if="title" :level="3">
              {{ title }}
            </ui-heading>

            <slot v-else-if="$slots.title" name="title" />
          </v-col>

          <!-- COLUNA DIREITA (sempre posição 2) -->
          <v-col v-if="$slots.header_action" class="text-right" cols="auto">
            <slot name="header_action" />
          </v-col>
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
