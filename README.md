<h1 align="center">
  <img alt="SuperNova Boilerplate"
    src="https://rawgithub.com/Black-Monolith/SuperNova/master/logo.svg">
</h1>

<p align="center">
  <img alt="Electron + React + Redux + TypeScript + Webpack"
    src="https://rawgithub.com/Black-Monolith/SuperNova/master/icons.svg">
</p>

SuperNova
=========

Electron + React + Redux + TypeScript + Webpack + TypeStyle Boilerplate

Development Mode
----------------

```sh
yarn dev
```

Will build the Main Process with `webpack --watch` and the Renderer Process with `webpack-dev-server`


Production Build
----------------

```sh
yarn build
```

Will build both Main Process and Renderer Process with `webpack`


Start Application
-----------------

```sh
yarn start
```

Will start Electron Application.

Use this same command for both Development Mode and Production Build.


Visual Studio Code
------------------

SuperNova comes with configuration for VSCode:

- `⌘` + `⇧` + `B` to build the application and choose between Development and Build modes
- `⌘` + `R` to run the application in Debug Mode
