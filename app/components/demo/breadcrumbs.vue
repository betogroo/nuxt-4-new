<script setup lang="ts">
  const breadcrumbs = [{ title: 'Componentes', href: '/demo/components' }, { title: 'Breadcrumbs' }]
</script>

<template>
  <div><ui-breadcrumbs :breadcrumbs="breadcrumbs" /></div>
</template>
