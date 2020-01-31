# Technologies

## 1. auto formatting

---

VSCode is configured to format on save and to use .prettierrc.yml to auto format your code. Eslint is configured to warn on checking in console.log statements.

### node_modules

- eslint
- prettier

### commands:

- `npm run lint` - Runs eslint
- `npm run prettier` - Checks for prettier errors.
- `npm run prettier -- --write` - Will reformat your entire code base, so make sure you use git

### files

- `.vscode/settings.yml` - Settings for vscode project
- `.eslintrc.yml` - eslint settings
- `.prettierrc.yml` - prettier settings

  These files work together to make sure you have pretty code. Note, that if you wish to change things, sometimes you have to add them to both prettier and eslint so they don't fight each other in your editor.

---

## 2. git hooks

---

Husky provides the ability to add git hooks. This makes sure your lint and tests pass before you push. This can interfere if you need help and just want to push a branch though.

### node_modules

- husky

---

## 3. environment variables

---

If you use typescript to import the environment variables, you will see those annoying typescript errors in the editor. Because of this, you should use a `js` file. This allows you to get code completion without the ugly red lines. There is something going on that causes simpler syntax to fail.

    // .env
    API_KEY=1234

This doesn't work

    // src/env.js
    import { API_KEY } from 'react-native-dotenv';
    export default {
        API_KEY,
    };

This does

    // src/env.js
    import { API_KEY } from 'react-native-dotenv';
    export default {
        API_KEY: API_KEY,
    };

### node_modules

- react-native-dotenv
- @types/react-native-dotenv
- metro-react-native-babel-preset

### files

- `env.sample` - Rename this to `.env`
- `.env` - Environment variables used during development
- `.env.production` - the release build will pick up these values

## 4. jest

Set the code coverage threshold to 80% so that testing fails if poor code coverage

Avoid using snapshots (https://jestjs.io/docs/en/snapshot-testing) because they are so brittle. They are tied too closely to your implementation.

### package.json

If you have mocks that you are using repeatedly, add them to the setupFiles in jest. The name of the file doesn't matter as long as you point to it. The `<rootDir>` is

    "setupFiles": [
      "<rootDir>/src/jest.setup.ts"
    ],

Some modules are published untransformed. You need to exclude those modules from being ignored. So if you had a module named `my-module` that needed transpiling you would set it to the following:

    "transformIgnorePatterns": [
      "node_modules/(?!(react-native|my-module)/)"
    ]

### commands:

- `npm run test` - Run all tests
- `npm run test:coverage` - Run coverage reports for all tests
- `npm run test:watch` - Watches files for changes and executes tests against them

### files

- `coverage` - The folder where coverage reports are generated
- `src/jest.setup.ts` - Your global jest configuration for mocks identified by `package.jest.setupFiles`
