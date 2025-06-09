import astroParser from 'astro-eslint-parser'
import { run } from './_test'
import rule, { RULE_NAME } from './explicit-wrapper'

const valids = [
  `<div>
  {condition && (
    <>
      <div>{a1}</div>
      <div>{a2}</div>
    </>
  )}
</div>`,
  `<div>
  {condition && (
    <div>
      <div>{a1}</div>
      <div>{a2}</div>
    </div>
  )}
</div>`,
  `<div>
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
</div>`,
]
const invalids = [
  [`<div>
  {condition && (
    <div>{a1}</div>
    <div>{a2}</div>
  )}
</div>`, [{ messageId: 'adjacentJsxNotWrapped' }]],
  [`<div>
  {condition ? (
    <div>{a1}</div>
    <div>{a2}</div>
  ) : (
    <div>{a3}</div>
    <div>{a4}</div>
  )}
</div>`, [
    { messageId: 'adjacentJsxNotWrapped' },
    { messageId: 'adjacentJsxNotWrapped' },
  ]],
]

run({
  name: RULE_NAME,
  rule,
  parser: astroParser,
  valid: valids,
  invalid: invalids.map(i => ({
    code: i[0] as string,
    errors: i[1] as { messageId: string }[],
  })),
})
