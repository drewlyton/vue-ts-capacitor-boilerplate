# Vue 3 + TypeScript Stack for Mobile Apps

This template is designed for speedy development of a new Capacitor project that uses Vue 3 and Typescript. It comes with the essentials for a speedy development workflow including:

- Development tooling powered by [Vite](https://vitejs.dev/)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)
- Native plugins with [Capacitor](https://capacitorjs.com/docs)
- Native UI Styling with [Ionic](https://ionicframework.com/docs/)
- Additional styling with [Tailwind](https://tailwindcss.com/)
- State management with [Pinia](https://pinia.vuejs.org/)
- Routing with [VueRouter](https://router.vuejs.org/)
- Generators using [Plop](https://plopjs.com/)
- CI using GithubActions

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- Other recommended extensions in `.vscode` folder

---

## Getting started

Install Node 18 using `nvm`:

```sh
nvm i
```

Install dependencies using npm:

```sh
npm i
```

Start the dev server:

```
npm run dev
```

---

## Building

### For Web

```
npm run build
```

### For iOS

```
npm run build:ios
```

### For Android

```
npm run build:android
```

---

## Generators

I've setup a series of Plop generators for easily creating Components, Pages, and Templates. Check them out using:

```sh
npm run generate # or just 'g' for short
```

---

## Testing

### Vitest

For lower level tests of utilities and individual components, we use Vitest. You can start the testing server by using `npm run test`.

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use Prettier for auto-formatting in this project. It's recommended to install an editor plugin (like the VSCode Prettier plugin) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
