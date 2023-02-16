<h1 align="center">
Template: Node + Express + TypeScript
</h1>

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Usage

### Use Template button
Click the `Use this template` button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

A repository created from a template starts with a single commit.
Commits to a repository created from a template do appear in your contribution graph.
Creating a repository from a template starts a new project quickly.


## Development

To get a local copy, clone it using:
```
git clone https://github.com/castromaciel/template-node-express-ts.git
```

### Make it your own

```
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```

### Install dependencies:

```
yarn install
or
npm install 
```

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn build    | Builds the app for production to the `dist` folder. |
| yarn tsc:watch| Runs observer mode to react to compilation status.  |
| yarn start    | Runs the app at prod mode.                          |
| yarn dev      | Runs the app in the development mode.               |
| yarn format   | Check lint file problems                             |

## Base Dependencies

- [cors](https://github.com/expressjs/cors#readme) for providing a Connect/Express middleware.
- [dotenv](https://github.com/motdotla/dotenv#readme) loads environment variables from a .env file into process.env.
- [express](https://expressjs.com/) framework for Node.js.

## Folder Structure

```
template-node-express-ts
├── dist
    ├── app.js
├── node_modules
├── public
│   └── index.html
└── src
    ├── controllers
    ├── middlewares
        ├── server.ts
    ├── models
    ├── routes
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── app.ts
├── package.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

## Styleguide

For coding styling, I decided to use [eslint](https://eslint.org/) and the [eslint-airbnb-base configuration](https://github.com/airbnb/javascript#readme), with some personal modifications.

## Credits

Node-TS with Express is built and maintained by [Castro Maciel](https://github.com/castromaciel)
