# All about drinks

### Table of Contents:

0. [General Information](#general-information)

1. [Backend](#backend)
   - [Introduction](#introduction)
   - [How to run the server](#how-to-run-the-server)
2. [Frontend](#frontend)

   - [Introduction](#introduction)
   - [Available Scripts](#available-scripts)
   - [Component Architecture](#component-architecture)
   - [Tests](#tests)

## General Information

The project is split into two folders, frontend & backend.
They are two independet projects and the backend just serves the data for the frontend. Each project has its own modules.
This project uses [yarn](https://yarnpkg.com/) as a package manager.
To install the node modules use `yarn`.

## Backend

### Introduction

This project serves as a local HTTP backend to fetch some hardcoded JSON data for the frontend. For this the node module [express](https://expressjs.com/de/) is used.  
  
If you change the data `products.json` you need to restart the server.

### How to run the server

#### `yarn server`

Launches the server on port [http://localhost:8000](http://localhost:8000)

## Frontend

## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

There are currently no test in this project. Maybe come back in a few weeks.
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Component Architecture

#### Styled Components

This project uses [Styled-Components](https://styled-components.com/) instead of css/sass.

#### Adding New Components

New components should be added in `src/components` and have the following structure in their own directory:

```
src/Components/
    └── Component/
        ├── index.js
        ├── Component.styled.js
        └── Component.js
```

The `index.js` exports all the Components.  
Into the `Component.styled.js` all your Styled Components.  
`Components.js` contain your actual components.


### Tests

tbd