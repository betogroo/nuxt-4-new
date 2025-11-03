// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'

export default withNuxt({
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        bracketSameLine: false,
        vueIndentScriptAndStyle: true,
      },
    ],
    // suas regras Vue / TS existentes
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/block-order': ['error', { order: ['script[setup]', 'template', 'style'] }],
    'vue/define-macros-order': [
      'error',
      { order: ['defineOptions', 'defineProps', 'defineEmits'] },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
    'vue/max-attributes-per-line': 'off',
    /*  'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ], */
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
