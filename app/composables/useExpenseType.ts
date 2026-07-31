import z from 'zod'
import { ExpenseTypeReadSummarySchema } from '~/schemas/uge/dto/expense-type.read.dto'
import type { ExpenseTypeReadSummary } from '~/schemas/uge/dto/expense-type.read.dto'

const useExpenseType = () => {
  const { fetchAll } = useTableFetch<ExpenseTypeReadSummary[]>({
    table: 'expense_types',
    schema: z.array(ExpenseTypeReadSummarySchema),
    select: 'id, name, expense_number',
    orderBy: [{ column: 'expense_number' }],
  })

  const select = useLazySelect('expenseTypes', fetchAll)
  return { fetchAll, select }
}

export default useExpenseType
