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
  ],
  invalid: [
    {
      code: `
enum MY_ENUM {
  FIRST_VALUE,
  SECOND_VALUE,
}
      `,
      errors: [
        {
          messageId: 'unusedVar',
          data: {
            varName: 'MY_ENUM',
            action: 'defined',
            additional: '',
          },
        },
        {
          messageId: 'unusedVar',
          data: {
            varName: 'MY_ENUM',
            action: 'defined',
            additional: '',
          },
        },
        {
          messageId: 'unusedVar',
          data: {
            varName: 'FIRST_VALUE',
            action: 'defined',
            additional: '',
          },
        },
        {
          messageId: 'unusedVar',
          data: {
            varName: 'SECOND_VALUE',
            action: 'defined',
            additional: '',
          },
        },
      ],
    },
  ],
});
