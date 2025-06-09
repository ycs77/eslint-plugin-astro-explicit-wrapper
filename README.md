# eslint-plugin-astro-explicit-wrapper

[![NPM version][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE)
[![GitHub Tests Action Status][ico-github-action]][link-github-action]
[![Total Downloads][ico-downloads]][link-downloads]

ESLint plugin for use in Astro, requires explicit wrapping adjacent JSX elements in `&&` or ternary expressions with an HTML element or Fragment.

## Why

Astro allows returning multiple elements, but when using ESLint Stylistic's [indent rule](https://eslint.style/rules/indent), the inner elements are not properly indented. Wrapping them in a single element or Fragment ensures correct indentation and code style.

## Installation

To use this plugin, you need to have install [ESLint](https://eslint.org/) and [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro) in your Astro project.

```bash
npm install eslint eslint-plugin-astro-explicit-wrapper -D
# or
yarn add eslint eslint-plugin-astro-explicit-wrapper -D
```

Add the plugin to your ESLint configuration:

```js
// eslint.config.js
import astroExplicitWrapper from 'eslint-plugin-astro-explicit-wrapper'

export default {
  ...astroExplicitWrapper.config,
}
```

## Rules

| Rule ID | Description |
| --- | --- |
| [`explicit-wrapper`](src/rules/explicit-wrapper.md) | Requires explicit wrapping adjacent JSX elements in `&&` or ternary expressions with an HTML element or Fragment. |

## Sponsor

If this package has helped you, please consider [becoming a sponsor](https://www.patreon.com/ycs77) to support my work. Your avatar will be displayed on my major projects.

<p align="center">
  <a href="https://www.patreon.com/ycs77">
    <img src="https://cdn.jsdelivr.net/gh/ycs77/static/sponsors.svg"/>
  </a>
</p>

<a href="https://www.patreon.com/ycs77">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" />
</a>

## Credits

* [eslint-plugin-antfu](https://github.com/antfu/eslint-plugin-antfu)

## License

Under the [MIT LICENSE](LICENSE)

[ico-version]: https://img.shields.io/npm/v/eslint-plugin-astro-explicit-wrapper?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square
[ico-github-action]: https://img.shields.io/github/actions/workflow/status/ycs77/eslint-plugin-astro-explicit-wrapper/ci.yml?branch=main&label=tests&style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/eslint-plugin-astro-explicit-wrapper?style=flat-square
[link-npm]: https://www.npmjs.com/package/eslint-plugin-astro-explicit-wrapper
[link-github-action]: https://github.com/ycs77/eslint-plugin-astro-explicit-wrapper/actions/workflows/ci.yml?query=branch%3Amain
[link-downloads]: https://www.npmjs.com/package/eslint-plugin-astro-explicit-wrapper
