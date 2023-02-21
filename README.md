<h1 align="center">
APIs collection
</h1>

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

The API arose for didactic purposes. The general idea is to have several APIs centralized from which information on products, movies, can be obtained.

The deployment is done at [renderer](https://render.com/docs), with the free plan. So the requests, build of the project are limited.

## Development

To get a local copy, clone it using:
```
git clone https://github.com/castromaciel/APIs-collection.git
```

### Install dependencies:

```
yarn install
or
npm install 
```

### Available Scripts

In this project, you can run the following scripts:

| Script            | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| yarn build        | Builds the app for production to the `dist` folder.                   |
| yarn build:render | Install deps and build the app for production to the `dist` folder.   |
| yarn tsc:watch    | Runs observer mode to react to compilation status.                    |
| yarn start        | Runs the app at prod mode.                                            |
| yarn dev          | Runs the app in the development mode.                                 |
| yarn format       | Check lint file problems                                               |

## Base Dependencies

- [cors](https://github.com/expressjs/cors#readme) for providing a Connect/Express middleware.
- [dotenv](https://github.com/motdotla/dotenv#readme) loads environment variables from a .env file into process.env.
- [express](https://expressjs.com/) framework for Node.js.
- [helmet](https://helmetjs.github.io/) to setting response HTTP headers.
- [mongoose](https://mongoosejs.com/) mongodb object modeling for node.js.

## Folder Structure

```
apis-collection
├── dist
    ├── src
    ├── app.js
├── node_modules
├── public
│   └── error
│   └── index.html
└── src
    ├── controllers
    ├── database
    ├── models
        ├── server.ts
    ├── routes
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── app.ts
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

## Styleguide

For coding styling, I decided to use [eslint](https://eslint.org/) and the [eslint-airbnb-base configuration](https://github.com/airbnb/javascript#readme), with some personal modifications.

## Credits

APIs collection is built and maintained by [Castro Maciel](https://github.com/castromaciel)

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
