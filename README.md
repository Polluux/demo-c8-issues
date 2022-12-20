# Vitest Issues Demo

This repo has been initialized to create reproductions of Vitest issues.

# Coverage issue with Style tag

Vitest coverage report, using c8, seems broken when using a `<style>` tag in .vue file.

> npm run test coverage-style-tag

Result :

Statements   : 100% ( 1/1 )\
Branches     : 100% ( 0/0 )\
Functions    : 100% ( 0/0 )\
Lines        : 100% ( 1/1 )

Expected result :

Statements   : 91.66% ( 11/12 )\
Branches     : 0% ( 0/1 )\
Functions    : 100% ( 0/0 )\
Lines        : 91.66% ( 11/12 )

To obtain expected result, remove the content of the `<style>` tag in `src/components/StyleTag.vue`.

# Coverage issue with import.meta.env

Vitest coverage report, using c8, seems broken when calling `import.meta.env` from an imported .ts file.

> npm run test coverage-import-meta-env

Result :

Statements   : 100% ( 7/7 )\
Branches     : 100% ( 0/0 )\
Functions    : 100% ( 0/0 )\
Lines        : 100% ( 7/7 )

Expected result :

Statements   : 94.73% ( 18/19 )\
Branches     : 50% ( 1/2 )\
Functions    : 100% ( 1/1 )\
Lines        : 94.73% ( 18/19 )

To obtain expected result, comment line 6 (`console.log(import.meta.env.test);`) in `src/components/ImportMetaEnv.ts`.
