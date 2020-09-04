import rule from 'eslint/lib/rules/no-unused-vars';
import { RuleTester } from '../RuleTester';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  parser: '@typescript-eslint/parser',
});

ruleTester.run('no-unused-vars', rule, {
  valid: [
    `
const a = 5;
console.log(a);
    `,
    `
enum MY_ENUM {
  'FIRST_VALUE',
  'SECOND_VALUE',
}
console.log(MY_ENUM.FIRST_VALUE);
console.log(MY_ENUM.SECOND_VALUE);
    `,
  ],
  invalid: [
    {
      code: `
const a = 5;
      `,
      errors: [
        {
          messageId: 'unusedVar',
          data: {
            varName: 'a',
            action: 'assigned a value',
            additional: '',
          },
        },
      ],
    },
  ],
});
