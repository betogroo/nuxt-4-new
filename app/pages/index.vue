<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Home Page',
      areas: ['navbar', 'drawer'],
      hidden: false,
      icon: 'home',
      priority: 'index',
    },
  })

  const click = () => {
    alert('Clicou')
  }
</script>

<template>
  <ui-page :title="`Home page`">
    <ui-list width="220">
      <v-list class="pa-1" density="compact" nav>
        <ui-menu-item
          append="Fim"
          base-color="red"
          icon="currency"
          icon-color="black"
          shape="pill"
          @onclick="click"
        />
        <ui-menu-item
          base-color="primary"
          icon="currency"
          shape="pill"
          title="Fim"
          @onclick="click"
        />
      </v-list>
    </ui-list>
  </ui-page>
</template>
