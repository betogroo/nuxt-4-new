---
slug: vuetify-grid-advanced
updated: 2026-04-24
---

# 🧠 Vuetify Grid — Guia Avançado (SaaS/Admin + Nuxt)

## 📌 Filosofia

- Mobile-first (`cols`)
- Breakpoints sobrescrevem (`sm`, `md`, `lg`)
- Grid de 12 colunas SEMPRE

---

# 🏗️ Estrutura base com `ui-page`

Exemplo integrando com seu layout:

```vue
<UiPage>
  <template #header>
    <UiHeading title="Produto" />
  </template>

  <template #actions>
    <UiButton label="Editar" />
  </template>

  <template #default>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <ProductDetails />
          <ProductSpecs />
        </v-col>

        <v-col cols="12" md="4">
          <ProductActions />
        </v-col>
      </v-row>
    </v-container>
  </template>
</UiPage>
```

---

# 🧩 Padrão 1 — Página de detalhe (Admin SaaS)

## Objetivo

- Mobile: stack
- Desktop: conteúdo + sidebar

```vue
<v-row>
  <v-col cols="12" md="8">
    <Card title="Informações">
      ...
    </Card>

    <Card title="Especificações">
      ...
    </Card>
  </v-col>

  <v-col cols="12" md="4">
    <Card title="Ações">
      ...
    </Card>
  </v-col>
</v-row>
```

---

# 🧩 Padrão 2 — Edição por blocos (seu caso)

## Ideia

Admin edita por seção, não página inteira.

```vue
<ProductSection title="Dados">
  <template #actions>
    <UiButton label="Editar" />
  </template>
</ProductSection>
```

👉 Benefícios:

- UX melhor
- menos estado global
- reuso de componentes

---

# 🧩 Padrão 3 — Formulário profissional

```vue
<v-row>
  <v-col cols="12" sm="6">
    Nome
  </v-col>

  <v-col cols="12" sm="6">
    Categoria
  </v-col>

  <v-col cols="12" md="4">
    Preço
  </v-col>

  <v-col cols="12" md="4">
    Estoque
  </v-col>

  <v-col cols="12" md="4">
    Status
  </v-col>
</v-row>
```

---

# 🧩 Padrão 4 — Listagem (cards)

```vue
<v-row>
  <v-col cols="12" sm="6" md="4" lg="3">
    <ProductCard />
  </v-col>
</v-row>
```

---

# 🧠 Grid Composável (nível avançado)

```vue
<v-col cols="12" md="8">
  <v-row>
    <v-col cols="12" sm="6">
      Campo 1
    </v-col>

    <v-col cols="12" sm="6">
      Campo 2
    </v-col>
  </v-row>
</v-col>
```

👉 Grid dentro de grid

---

# ⚠️ Anti-patterns

❌ Pensar desktop-first  
❌ Usar CSS pra corrigir grid  
❌ Ignorar quebra de linha (>12)

---

# 🧠 Regra final

- `cols` define mobile
- `sm/md/lg` escalam layout
- sempre pense em **progressão**, não adaptação

---

# 🚀 Arquitetura sugerida (Nuxt)

```
components/
  ui/
    UiPage.vue
    UiCard.vue
    UiButton.vue

  product/
    ProductDetails.vue
    ProductSpecs.vue
    ProductActions.vue
```

---

# 💡 Insight final

👉 Seu layout não é “uma página”

👉 É uma **composição de blocos independentes com grid próprio**

Isso é o que diferencia:

- CRUD simples
  vs
- SaaS escalável
