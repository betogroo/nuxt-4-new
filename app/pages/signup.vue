<script setup lang="ts">
  import { SignupSchema } from '~/schemas'

  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Signup',
      hidden: true,
    },
  })

  const { values, handleSubmit, meta, handleReset } = useZodForm(SignupSchema, {
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const onSubmit = handleSubmit(async () => {
    const { passwordConfirm, ...payload } = values

    console.log('SIGNUP: ', payload)
  })
</script>

<template>
  <app-public-container>
    <ui-card width="350">
      <ui-heading :level="3">Signup</ui-heading>
      <ui-form :is-valid="!meta.valid" @reset="handleReset" @submit="onSubmit">
        <ui-text-field label="Email" name="email" type="email" />
        <ui-text-field label="Senha" name="password" type="password" />
        <ui-text-field label="Confirme a senha" name="passwordConfirm" type="password" />
      </ui-form>
      <template #actions>
        Clique <nuxt-link to="/login">aqui</nuxt-link> acessar o sistema
      </template>
    </ui-card>
  </app-public-container>
</template>
