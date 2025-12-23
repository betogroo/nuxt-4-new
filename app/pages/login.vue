<script setup lang="ts">
  import { LoginSchema } from '~/schemas'

  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Login',
      hidden: true,
    },
  })

  const { values, handleSubmit, meta, color } = useZodForm(LoginSchema, {
    email: '',
    password: '',
  })

  const onSubmit = handleSubmit(async () => {
    console.log('LOGIN: ', values)
  })
</script>

<template>
  <app-public-container>
    <ui-card-auth>
      <ui-base-title>Login</ui-base-title>
      <ui-base-form @submit="onSubmit">
        <ui-form-stack>
          <ui-form-text-field label="Email" name="email" type="email" />
          <ui-form-text-field-password label="Senha" name="password" />
          <ui-btn :color="color" :disabled="!meta.valid" type="submit">Login</ui-btn>
        </ui-form-stack>
      </ui-base-form>
      <ui-card-footer>
        Clique <nuxt-link to="/signup">aqui</nuxt-link> para se cadastrar
      </ui-card-footer>
    </ui-card-auth>
  </app-public-container>
</template>
