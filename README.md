# Project Starter Kit (gulp 4, webpack 4, pug, sass)

Project template for static site

## Installation

Firstly, clone the project starter kit

```bash
git clone git@github.com:Volosojui/project-starter.git project-folder-name && cd project-folder-name
```

then install all the packages using npm

```bash
npm i
```

or using yarn

```bash
yarn
```

## Run

### Run with change tracking in realtime (html, css, js, iconfont).

This mode generates sourcemaps for styles and scripts, so you can always easily debug your code

```bash
npm run start
```

or using yarn

```bash
yarn start
```

### Compiles all files to folder `build` (no minification)

```bash
npm run build
```

or using yarn

```bash
yarn build
```

### Compiles all files to production folder `dist` (with minification)

```bash
npm run dist
```

or using yarn

```bash
yarn dist
```

### Deploy build version to gh-pages

```bash
npm run deploy
```

or using yarn

```bash
yarn deploy
```

### Deploy production version to gh-pages

```bash
npm run deploy:dist
```

or using yarn

```bash
yarn deploy:dist
```

## Environments

node@^10