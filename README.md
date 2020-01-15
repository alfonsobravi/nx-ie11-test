# Nx Ie11 Test

This project was generated using [Nx](https://nx.dev) in order to check IE11 compatibility of the stack.

## `yarn start`

### .babelrc 

`.babelrc` has been moved from the app folder to the main monorepo folder, so that depending libraries can be transpiled with the same rules
 (see `Xyz` component from `ui` library I've imported in `App.tsx`);

### Immer

[Immer](https://github.com/immerjs/immer) seem to be quite unstable in my real environment, but it transpiles fine here. I've added a very simple example from the official documentation.

### Redux, Saga & Dynamic modules

I've added a very simple example too.

## `yarn build`

Back to square zero. With or withour Immer, with or without including a library dependency, it renders a white page. No errors, no life.

## _demo application

Slightly more complex example, stripped down from a real scenario prototype. Looks ugly.
It works fine in dev mode, but i had to use react-app-polyfill to avoid issue with IE throwing syntax errors for some specific ES6 functions:
```
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
``` 
Same issue as the other app, when built 😖

