# trackpack-api
TrackPack RESTful Developer Documentation

## Setting up the development environment
The dependencies required should be included in the repository. Future colaborators are *not* required to push any dependencies added to the repo, rather update package.json and include the appropriate documentation to suggest changes.

### Dependencies
* [body-parser](https://github.com/expressjs/body-parser) - Processes incoming request bodies via middleware before handlers
* [express](https://expressjs.com/) - Node.js web application framework
* [express-jwt](https://github.com/auth0/express-jwt) - handling JSON web tokens in Express
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JSON web token generation
* [mongoose](https://mongoosejs.com/) - Object Modeling for MongoDB
* [passport](http://www.passportjs.org/) - Middleware for processing web token authentication 
* passport-local
* passport-local-mongoose
* [redis](http://redis.js.org/) - Performance/caching

### Dev Dependencies
* babel-cli
* babel-core
* babel-eslint
* babel-preset-es2015
* babel-preset-stage-0
* eslint
* nodemon
* cors (testing, may not be included in future releases)

### Future Dependencies Proposed
* redis

While the development build of the TrackPack API relies on nodemon for monitoring changes, the production environment relies on the pm2 package; which can be seen in package.json.

### Deploying
There are a few scripts configured in package.json of the TrackPack API. Each is designed to serve as a tool to assist the transistion from dev to production with no issues. [PM2](https://pm2.keymetrics.io/) is required for production deployment.

#### `npm run lint` 
This will run the eslint package, testing the source code for errors. `eslintConfig` specifies ECMAScript v7 and warns us of any unused variables. When running the lint script, expect to see 13 unused variable warnings.
#### `npm run test` 
This will just return an error at this time, but can be configured for various testing patterns in the future.
#### `npm run build` 
Self-explanatory.
#### `npm run dev` 
This will start the API in developer mode, with nodemon and babel-node.
#### `npm start`
This will place the API in production mode and start via PM2.