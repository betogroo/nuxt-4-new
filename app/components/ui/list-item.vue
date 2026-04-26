<script setup lang="ts"></script>

<template>
  <v-list-item v-bind="$attrs">
    <template #append> <slot name="actions" /></template>
    <template #prepend>
      <div class="d-flex flex-column">
        <h1 class="text-subtitle-1 font-weight-bold">
          <slot name="title" />
        </h1>
        <h2 class="text-body-2 font-weight-light">
          <slot name="subtitle" />
        </h2>
      </div>
    </template>

    <slot />
  </v-list-item>
</template>
