<script setup lang="ts">
  import { AppError } from '~/error/AppError'
  import { SignupFormSchema } from '~/schemas'
  const router = useRouter()

  definePageMeta({
    layout: 'no-nav',
    middleware: 'guest',
    menu: {
      title: 'Signup',
      hidden: true,
    },
  })
  const { authenticate } = useAuth()
  const { notify } = useNotification()

  const { values, handleSubmit, meta, handleReset } = useZodForm(SignupFormSchema, {
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const onSubmit = handleSubmit(async () => {
    try {
      const { passwordConfirm, ...payload } = values
      await authenticate('signup', payload)
      notify('Cadastro realizado com sucesso', 'success', { timeout: 2000 })
      await router.push('/contact')
    } catch (error) {
      if (error instanceof AppError) {
        notify(error.message, 'error')
        return
      }
      notify('Erro inesperado. Tente mais tarde', 'error', { timeout: 2000 })
    }
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
