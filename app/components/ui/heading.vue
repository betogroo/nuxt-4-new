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
    1: 'text-headline-large',
    2: 'text-headline-medium',
    3: 'text-headline-small',
    4: 'text-title-large',
    5: 'text-title-medium',
    6: 'text-title-small',
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
  ])
</script>

<template>
  <div :aria-level="level" :class="classes" role="heading">
    <slot />
  </div>
</template>
