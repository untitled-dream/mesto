# Mesto

### 
> Mesto - a typical one-page site created in the process of learning on the web developer of the online education service [Yandex.Practicum](http://practicum.yandex.ru).
> 
> [Live demo](https://untitled-dream.github.io/mesto/index.html)


## Table of Contents
* [Technologies Used](#technologies-used)
* [Design](#design)
* [Features](#features)
* [Setup](#setup)


## Technologies Used
- Flexbox / Grid
- BEM Nested
- API
- Webpack - version 5.72.1
- [Tippy.js](https://atomiks.github.io/tippyjs/v6/getting-started/) - version 6.3.7


## Design
[Figma Layout](https://www.figma.com/file/vvKxt4fRs5Fp4NhnutS3NL/Mesto)


## Features
- Receiving and sending data via API
- Viewing Images
- Adding new content
- Deleting content
- Editing user data
- Set like or dislike
- View users who set like (using [Tippy.js](https://atomiks.github.io/tippyjs/v6/getting-started/))


## Setup
### Install
```bash
# Clone the repository
git clone git@github.com:untitled-dream/mesto.git

# Enter the project directory
cd mesto

# Install dependencies
npm i
```
### Scripts
```bash
# Run a local server at localhost:8080
npm start

# Builds the app for production at the `build` folder
npm build

# Places the production version code into the `gh-pages` branch
npm deploy
```