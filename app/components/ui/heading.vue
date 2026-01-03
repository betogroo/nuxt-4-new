<script setup lang="ts">
  import type { HeadingAlign, HeadingLevel, HeadingWeight } from '~/types'

  const props = defineProps<{
    level?: HeadingLevel
    weight?: HeadingWeight
    align?: HeadingAlign
  }>()

  const level = computed(() => props.level ?? 2)
  const weight = computed(() => props.weight ?? 'regular')
  const align = computed(() => props.align ?? 'left')

  const levelClass: Record<HeadingLevel, string> = {
    1: 'text-h1',
    2: 'text-h2',
    3: 'text-h3',
    4: 'text-h4',
    5: 'text-h5',
    6: 'text-h6',
  }

  const weightClass: Record<HeadingWeight, string> = {
    regular: 'font-weight-regular',
    medium: 'font-weight-medium',
    bold: 'font-weight-bold',
  }

  const alignClass: Record<HeadingAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const classes = computed(() => [
    levelClass[level.value],
    weightClass[weight.value],
    alignClass[align.value],
    'my-2',
  ])
</script>

<template>
  <div :aria-level="level" :class="classes" role="heading">
    <slot />
  </div>
</template>
