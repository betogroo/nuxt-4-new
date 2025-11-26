<template>
  <v-app>
    <nav class="d-flex justify-end ga-2 mr-12">
      <nuxt-link to="/">Home</nuxt-link>
      <div>|</div>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
