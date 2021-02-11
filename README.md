# Project Starter Kit (gulp 4, webpack 4, pug, sass)

Project template for static site

## Installation

Firstly, clone the project starter kit

```bash
git clone git@github.com:Volosojui/project-starter.git project-folder-name && cd project-folder-name
```

then install all the packages using npm

```bash
npm ci
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
npm run build:prod
```

or using yarn

```bash
yarn build:prod
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
npm run deploy:build:prod
```

or using yarn

```bash
yarn deploy:build:prod
```

## Inline svg sprite

If you would like to use this feature, you should:
1) add any svg icon inside `svgicons` folder
2) then uncomment the following lines:

in `layout.pug`:

```jade
.svg-store
  include ./../../svgicons/svgicons.svg
```

in `_bundle.scss`:

```css
@import 'partials/svg-store';
@import 'partials/svg-icon';
```

__! If you skip the first step, you will get an error in the console__

## Browser suppport

```bash
> 0.25%
not dead
```

## Environments

```bash
node >= 14
```