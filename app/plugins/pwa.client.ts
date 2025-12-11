export default defineNuxtPlugin(() => {
  if (import.meta.client && 'serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      console.log('SW registrado:', registration)
    })
  }
})
