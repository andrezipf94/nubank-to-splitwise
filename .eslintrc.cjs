/* eslint-env node */
module.exports = {
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:prettier/recommended',
      'plugin:jest/recommended',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
   },
   plugins: ['@typescript-eslint'],
   root: true,
};
