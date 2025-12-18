<script setup lang="ts">
  import { LoginSchema } from '~/schemas'
  import type { Login } from '~/types'

  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Login',
      hidden: true,
    },
  })

  const { values, handleSubmit, meta } = useForm<Login>({
    validationSchema: toTypedSchema(LoginSchema),
    initialValues: {
      email: '',
      password: '',
    },
  })

  const color = computed(() => {
    if (!meta.value.dirty) return ''
    return !meta.value.valid ? 'error' : 'success'
  })
  const { value: email, errorMessage: emailError } = useField<string>('email')
  const { value: password, errorMessage: passwordError } = useField<string>('password')

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
          <ui-form-text-field v-model="email" :error="emailError" label="Email" type="email" />
          <ui-form-text-field-password v-model="password" :error="passwordError" label="Senha" />
          <ui-form-btn-submit :color="color" :disabled="!meta.valid">Login</ui-form-btn-submit>
        </ui-form-stack>
      </ui-base-form>
      <ui-card-footer>
        Clique <nuxt-link to="/signup">aqui</nuxt-link> para se cadastrar
      </ui-card-footer>
    </ui-card-auth>
  </app-public-container>
</template>
