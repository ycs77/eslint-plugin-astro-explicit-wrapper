import type { ESLint, Linter } from 'eslint'
import { version } from '../package.json'
import explicitWrapper from './rules/explicit-wrapper'

const plugin = {
  meta: {
    name: 'astro-explicit-wrapper',
    version,
  },
  // @keep-sorted
  rules: {
    'explicit-wrapper': explicitWrapper,
  },
} satisfies ESLint.Plugin

const config: Linter.Config[] = [
  {
    name: 'astro-explicit-wrapper/setup',
    plugins: {
      'astro-explicit-wrapper': plugin,
    },
  },
  {
    name: 'astro-explicit-wrapper/rules',
    files: ['**/*.astro'],
    rules: {
      'astro-explicit-wrapper/explicit-wrapper': 'error',
    },
  },
]

export default Object.assign(plugin, { config })

export const { meta, rules } = plugin

type RuleDefinitions = typeof plugin['rules']

export type RuleOptions = {
  [K in keyof RuleDefinitions]: RuleDefinitions[K]['defaultOptions']
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}
