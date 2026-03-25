---
slug: ts-generics
updated: 2026-03-25
---

# Entendendo Generics no TypeScript com um Composable (Nuxt + Supabase + Zod)

Este documento explica em detalhes como funcionam **tipos genéricos
(`<T>`) no TypeScript** usando o seguinte composable como exemplo:

```ts
import { AppError } from '~/error/AppError'
import type { ZodSchema } from 'zod'
import type { TableName } from '~/types'

type UseFetchTableOptions<T> = {
  table: TableName
  schema: ZodSchema<T>
  select?: string
}

const useFetchTable = <T>({ table, schema, select = '*' }: UseFetchTableOptions<T>) => {
  const supabase = useSupabaseClient()

  const fetchAll = async (): Promise<T> => {
    if (import.meta.dev) {
      await delay(DELAY)
    }

    const { data, error } = await supabase.from(table).select(select)

    if (error) {
      throw new AppError(`Não foi possível carregar dados de "${table}"`, error)
    }

    const parsed = schema.safeParse(data)

    if (!parsed.success) {
      throw new AppError(`Erro ao validar dados de "${table}"`, parsed.error)
    }

    return parsed.data
  }

  return {
    fetchAll,
  }
}

export default useFetchTable
```

---

# 1. O que é `<T>` no TypeScript

`<T>` representa um **tipo genérico**.

Ele funciona como um **placeholder de tipo**. O tipo real será definido
**quando a função for usada**.

Exemplo simples:

```ts
function identity<T>(value: T): T {
  return value
}
```

Uso:

```ts
identity<string>('abc')
identity<number>(10)
```

Aqui:

    T = string
    T = number

---

# 2. Aplicando isso ao composable

O composable começa assim:

```ts
const useFetchTable = <T>({ table, schema, select = '*' }: UseFetchTableOptions<T>)
```

Isso significa:

> Este composable funciona com **qualquer tipo T**.

Esse `T` será o **tipo da estrutura da tabela**.

Exemplo:

## Tabela Product

```ts
type Product = {
  id: string
  name: string
}
```

## Tabela ProductClass

```ts
type ProductClass = {
  id: string
  name: string
}
```

Então:

    T pode ser Product
    T pode ser ProductClass
    T pode ser qualquer outro tipo

---

# 3. Onde o `T` aparece

## Nas opções

```ts
type UseFetchTableOptions<T> = {
  table: TableName
  schema: ZodSchema<T>
  select?: string
}
```

Aqui o `schema` precisa validar **o mesmo tipo T**.

Exemplo:

```ts
ProductSchema: ZodSchema<Product>
```

Então:

    T = Product

---

# 4. No retorno da função

```ts
const fetchAll = async (): Promise<T>
```

Isso significa:

> Essa função retorna uma Promise contendo o tipo T.

Exemplo de uso:

```ts
const { fetchAll } = useFetchTable<Product[]>({
  table: 'product',
  schema: ProductRowsSchema,
})
```

Agora:

    T = Product[]

Então:

    fetchAll(): Promise<Product[]>

---

# 5. A parte importante: integração com Zod

Esta linha:

```ts
const parsed = schema.safeParse(data)
```

Retorna:

    parsed.data

Mas o TypeScript **sabe o tipo correto** porque o schema foi definido
como:

    ZodSchema<T>

Então:

    parsed.data → T

---

# 6. Fluxo completo de tipos

Uso:

```ts
const { fetchAll } = useFetchTable<Product[]>({
  table: 'product',
  schema: ProductRowsSchema,
})
```

O TypeScript entende:

    T = Product[]

Então:

### schema

    ZodSchema<Product[]>

### retorno

    Promise<Product[]>

### parsed.data

    Product[]

Tudo fica conectado.

---

# 7. Por que isso é poderoso

Sem generics você teria que criar várias funções:

    useFetchProduct()
    useFetchProductClass()
    useFetchClient()
    useFetchDemand()

Com generics você cria **uma função universal**.

---

# 8. Analogia simples

Imagine uma caixa:

    Caixa<T>

Essa caixa pode guardar qualquer tipo.

Exemplos:

    Caixa<string>
    Caixa<number>
    Caixa<Product>

Seu composable funciona assim:

    useFetchTable<T>()

Ele funciona para **qualquer tabela**.

---

# 9. Pequena melhoria sugerida

O Supabase retorna **arrays** ao usar `select('*')`.

Então o retorno ideal seria:

```ts
const fetchAll = async (): Promise<T[]>
```

E o schema:

    ZodSchema<T[]>

---

# 10. Versão refinada do composable

```ts
type UseFetchTableOptions<T> = {
  table: TableName
  schema: ZodSchema<T[]>
  select?: string
}

const useFetchTable = <T>({ table, schema, select = '*' }: UseFetchTableOptions<T>) => {
  const supabase = useSupabaseClient()

  const fetchAll = async (): Promise<T[]> => {
    const { data, error } = await supabase.from(table).select(select)

    if (error) {
      throw new AppError(`Erro ao buscar ${table}`, error)
    }

    const parsed = schema.safeParse(data)

    if (!parsed.success) {
      throw new AppError(`Erro ao validar ${table}`, parsed.error)
    }

    return parsed.data
  }

  return { fetchAll }
}
```

---

# 11. Como usar no projeto

```ts
const { fetchAll } = useFetchTable<Product>({
  table: 'product',
  schema: ProductRowsSchema,
})
```

Agora o TypeScript sabe:

    fetchAll(): Promise<Product[]>

E o autocomplete funciona corretamente.

---

# Regra mental importante

Sempre pense assim:

> `<T>` é apenas um **tipo que será definido depois**.

É um **placeholder de tipo**.

---

# Conclusão

Generics permitem criar **funções reutilizáveis e fortemente tipadas**,
evitando repetição de código e mantendo segurança de tipos.

No caso deste composable:

- `T` representa o **tipo de dado retornado da tabela**
- `ZodSchema<T>` garante a **validação**
- `Promise<T>` garante o **tipo de retorno correto**
