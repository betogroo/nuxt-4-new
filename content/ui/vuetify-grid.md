---
slug: vuetify-grid
updated: 2026-04-24
---

# 🧠 Mapa Mental — Grid Responsivo (Vuetify)

## 📱 1. Mobile First (Regra de Ouro)

Tudo começa no `cols`.

- Pense sempre primeiro no mobile
- Layout geralmente empilhado (12 colunas)

```vue
<v-col cols="12" />
```

---

## 📲 2. Tablet (`sm`)

Começa a dividir layout:

```vue
<v-col cols="12" sm="6" />
<v-col cols="12" sm="6" />
```

---

## 💻 3. Desktop (`md` / `lg`)

Layout mais estruturado:

```vue
<v-col cols="12" md="8" />
<v-col cols="12" md="4" />
```

---

## 🖥️ 4. Telas grandes (`xl` / `xxl`)

Ajustes de leitura:

```vue
<v-container max-width="1200" />
```

---

# 🎯 Padrões prontos

## 🔹 Formulário

```vue
<v-row>
  <v-col cols="12" sm="6">Nome</v-col>
  <v-col cols="12" sm="6">Email</v-col>
  <v-col cols="12">Descrição</v-col>
</v-row>
```

---

## 🔹 Página de detalhes

```vue
<v-row>
  <v-col cols="12" md="8">Detalhes</v-col>
  <v-col cols="12" md="4">Ações</v-col>
</v-row>
```

---

## 🔹 Grid de cards

```vue
<v-col cols="12" sm="6" md="4" lg="3">
  Card
</v-col>
```

---

## 🔹 Caso específico

```vue
<v-row>
  <v-col cols="6">Primeira</v-col>
  <v-col cols="6" sm="12">Segunda</v-col>
</v-row>
```

---

# ⚠️ Erros comuns

- Não pensar mobile-first
- Ultrapassar 12 colunas
- Forçar layout com CSS ao invés do grid

---

# 🧠 Regra final

- `cols` = base (mobile)
- `sm/md/lg` = sobrescrevem progressivamente
