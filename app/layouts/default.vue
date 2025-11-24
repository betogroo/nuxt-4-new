<template>
  <div>
    <nav>
      <ul>
        <nuxt-link to="/">
          <li>Home</li>
        </nuxt-link>
        <nuxt-link to="/about">
          <li>About</li>
        </nuxt-link>
      </ul>
    </nav>
    <slot />
  </div>
</template>
