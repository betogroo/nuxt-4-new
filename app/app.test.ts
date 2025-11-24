import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppPage from './app.vue'

describe('Home Page', () => {
  it('must render Page', async () => {
    const wrapper = await mountSuspended(AppPage)
    expect(wrapper.text()).toContain('Nuxt Project')
  })
})
