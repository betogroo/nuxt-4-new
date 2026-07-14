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

  const card = [
    {
      id: 'adadad',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'wewew',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'rtrtr',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'adauyuyudad',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'adadad',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'wewew',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'rtrtr',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'adauyuyudad',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'wewew',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'rtrtr',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
    {
      id: 'adauyuyudad',
      title: 'Aqui é o Título',
      subtitle: 'Aqui é o subtítulo',
      color: 'red',
    },
  ]
</script>

<template>
  <ui-page :title="`Home page`">
    <ui-card-grid>
      <ui-card v-for="item in card" :key="item.id" variant="tonal" width="250" />
    </ui-card-grid>
  </ui-page>
</template>
