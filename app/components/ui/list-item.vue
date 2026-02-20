<script setup lang="ts"></script>

<template>
  <v-list-item v-bind="$attrs">
    <template #append> <slot name="actions" /></template>
    <template #prepend> <slot name="prepend" /></template>
    <template #title> <slot name="title" /></template>
    <template #subtitle> <slot name="subtitle" /></template>
    <slot />
  </v-list-item>
</template>
