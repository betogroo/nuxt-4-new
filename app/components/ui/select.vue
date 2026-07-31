<script setup lang="ts" generic="T extends Record<string, any>">
  import { VSelect, VAutocomplete } from 'vuetify/components'
  import type { UiDensity } from '~/schemas/ui/general'
  import type { SelectMode } from '~/schemas/ui/select'
  import type { TextFieldVariant } from '~/schemas/ui/textfield'

  interface Props {
    items?: T[]
    name: string
    itemTitle?: keyof T
    itemValue?: keyof T
    itemSubtitle?: keyof T
    variant?: TextFieldVariant
    density?: UiDensity
    mode?: SelectMode
    placeholder?: string
    status?: 'idle' | 'pending' | 'success' | 'error'
  }
  const {
    items = [],
    name,
    itemTitle = 'title',
    itemValue = 'id',
    variant = 'outlined',
    density = 'compact',
    mode = 'select',
    itemSubtitle = '',
    placeholder = 'Escolha uma opção',
    status = 'idle',
  } = defineProps<Props>()

  const $emit = defineEmits<{
    change: [value: string]
  }>()

  const { value, errorMessage } = useField<T[typeof itemValue]>(name)

  const normalizedItems = computed(() =>
    (items ?? []).map((item) => {
      const rawTitle = item[itemTitle]
      const rawValue = item[itemValue]
      const rawSubtitle = itemSubtitle ? item[itemSubtitle] : undefined
      return {
        title: rawTitle !== undefined && rawTitle !== null ? String(rawTitle) : '',
        value: rawValue,
        subtitle:
          rawSubtitle !== undefined && rawSubtitle !== null ? String(rawSubtitle) : undefined,
      }
    }),
  )

  const currentPlaceholder = computed(() => {
    if (status === 'pending') return LOADING
    if (status === 'error') return 'Erro ao carregar'
    return 'Nenhum dado disponível'
  })

  const onUpdate = (value: T[typeof itemValue]) => {
    $emit('change', value)
  }
</script>

<template>
  <component
    :is="mode === 'select' ? VSelect : VAutocomplete"
    v-bind="$attrs"
    v-model="value"
    :density="density"
    :error-messages="errorMessage"
    :filter-keys="['title', 'raw.subtitle']"
    item-props
    item-title="title"
    item-value="value"
    :items="normalizedItems"
    :label="placeholder"
    :loading="status === 'pending'"
    :no-data-text="currentPlaceholder"
    :placeholder="placeholder"
    :return-object="false"
    :variant="variant"
    @update:model-value="onUpdate"
  />
</template>
