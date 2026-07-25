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
    <div class="ui-list-item-content pa-3 pa-sm-4">
      <v-row align="center" no-gutters class="ga-2 ga-sm-0">
        <!-- Title & Subtitle Column -->
        <ui-list-item-column :cols="12" :sm="hasMiddle1 || hasMiddle2 ? 4 : 8" :md="hasMiddle1 || hasMiddle2 ? 5 : 9">
          <div class="d-flex align-center ga-2 mb-1 mb-sm-0">
            <slot name="prepend" />
            <div>
              <ui-heading :level="5" weight="bold" class="ui-list-item-title text-truncate">{{ title }}</ui-heading>
              <slot name="subtitle">
                <ui-heading v-if="subtitle" :level="6" class="text-medium-emphasis text-truncate mt-1">{{ subtitle }}</ui-heading>
              </slot>
            </div>
          </div>
        </ui-list-item-column>

        <!-- Middle 1 Slot -->
        <ui-list-item-column
          v-if="hasMiddle1"
          :cols="12"
          :sm="getMiddleCols"
          class="d-flex flex-column justify-center"
        >
          <slot name="middle1" />
        </ui-list-item-column>

        <!-- Middle 2 Slot -->
        <ui-list-item-column
          v-if="hasMiddle2"
          :cols="12"
          :sm="getMiddleCols"
          class="d-flex flex-column justify-center"
        >
          <slot name="middle2" />
        </ui-list-item-column>

        <!-- Actions Slot -->
        <ui-list-item-column v-if="!hideMenu" :cols="12" sm="auto" class="ms-auto pt-2 pt-sm-0 d-flex justify-end align-center">
          <slot name="actions" />
        </ui-list-item-column>
      </v-row>
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

