# mock service

## Prerequisites

### Windows
* [Node.js](https://nodejs.org/download/release/latest-carbon/node-v8.15.0-x64.msi)
* [npm](https://github.com/coreybutler/nvm-windows#installation--upgrades)

### Linux
* [Node.js](http://nodejs.org/download/)
* [npm](https://docs.npmjs.com/getting-started/installing-node)

## 1. Test mock service

Install using npm. Open a terminal.

```bash
node v8.15.0
npm 6.5.0
$ git clone https://github.com/MGDIS/guide-des-aides.git
$ cd guide-des-aides
$ cd mock-service
$ npm install -g swagger
$ npm install
$ swagger project start
Starting: /guide-des-aides/mock-service/app.js...
  project started here: http://localhost:10010/guide-des-aides
  project will restart on changes.
  to restart at any time, enter `rs`
```

## 2. See API documentation

Open your browser and got to [/docs](http://localhost:10010/docs)

![swagger](/swagger.png "exemple de documentation")

## 3. Get the OpenAPI v2.0 specification file

Open your browser and got to [/api-docs](http://localhost:10010/api-docs)
