# Template generator

A template generator using [yeoman](https://yeoman.io/)

## Installation

First, install Yeoman:

```bash
npm install -g yo
```

Since the generator is placed locally, so you need to symlink a global module to the local one, using npm. On the root of the generator project, run the command:

```bash
npm link cikareto
```

Then generate your new project:

```bash
yo cikareto
```

### This generator will ask you questions as following:
- Project Name (default your current directory)
- Version (default 1.0.0)
- Description
- Framework: [`create-react-app`]

## Create React App
[![reactjs](https://img.shields.io/badge/-reactjs-lightgrey?style=flat&logo=react)](https://create-react-app.dev/) [![typescript](https://img.shields.io/badge/-typescript-brightgreen?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![tailwindcss](https://img.shields.io/badge/-tailwindcss-yellow?style=flat&logo=tailwind-css)](https://tailwindcss.com/) 

## Troubleshooting
If `npm i` is failed, it's because of conflict between `react-script` and `typescript` version.

Use this command to get around:

```bash
npm i --legacy-peer-deps
```

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)