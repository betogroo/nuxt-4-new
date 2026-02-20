<script setup lang="ts">
  definePageMeta({
    layout: 'default',

    menu: {
      title: 'Demonstração',
      hidden: false,
      icon: 'doc',
      areas: ['navbar'],
    },
  })
  const { getMenuByArea } = useNavigation()
  const content = getMenuByArea('content')
</script>

<template>
  <ui-page title="Documentação">
    <ul>
      <li v-for="item in content" :key="item.name">
        <nuxt-link :to="item.path">{{ item.menu?.title }}</nuxt-link>
      </li>
    </ul>
  </ui-page>
</template>
