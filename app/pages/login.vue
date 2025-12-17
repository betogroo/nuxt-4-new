<script setup lang="ts">
  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Login',
      hidden: true,
    },
  })

  const email = ref<string>()
  const password = ref<string>()

  const testForm = () => {
    console.log(email.value, password.value)
  }
</script>

<template>
  <app-public-container>
    <ui-card-auth>
      <ui-base-title>Login</ui-base-title>
      <ui-base-form @submit="testForm">
        <ui-form-stack>
          <ui-form-text-field v-model="email" label="Email" type="email" />
          <ui-form-text-field-password v-model="password" label="Senha" />
          <ui-form-btn-submit>Submit</ui-form-btn-submit>
        </ui-form-stack>
      </ui-base-form>
      <ui-card-footer>
        Clique <nuxt-link to="/signup">aqui</nuxt-link> para se cadastrar
      </ui-card-footer>
    </ui-card-auth>
  </app-public-container>
</template>
