import type { ZodType } from 'zod'
import type { FormOptions } from 'vee-validate/'

const useZodForm = <T extends Record<string, unknown>>(
  schema: ZodType<T>,
  initialValues: FormOptions<T>['initialValues'],
) => {
  const { values, handleSubmit, meta, handleReset } = useForm<T>({
    validationSchema: toTypedSchema(schema),
    initialValues,
  })

  const color = computed(() => {
    if (!meta.value.dirty) return ''
    return !meta.value.valid ? 'error' : 'success'
  })
  return { values, handleSubmit, handleReset, meta, color }
}

export default useZodForm
