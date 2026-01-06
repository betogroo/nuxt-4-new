<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    menu: {
      title: 'Componentes',
      hidden: false,
      icon: 'plus',
      areas: ['navbar'],
    },
  })

  const { getMenuByArea } = useNavigation()
  const componentsPages = getMenuByArea('components')
</script>

<template>
  <div>
    <ui-heading :level="3">Componentes</ui-heading>
    <ul>
      <li v-for="item in componentsPages" :key="item.path">
        <nuxt-link :to="item.path">{{ item.menu?.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
