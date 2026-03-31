import { z } from '~/schemas'
import { ExpenseTypeSchema } from '~/schemas/uge/entities/expense-type.schema'
import type { ExpenseType } from '~/types'

const useExpensiveType = () => {
  const { fetchAll } = useTableFetch<ExpenseType[]>({
    table: 'expense_types',
    schema: z.array(ExpenseTypeSchema),
    select: 'id, name, expense_number',
    orderBy: [{ column: 'expense_number' }],
  })

  const select = useLazySelect('expenseTypes', fetchAll)
  return { fetchAll, select }
}

export default useExpensiveType
