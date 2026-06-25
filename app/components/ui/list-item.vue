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
  <v-list-item
    density="compact"
    :nav="clickable"
    :ripple="false"
    :to="to"
    variant="flat"
    @click="handleClick"
  >
    <v-row no-gutters>
      <ui-list-item-column :sm="4">
        <ui-heading :level="5" weight="bold">{{ title }}</ui-heading>
        <slot name="subtitle">
          <ui-heading v-if="subtitle" :level="6">{{ subtitle }}</ui-heading>
        </slot>
      </ui-list-item-column>
      <ui-list-item-column
        v-if="hasMiddle1"
        class="d-flex flex-column justify-center px-2"
        :sm="getMiddleCols"
      >
        <slot name="middle1" />
      </ui-list-item-column>
      <!-- 🔁 Middle 2 -->
      <ui-list-item-column
        v-if="hasMiddle2"
        class="d-flex flex-column justify-center px-2"
        :sm="getMiddleCols"
      >
        <slot name="middle2" />
      </ui-list-item-column>
      <ui-list-item-column v-if="!hideMenu" class="ms-sm-auto" sm="auto"
        ><ui-btn-icon icon="menu-h" size="x-small" @click.stop="handleMenuClick"
      /></ui-list-item-column>
    </v-row>
  </v-list-item>
  <ui-divider class="d-none d-sm-block mb-2" />
</template>
