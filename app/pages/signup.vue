<script setup lang="ts">
  import { SignupSchema } from '~/schemas'

  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Signup',
      hidden: true,
    },
  })

  const { values, handleSubmit, meta, color } = useAuth(SignupSchema, {
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
      <ui-base-form @submit="onSubmit">
        <ui-form-stack>
          <ui-form-text-field label="Email" name="email" type="email" />
          <ui-form-text-field-password label="Senha" name="password" />
          <ui-form-text-field-password label="Confirme a senha" name="passwordConfirm" />
          <ui-form-btn-submit :color="color" :disabled="!meta.valid">Login</ui-form-btn-submit>
        </ui-form-stack>
      </ui-base-form>
      <ui-card-footer>
        Clique <nuxt-link to="/login">aqui</nuxt-link> acessar o sistema
      </ui-card-footer>
    </ui-card-auth>
  </app-public-container>
</template>
