<script setup lang="ts">
  type ClickableProps = {
    clickable: true
    // eslint-disable-next-line vue/require-default-prop
    to?: never
  }
  type LinkProps = {
    to: string
    // eslint-disable-next-line vue/require-default-prop
    clickable?: never
  }
  type StaticProps = {
    clickable?: false
    to?: never
  }
  type BaseProps = {
    title: string
    subtitle?: string
    value?: string | number
    hideDivider?: boolean
    hideMenu?: boolean
  }
  export type UiListItemProps = BaseProps & (ClickableProps | LinkProps | StaticProps)

  const props = withDefaults(defineProps<UiListItemProps>(), {
    hideMenu: false,
    subtitle: '',
    value: '',
  })

  const emit = defineEmits<{
    'menu-click': [value: string | number]
    click: [value: string | number]
  }>()

  const slots = useSlots()
  const hasMiddle1 = computed(() => !!slots.middle1)
  const hasMiddle2 = computed(() => !!slots.middle2)

  const middleCount = computed(() => {
    return [hasMiddle1.value, hasMiddle2.value].filter(Boolean).length
  })
  const getMiddleCols = computed(() => {
    if (middleCount.value === 0) return 0
    if (middleCount.value === 1) return 6
    return 3
  })

  const handleClick = () => {
    if (props.clickable) {
      emit('click', props.value)
    }
  }
</script>

<template>
  <v-card
    class="ui-list-item-card transition-swing"
    variant="outlined"
    :to="to"
    :ripple="clickable || !!to"
    @click="handleClick"
  >
    <div class="ui-list-item-content pa-3 pa-sm-4 d-flex align-center justify-space-between ga-2 ga-sm-4">
      <!-- Main Content Container (Icon + Title + Subtitle) -->
      <div class="d-flex align-center ga-3 min-width-0 flex-grow-1">
        <slot name="prepend" />
        <div class="min-width-0 flex-grow-1">
          <ui-heading :level="5" weight="bold" class="ui-list-item-title text-truncate">{{ title }}</ui-heading>
          <slot name="subtitle">
            <ui-heading v-if="subtitle" :level="6" class="text-medium-emphasis text-truncate mt-1">{{ subtitle }}</ui-heading>
          </slot>
        </div>
      </div>

      <!-- Essential Middle Info (visible on medium+ screens if provided) -->
      <div v-if="hasMiddle1" class="d-none d-md-flex align-center flex-shrink-0 text-truncate px-2">
        <slot name="middle1" />
      </div>

      <!-- Action Buttons Container (Always pinned to the right on the SAME line) -->
      <div v-if="!hideMenu" class="ui-list-item-actions d-flex align-center flex-shrink-0 ga-1 ms-2">
        <slot name="actions" />
      </div>
    </div>
  </v-card>
</template>


<style scoped>
.ui-list-item-card {
  border-radius: 12px !important;
  border: 1px solid rgba(var(--v-border-color), 0.12) !important;
  background-color: rgb(var(--v-theme-surface)) !important;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  border-left: 4px solid transparent !important;
}

.ui-list-item-card:hover {
  border-color: rgba(var(--v-theme-primary), 0.4) !important;
  border-left-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.08) !important;
  transform: translateY(-1px);
}

.ui-list-item-title {
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.3;
}
</style>

