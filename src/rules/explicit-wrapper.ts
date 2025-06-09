import { createRule } from '../utils'

export const RULE_NAME = 'explicit-wrapper'
export type MessageIds = 'adjacentJsxNotWrapped'
export type Options = []

export default createRule({
  meta: {
    type: 'problem',
    docs: {
      description: 'Require wrapping adjacent JSX elements in `&&` or ternary expressions with an HTML element or Fragment.',
      url: 'https://github.com/ycs77/eslint-plugin-astro-wrap-elements/blob/main/src/rules/wrap-elements.md',
    },
    messages: {
      adjacentJsxNotWrapped: 'Adjacent JSX elements must be wrapped in an enclosing tag',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      LogicalExpression(node) {
        if (node.operator === '&&' && (node.right.type as any) === 'AstroFragment') {
          context.report({
            node: node.right,
            messageId: 'adjacentJsxNotWrapped',
          })
        }
      },
      ConditionalExpression(node) {
        [node.consequent, node.alternate].forEach(branch => {
          if ((branch.type as any) === 'AstroFragment') {
            context.report({
              node: branch,
              messageId: 'adjacentJsxNotWrapped',
            })
          }
        })
      },
    }
  },
})
