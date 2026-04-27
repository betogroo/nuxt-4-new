<script setup lang="ts">
  export interface UiListItemProps {
    title: string
    subtitle?: string
    value?: string | number
    clickable?: boolean
    hideDivider?: boolean
  }
  const props = defineProps<UiListItemProps>()
  const emit = defineEmits<{
    'menu-click': [value?: string | number]
    click: [value?: string | number]
  }>()

  const handleMenuClick = () => {
    emit('menu-click', props.value)
  }

  const handleClick = () => {
    if (props.clickable) {
      emit('click', props.value)
    }
  }
</script>

<template>
  <v-row density="compact" @click="handleClick">
    <v-col class="px-2" cols="12" sm="4">
      <div>
        <ui-heading :level="5" weight="bold">{{ title }}</ui-heading>
        <slot name="subtitle">
          <ui-heading v-if="subtitle" :level="6">{{ subtitle }}</ui-heading>
        </slot>
      </div>
      <ui-divider class="mt-6 d-sm-none" />
    </v-col>
    <v-col class="px-2" cols="12" sm="3"
      ><ui-heading :level="6" weight="regular">Alguima coisa</ui-heading>
      <ui-divider class="mt-6 d-sm-none"
    /></v-col>
    <v-col class="px-2" cols="12" sm="3"
      ><ui-heading :level="6" weight="medium">Something</ui-heading
      ><ui-divider class="mt-6 d-sm-none"
    /></v-col>
    <v-col class="text-sm-end px-2" cols="12" sm="1"
      ><ui-btn-icon icon="menu-h" size="x-small" @click.stop="handleMenuClick" /><ui-divider
        class="mt-6 d-sm-none"
    /></v-col>
    <ui-divider class="d-none d-sm-block" />
  </v-row>
</template>
