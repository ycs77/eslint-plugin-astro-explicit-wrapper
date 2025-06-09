import ycs77 from '@ycs77/eslint-config'

export default ycs77({
  astro: true,
  typescript: true,
  type: 'lib',
  ignores: ['**/*.md'],
})
