import type { Status } from './general'

export interface FormProps<T = Record<string, unknown>> {
  status?: Status
  initialValues?: Partial<T>
}
