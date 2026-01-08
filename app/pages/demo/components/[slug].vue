<script setup lang="ts">
  const route = useRoute()
  const { data: ui } = await useAsyncData(() =>
    queryCollection('ui').path(`/ui/${route.params.slug}`).first(),
  )
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Ui Notifications',
      hidden: false,
      areas: ['components'],
      priority: 'notifications',
    },
  })

  if (!ui.value) {
    throw createError({ statusCode: 404 })
  }

  const { notify } = useNotification()
  const { openDialog, isOpen } = useDialog()
</script>

<template>
  <div v-if="ui">
    <ClientOnly>
      <article class="md-content">
        <ContentRenderer :value="ui" />
      </article>
      <ui-card-grid>
        <div v-if="route.params.slug === 'notification'">
          <ui-btn color="error" @click="notify('Erro ao realizar a ação', 'error')">Erro</ui-btn>
          <ui-btn color="success" @click="notify('Ação concluída com êxito', 'success')"
            >Sucesso</ui-btn
          >
          <ui-btn color="warning" @click="notify('Cuidado ao continuar', 'warning')"
            >Atenção</ui-btn
          >
          <ui-btn color="info" @click="notify('O sistema já está operante', 'info')"
            >Informação</ui-btn
          >
          <ui-btn
            color="warning"
            @click="notify('O sistema já está operante', 'warning', { timeout: 5000 })"
            >Informação (5000ms)</ui-btn
          >
        </div>
        <div v-if="route.params.slug === 'dialog'">
          <ui-btn @click="openDialog"> Abrir diálogo </ui-btn>

          <ui-dialog v-model="isOpen" title="Confirmação" title-icon="update">
            Tem certeza que deseja realizar esta ação?
          </ui-dialog>
        </div>
      </ui-card-grid>
      <ui-link-back />
    </ClientOnly>
  </div>
</template>
