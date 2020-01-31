# Technologies

## 1. Auto Formatting

---

VSCode is configured to format on save and to use .prettierrc.yml to auto format your code. Eslint is configured to warn on checking in console.log statements.

### Packages:

- eslint
- prettier

### Commands:

- `npm run lint` - Runs eslint
- `npm run prettier` - Checks for prettier errors.
- `npm run prettier -- --write` - Will reformat your entire code base, so make sure you use git

These files work together to make sure you have pretty code. Note, that if you wish to change things, sometimes you have to add them to both prettier and eslint so they don't fight each other in your editor.

- `.vscode/settings.yml` - Settings for vscode project
- `.eslintrc.yml` - eslint settings
- `.prettierrc.yml` - prettier settings

---

## 2. git hooks

---

Husky provides the ability to add git hooks. This makes sure your lint and tests pass before you push. This can interfere if you need help and just want to push a branch though.

### Packages:

- husky
