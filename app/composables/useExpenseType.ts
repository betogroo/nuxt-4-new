import { z } from '~/schemas'
import { ExpenseTypeReadSchema } from '~/schemas/uge/dto'
import type { ExpenseTypeRead } from '~/types'

const useExpensiveType = () => {
  const { fetchAll } = useTableFetch<ExpenseTypeRead[]>({
    table: 'expense_types',
    schema: z.array(ExpenseTypeReadSchema),
    select: '(id, name, expense_number)',
    orderBy: [{ column: 'expense_number' }],
  })

  const select = useLazySelect('expenseTypes', fetchAll)
  return { fetchAll, select }
}

export default useExpensiveType
