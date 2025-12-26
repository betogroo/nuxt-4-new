<script setup lang="ts">
  import { SignupSchema } from '~/schemas'

  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Signup',
      hidden: true,
    },
  })

  const { values, handleSubmit, meta, color } = useZodForm(SignupSchema, {
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
    <ui-card-auth>
      <ui-base-title>Signup</ui-base-title>
      <ui-form @submit="onSubmit">
        <ui-form-stack>
          <ui-text-field label="Email" name="email" type="email" />
          <ui-text-field label="Senha" name="password" type="password" />
          <ui-text-field label="Confirme a senha" name="passwordConfirm" type="password" />
          <ui-btn :color="color" :disabled="!meta.valid" type="submit">Signup</ui-btn>
        </ui-form-stack>
      </ui-form>
      <ui-card-footer>
        Clique <nuxt-link to="/login">aqui</nuxt-link> acessar o sistema
      </ui-card-footer>
    </ui-card-auth>
  </app-public-container>
</template>
