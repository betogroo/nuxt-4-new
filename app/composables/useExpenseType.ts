import { ExpenseTypeRowsSchema } from '~/schemas'
import type { ExpenseType } from '~/types'

const useExpensiveType = () => {
  const { fetchAll } = useTableFetch<ExpenseType[]>({
    table: 'expense_types',
    schema: ExpenseTypeRowsSchema,
    orderBy: [{ column: 'expense_number' }],
  })

  const select = useLazySelect('expenseTypes', fetchAll)
  return { fetchAll, select }
}

export default useExpensiveType
