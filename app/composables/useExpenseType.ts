import { z } from '~/schemas'
import { ExpenseTypeReadSummarySchema } from '~/schemas/uge/dto'
import type { ExpenseTypeReadSummary } from '~/types'

const useExpensiveType = () => {
  const { fetchAll } = useTableFetch<ExpenseTypeReadSummary[]>({
    table: 'expense_types',
    schema: z.array(ExpenseTypeReadSummarySchema),
    select: '(id, name, expense_number)',
    orderBy: [{ column: 'expense_number' }],
  })

  const select = useLazySelect('expenseTypes', fetchAll)
  return { fetchAll, select }
}

export default useExpensiveType
