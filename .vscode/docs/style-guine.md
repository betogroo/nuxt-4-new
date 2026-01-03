# 🧭 MINI STYLE GUIDE – Vue / Nuxt / UI desacoplada

> Objetivo:
> **Aumentar DX, reduzir decisões repetidas e evitar abstrações ruins**.

---

## 🟦 MÓDULO 1 — Naming conventions (estado, ações, derivados)

### 1.1 Estados (ref / reactive)

**Regra de ouro**

> Estado precisa responder claramente à pergunta: _“o que isso representa?”_

| Tipo    | Padrão                 | Exemplo                     |
| ------- | ---------------------- | --------------------------- |
| boolean | `isX`, `hasX`, `showX` | `showPassword`, `isLoading` |
| valor   | substantivo            | `email`, `password`         |
| coleção | plural                 | `users`, `errors`           |

❌ Ruim

```ts
const show = ref(false)
const value = ref('')
```

✅ Bom

```ts
const showPassword = ref(false)
const passwordValue = ref('')
```

---

### 1.2 Ações (funções)

**Sempre verbo + contexto**

| Tipo   | Padrão    | Exemplo            |
| ------ | --------- | ------------------ |
| toggle | `toggleX` | `togglePassword()` |
| setter | `setX`    | `setUser()`        |
| fluxo  | verbo     | `submitForm()`     |

❌

```ts
const toggle = () => {}
```

✅

```ts
const togglePasswordVisibility = () => {}
```

> DX win: autocomplete já explica o que faz.

---

### 1.3 Valores derivados (computed)

**Substantivo descritivo**

❌

```ts
const icon = computed(...)
```

✅

```ts
const passwordVisibilityIcon = computed(...)
```

---

## 🟦 MÓDULO 2 — UI Base Components (onde desacoplar)

Você está fazendo algo **muito correto**:

> criar _componentes base_ que encapsulam Vuetify.

### 2.1 Regra: UI Base **pode conhecer o framework**, app não

| Camada   | Pode usar Vuetify? |
| -------- | ------------------ |
| `ui-*`   | ✅ sim             |
| pages    | ❌ não             |
| features | ❌ não             |

---

### 2.2 Exemplo correto (seu `UiBtn`)

```vue
<UiBtn variant="text" />
```

Internamente:

```vue
<v-btn :variant="variant" />
```

Se amanhã trocar Vuetify:

- só mexe no `UiBtn`
- o resto do app continua igual

👉 **DX + arquitetura**

---

### 2.3 Quando criar um componente de layout?

Crie **quando houver semântica**, não só CSS.

❌ NÃO criar

```vue
<div class="d-flex ga-2" />
```

(uso único, sem significado)

✅ CRIAR

```vue
<UiFormActions />
```

Mesmo que por baixo seja:

```html
<div class="d-flex justify-end ga-3"></div>
```

> Porque isso representa **uma intenção**, não um layout.

---

## 🟦 MÓDULO 3 — Composables (padrão profissional)

### 3.1 Quando criar um composable?

Crie quando houver:

- estado + lógica
- reutilização real
- regra de negócio ou UI behavior

❌ NÃO criar

```ts
const isEven = (n: number) => n % 2 === 0
```

✅ CRIAR

```ts
usePasswordVisibility()
useAuthForm()
useConfirmDialog()
```

---

### 3.2 Estrutura padrão de composable

```ts
export function usePasswordVisibility() {
  const showPassword = ref(false)

  const inputType = computed(() => (showPassword.value ? 'text' : 'password'))

  const icon = computed(() => (showPassword.value ? ICONS.eye : ICONS.eyeOff))

  const toggle = () => {
    showPassword.value = !showPassword.value
  }

  return {
    showPassword,
    inputType,
    icon,
    toggle,
  }
}
```

👉 Quem usa **não precisa entender a lógica**.

---

### 3.3 Naming em composables

O retorno deve ser **autoexplicativo**:

❌

```ts
return { show, type, icon, toggle }
```

✅

```ts
return {
  showPassword,
  passwordInputType,
  passwordIcon,
  togglePasswordVisibility,
}
```

Isso é **DX nível sênior**.

---

## 🟦 MÓDULO 4 — Quando abstrair (e quando NÃO)

Essa é a parte mais importante.

### 4.1 Regra dos 3 usos

> **Não abstraia antes de usar 3 vezes.**

1 uso → inline
2 usos → tolerável
3 usos → abstração justificada

---

### 4.2 Perguntas antes de abstrair

Pergunte:

1. Isso tem **nome próprio**?
2. Isso expressa **intenção**?
3. Isso pode mudar em um lugar só?

Se a resposta for **não**, não abstraia.

---

### 4.3 Exemplo prático (grids)

❌ Abstração ruim

```vue
<JustifyEndGrid />
```

Por quê?

- layout puro
- sem intenção clara
- difícil de lembrar

✅ Abstração boa

```vue
<UiFormActions />
<UiCardFooter />
<UiAuthActions />
```

Porque:

- nome expressa propósito
- layout vira detalhe

---

## 🧠 REGRA FINAL (guarde essa)

> **Abstraia comportamento e intenção, não aparência.**

---

## 🚀 O que você já está fazendo certo

Você já está:

- desacoplando UI
- limitando props
- criando linguagem própria
- pensando em troca de framework
- pensando em DX para o futuro

Isso é **arquitetura front-end**, não só Vue.

---
