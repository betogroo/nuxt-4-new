<template>
  <v-app class="bg-grey-lighten-5">
    <app-nav-bar />
    <v-main>
      <v-container class="bg-grey-lighten-5" max-width="1280">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
