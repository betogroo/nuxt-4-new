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
  <v-list-item density="compact" :ripple="clickable" v-bind="$attrs" @click="handleClick">
    <template #append>
      <ui-btn-icon icon="menu-h" @click.stop="handleMenuClick" />
    </template>
    <template #prepend>
      <div class="d-flex flex-column">
        <h1 class="text-subtitle-1 font-weight-bold">
          {{ title }}
        </h1>
        <slot name="subtitle">
          <h2 v-if="subtitle" class="text-body-2 font-weight-light">
            {{ subtitle }}
          </h2>
        </slot>
      </div>
    </template>
  </v-list-item>
  <v-divider v-if="!hideDivider" />
</template>
