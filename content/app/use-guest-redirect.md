---
slug: use-guest-redirect
updated: 2026-02-03
---

# useGuestRedirect

Composable responsável por **redirecionar automaticamente usuários autenticados para fora de páginas públicas (guest)**, como login e signup.

Ele utiliza o mecanismo oficial de redirect do módulo Supabase, garantindo que o usuário seja enviado corretamente para a rota originalmente pretendida após autenticação.

---

## 📌 Objetivo

Evitar que usuários **já autenticados** acessem páginas que só fazem sentido para visitantes não logados.

Exemplos:

- `/login`
- `/signup`

---

## ❌ O que este composable NÃO faz

- Não protege rotas privadas
- Não substitui middleware
- Não controla autorização

A proteção de rotas é feita exclusivamente pelo middleware global do Supabase.

---

## 🧠 Funcionamento

O composable observa o estado de autenticação (`useSupabaseUser`) e:

1. Se **não houver usuário autenticado**, não executa nenhuma ação
2. Se **houver usuário autenticado**:
   - tenta recuperar a rota salva no cookie de redirect do Supabase
   - se não existir, usa o `fallback` configurado
   - se nenhum estiver disponível, redireciona para `/`
3. O redirecionamento ocorre imediatamente ao montar a página

---

## 🧩 API

### Assinatura

```ts
useGuestRedirect(options?: {
  fallback?: RouteLocationRaw
})
```

---

### Parâmetros

| Nome       | Tipo               | Obrigatório | Descrição                                           |
| ---------- | ------------------ | ----------- | --------------------------------------------------- |
| `fallback` | `RouteLocationRaw` | Não         | Rota usada caso não exista redirect salvo no cookie |

---

### Retorno

```ts
{
  user: Ref<User | null>
}
```

| Propriedade | Tipo                | Descrição                             |
| ----------- | ------------------- | ------------------------------------- |
| `user`      | `Ref<User \| null>` | Estado reativo do usuário autenticado |

---

## 💡 Exemplos de uso

### Uso básico (login / signup)

```ts
useGuestRedirect()
```

Comportamento:

- redireciona para a rota salva no cookie (se existir)
- caso contrário, redireciona para `/`

---

### Uso com fallback customizado

```ts
useGuestRedirect({ fallback: '/contact' })
```

Se não houver redirect salvo, o usuário será enviado para `/contact`.

---

## ⚙️ Detalhes importantes

### Redirecionamento imediato

O composable utiliza:

```ts
{
  immediate: true
}
```

Isso garante que:

- usuários já autenticados sejam redirecionados imediatamente
- evita “flash” de conteúdo da página guest

---

### Prevenção de navegação redundante

```ts
if (route.path !== path) {
  navigateTo(path)
}
```

Evita:

- navegação duplicada
- warnings de hydration
- loops de redirecionamento

---

## 🏗️ Dependências internas

- `useSupabaseUser`
- `useSupabaseCookieRedirect`
- `useRoute`
- `navigateTo`

Compatível com:

- SSR
- refresh da página
- navegação direta por URL

---

## ✅ Boas práticas

✔️ Usar apenas em páginas guest  
✔️ Manter logout como ação explícita  
✔️ Centralizar redirects pós-login  
✔️ Não utilizar em layouts globais

---

## 🚫 Uso incorreto (exemplos)

❌ Em páginas protegidas  
❌ Em layouts  
❌ Em páginas públicas acessíveis por usuários logados (ex: `/about`)

---

## 🏁 Resumo

`useGuestRedirect` é uma abstração pequena e previsível, criada para resolver redirecionamentos pós-login sem duplicação de lógica e sem depender de `definePageMeta({ auth })`.

Ele respeita o fluxo oficial do Supabase e mantém o controle de navegação claro e explícito.
