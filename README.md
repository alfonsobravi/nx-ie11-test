# Nx Ie11 Test

This project was generated using [Nx](https://nx.dev) in order to check IE11 compatibility of the stack.

## `yarn start`

### .babelrc 

`.babelrc` has been moved from the app folder to the main monorepo folder, so that depending libraries can be transpiled with the same rules
 (see `Xyz` component from `ui` library I've imported in `App.tsx`);

### Immer

[Immer](https://github.com/immerjs/immer) seem to be quite unstable in my real environment, but it transpiles fine here. I've added a very simple example from the official documentation.

## `yarn build`

Back to square zero. With or withour Immer, with or without including a library dependency, it renders a white page. No errors, no life :(

