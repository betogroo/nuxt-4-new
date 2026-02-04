<script setup lang="ts">
  import { AppError } from '~/error/AppError'
  import { CredentialsSchema } from '~/schemas'
  const route = useRoute()
  const router = useRouter()

  definePageMeta({
    layout: 'no-nav',
    middleware: 'guest',
    menu: {
      title: 'Login',
      hidden: true,
    },
  })
  const { authenticate } = useAuth()
  const { notify } = useNotification()

  const { values, handleSubmit, meta, handleReset } = useZodForm(CredentialsSchema, {
    email: '',
    password: '',
  })

  const onSubmit = handleSubmit(async () => {
    try {
      await authenticate('login', values)
      const redirectTo = (route.query.redirectTo as string) || '/contact'
      notify('Logado com sucesso. REDIRECIONANDO', 'success', { timeout: 2000 })
      await router.push(redirectTo)
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
