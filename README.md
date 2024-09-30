# vue-xml-forms

Generate XML from Forms. This utilizes:

- Json Forms. See  [jsonforms.io](https://jsonforms.io/)
- Js to Xml. See [jstoxml](https://www.npmjs.com/package/jstoxml)

Although jsonforms.io provided a seed for vue , it is by default using vanilla js. This project uses Vuetify integration. See [vue-vuetify](https://www.npmjs.com/package/@jsonforms/vue-vuetify)

For state management, this project uses Pinia. see (pinia.vuejs.org)[https://pinia.vuejs.org/core-concepts/]

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## LICENSE: 
MIT