---
slug: ui-architecture
updated: 2026-02-12
---

# Arquitetura de UI Desacoplada no Nuxt 4

Este documento resume e organiza as decisões, conceitos e padrões definidos ao longo da conversa para construir uma interface **desacoplada do Vuetify**, sustentável e pronta para evolução ou troca de framework.

---

## 🎯 Objetivo

Criar uma arquitetura de UI que:

- Não dependa diretamente do Vuetify nas páginas
- Permita troca futura de framework de UI
- Centralize padrões visuais e de UX
- Mantenha as páginas limpas e focadas em regra de negócio

---

## 🧠 Conceitos-chave

### 1. Desacoplamento de UI

Isolar o framework de UI (Vuetify) em componentes internos, expondo uma API própria do projeto.

> A página **não conhece Vuetify**, apenas componentes do domínio da aplicação.

---

### 2. Separação por Camadas

A UI foi organizada em camadas bem definidas:

#### 🔹 Base

- Encapsula Vuetify
- API mínima
- Sem regras de negócio
- Sem decisões de UX

Exemplos:

- Button base
- TextField base
- Form base
- Card base

#### 🔹 Form

- Define padrões de formulários
- Centraliza UX (density, variant, submit, layout)
- Especializa componentes base

Exemplos:

- FormTextField
- FormTextFieldPassword
- FormBtnSubmit
- FormStack

#### 🔹 Card (Composição Semântica)

- Componentes visuais com significado
- Evitam classes repetidas nas páginas

Exemplos:

- AuthCard
- CardFooter

#### 🔹 App

- Componentes específicos da aplicação
- Não reutilizáveis em outros projetos

Exemplos:

- NavBar
- PublicContainer

---

## 📁 Estrutura Final de Pastas

```
components/
 ┣ app/
 ┃ ┣ nav-bar.vue
 ┃ ┗ public-container.vue
 ┗ ui/
   ┣ base/
   ┃ ┣ btn.vue
   ┃ ┣ card.vue
   ┃ ┣ form.vue
   ┃ ┣ text-field.vue
   ┃ ┗ title.vue
   ┣ card/
   ┃ ┣ auth.vue
   ┃ ┗ footer.vue
   ┗ form/
     ┣ btn-action.vue
     ┣ btn-submit.vue
     ┣ stack.vue
     ┣ text-field.vue
     ┗ text-field-password.vue
```

---

## 🔘 Botões

### Base Button

Responsável apenas por:

- Encapsular `v-btn`
- Aceitar `type`, `loading`, `disabled`
- Emitir `click`

Não define variant, cor ou UX.

### Form Button (Submit)

- Sempre `type="submit"`
- Usado dentro de formulários
- Centraliza UX de submit

### Action Button

- Sempre acionado por `@click`
- Nunca submit

---

## 📝 Text Fields

### Base Text Field

- Encapsula `v-text-field`
- Usa `defineModel`
- Não define densidade, variant ou regras

### Form Text Field

- Define padrões como:
  - density="compact"
  - variant="outlined"

### Form Text Field Password

- Especialização com:
  - toggle de visibilidade
  - ícone de ação

---

## 📋 Formulários

### Base Form

- Encapsula `v-form`
- Expõe apenas:
  - `submit`
  - `reset`
- Emite `submit` após validação

A página não conhece `v-form`.

---

## 🧱 Layout e Classes

### Princípio

> Nem toda classe utilitária deve ser desacoplada.

Desacoplar apenas quando:

- Há repetição
- Há significado semântico
- É parte do layout recorrente

---

### Exemplos de Abstração Correta

| Antes                             | Depois           |
| --------------------------------- | ---------------- |
| `class="d-flex flex-column ga-3"` | `<UiFormStack>`  |
| `class="text-right mt-3"`         | `<UiCardFooter>` |
| Card com largura fixa             | `<UiAuthCard>`   |

---

## 📄 Página de Login (Exemplo Final)

```vue
<UiAuthCard>
  <UiBaseTitle>Login</UiBaseTitle>

  <UiBaseForm @submit="submitLogin">
    <UiFormStack>
      <UiFormTextField v-model="email" label="Email" />
      <UiFormTextFieldPassword v-model="password" label="Senha" />
      <UiFormBtnSubmit>Entrar</UiFormBtnSubmit>
    </UiFormStack>
  </UiBaseForm>

  <UiCardFooter>
    Clique <NuxtLink to="/signup">aqui</NuxtLink> para se cadastrar
  </UiCardFooter>
</UiAuthCard>
```

✔ Nenhum Vuetify na page
✔ Nenhuma classe utilitária
✔ Página descreve apenas intenção

---

## 🧠 Convenções de Nome

- O **nome do componente importa mais que o nome do arquivo**
- Pensar primeiro na API de uso:

```vue
<UiFormStack />
<UiFormTextField />
<UiFormBtnSubmit />
```

- Arquivos internos podem ser mais simples (`stack.vue`)

---

## 📐 Regras de Decisão Rápida

**Onde criar o componente?**

- Usa Vuetify diretamente? → `ui/base`
- Define padrão de formulário? → `ui/form`
- Representa um papel visual? → `ui/card`
- É específico da aplicação? → `components/app`

---

## 🏁 Conclusão

Esta arquitetura:

- Evita acoplamento com Vuetify
- Facilita manutenção
- Permite evolução gradual
- Reflete práticas usadas em design systems reais

Não é overengineering — é **design de API de UI**.

---

📌 **Recomendação**: manter este arquivo versionado no repositório (`/docs/ui-architecture.md`) para referência futura ou material de curso.
