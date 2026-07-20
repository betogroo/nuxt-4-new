<script setup lang="ts">
  const click = () => {
    alert('Clicou')
  }
</script>

<template>
  <ui-card-grid direction="column" width="250">
    <ui-menu-item
      append="Fim"
      base-color="red"
      icon="currency"
      icon-color="black"
      shape="pill"
      @onclick="click"
    />
    <ui-menu-item base-color="primary" icon="currency" shape="pill" title="Fim" @onclick="click" />
  </ui-card-grid>
</template>
