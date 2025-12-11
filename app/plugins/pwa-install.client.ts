export default defineNuxtPlugin(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let deferredPrompt: any = null

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e

    // Disponibiliza globalmente
    window.dispatchEvent(new CustomEvent('pwa-install-available'))
  })

  // Expondo a função para ser usada em qualquer componente
  return {
    provide: {
      pwaInstall: async () => {
        if (!deferredPrompt) return false

        deferredPrompt.prompt()
        const result = await deferredPrompt.userChoice
        deferredPrompt = null

        return result
      },
    },
  }
})
