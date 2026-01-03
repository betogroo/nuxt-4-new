<script setup lang="ts">
  import { LoginSchema } from '~/schemas'

  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Login',
      hidden: true,
    },
  })

  const { values, handleSubmit, meta, handleReset } = useZodForm(LoginSchema, {
    email: '',
    password: '',
  })

  const onSubmit = handleSubmit(async () => {
    console.log('LOGIN: ', values)
  })
</script>

<template>
  <app-public-container>
    <ui-card width="350">
      <ui-heading :level="3">Login</ui-heading>
      <ui-form :is-valid="!meta.valid" @reset="handleReset" @submit="onSubmit">
        <div>
          <ui-text-field label="Email" name="email" type="email" />
          <ui-text-field label="Senha" name="password" type="password" />
        </div>
      </ui-form>

      <template #actions>
        Clique <nuxt-link to="/signup">aqui</nuxt-link> para se cadastrar
      </template>
    </ui-card>
  </app-public-container>
</template>
