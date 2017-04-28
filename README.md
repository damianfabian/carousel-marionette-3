# Carousel with Webpack 2 + MarionetteJS + Babel/ES6

Carousel implemented with the latest modern JS skeleton with MarionetteJS for [Webpack 2](https://webpack.js.org/).

## Web Browser Supportted

THe Carousel was tested with these Browsers:

- Safari 9.1.3
- Chrome Version 57.0.2987.133 (64-bit)


## Features

This Carousel give you the option to customize the next properties:

- Size: Allow you to change the number of blocks to show at the same time
- Delay: The delay or duration time for the animation when the click change the current view
- Current Page: Allow you to start the Carouse in one specific page.

## Examples

Change the Initial Page
```
const view = ItemView({ CUR_PAGE: 2 })
```
Change the Pagination Size
```
const view = ItemView({ PAGINATION: 2 })
```
Change the Delay
```
const view = ItemView({ DELAY: 2000 })
```

## Getting started

* Install:
    * Inside this folder run: `npm install`
* Run:
    * `npm start` — starts project
    * `npm run build` - builds you project
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` and `app/styles/` to `public/`.