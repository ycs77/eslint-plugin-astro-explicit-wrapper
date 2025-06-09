# explicit-wrapper

Requires explicit wrapping adjacent JSX elements in `&&` or ternary expressions with an HTML element or Fragment.

## Why

Astro allows returning multiple elements, but when using ESLint Stylistic's [indent rule](https://eslint.style/rules/indent), the inner elements are not properly indented. Wrapping them in a single element or Fragment ensures correct indentation and code style.

## Rule Details

```jsx
// 👎 Incorrect
<div>
  {condition && (
    <div>{a1}</div>
    <div>{a2}</div>
  )}
</div>

<div>
  {condition ? (
    <div>{a1}</div>
    <div>{a2}</div>
  ) : (
    <div>{a3}</div>
    <div>{a4}</div>
  )}
</div>
```

```jsx
// 👍 Correct
<div>
  {condition && (
    <>
      <div>{a1}</div>
      <div>{a2}</div>
    </>
  )}
</div>

<div>
  {condition && (
    <div>
      <div>{a1}</div>
      <div>{a2}</div>
    </div>
  )}
</div>

<div>
  {condition ? (
    <Fragment>
      <div>{a1}</div>
      <div>{a2}</div>
    </Fragment>
  ) : (
    <>
      <div>{a3}</div>
      <div>{a4}</div>
    </>
  )}
</div>
```
