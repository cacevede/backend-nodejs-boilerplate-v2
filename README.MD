# Backend Boilerplate Definition

## Version - 2.1

The main objective of the definition of a boilerplate for the development of the backend, which is used in the different projects, is to establish a general structure that covers the general requirements of the same and serves as a basis for initiating the project, also seeks to have as an additional benefit, establish a general working methodology, facilitating the easy integration of new members to the projects, since the structure to be implemented (clean architecture), which is intuitive and clean, can be understood easily and also its structure lends itself to the easy scaling of any of the projects.

Some conventions are established, which seek to work general aspects in a homogeneous way between projects.

## Conventions

- All variable names, file names, etc. must be assigned English names.
- Establish the name of the directories always used as plural (models, controllers, utils, middlewares...).
- File names of the different directories always declared in singular (e.g. model: user, controller: role...).
- Use of camelcase to assign names to declared variables.
- Name of variables should always be the most descriptive, either giving an idea of its function or what data will be stored in it.
- Perform the declaration of variables using the reserved words let or const, taking into account the purpose of that variable.
- Constants that have a global character must be defined in capital letters (e.g. environment variables).
- Avoid reassigning variables declared as constants.
- Always opt, if supported, for the implementation of async - await.
- Use objects to manage functions and variables between components. Perform the export of such objects and in the process of requiring functions or variables of that component, perform the destructuring of it and avoid importing all the data, which is not required at the time.
  Implement the project with the use of eslint and prettier tools.
- All the response must be have a http status

## Commit Rules

A well-crafted Git commit message is the best way to communicate context about a change to fellow developers (and indeed to their future selves). A `diff` will tell you what changed, but only the _commit message_ can properly tell you why.

A team’s approach to its commit log should be no different. In order to create a useful revision history, teams should first agree on a commit message convention that defines at least the following three things:

- Style
- Content
- Metadata

We will follow **"The seven rules of a great Git commit message"**. You can click con each rule for see detailed info.

1. [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate)
2. [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50)
3. [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize)
4. [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end)
5. [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative)
6. [Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)
7. [Use the body to explain what and why vs. how](https://chris.beams.io/posts/git-commit/#why-not-how)
8. **Add additional info at the bottom of the body**

#### Here's an example

```
Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Use a hyphen for the bullet, preceded
   by a single space, with blank lines in between.

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
Reported-by: whoever-reported-it
Signed-off-by: Your Name <you@example.com> or <nickname>
```

## File Structure

Comming soon

```
├── components
│    └── newComponent
│        ├── model.js
│        ├── router.js
│        ├── service.js
│        └── test.js
├── configs
│    ├── config.js
│    ├── databaseConnection.js
│    └── winstonConfig.js
├── logs
│    └── example.log
├── routes
│    └── router.js
├── scripts
│    └── serverScript.js
├── utils
│    ├── middlewares
│    │    └── databaseConValidator.js
│    │    ├── errorsHandler.js
│    │    ├── notFoundHandler.js
│    │    ├── scopeValidationHandler.js
│    │    ├── testMiddleware.js
│    │    └── validationSchemaHandler.js
│    ├── mocks
│    │    ├── someData.js
│    │    └── someFunctions.js
│    ├── schemas
│    │    └── exampleSchema.js
│    ├── strategies
│    │    └── someStrategie.js
│    ├── crypter.js
│    ├── testServer.js
│    ├── time.js
│    └── tokenGenerator.js
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
├── README.MD
└── server.js
```

## Default Package

### Framework and basic configuration

- [**express**](https://expressjs.com/)
  Express is the leading Node.js framework for quickly creating and publishing applications and APIs. We choose it for its long history and extensive support and documentation.

- [**dotenv**](https://www.npmjs.com/package/dotenv)
  It loads environment variables from a .env file into process.env. Useful for grouping env variables into one single file and for security purposes.

- [**nodemon (dev)**](https://nodemon.io/)
  It allows to load changes made to server automatically. Useful for development purposes.

- [**morgan (dev)**](https://www.npmjs.com/package/morgan)
  This is a HTTP request logger middleware made for Node. Useful for see info about HTTP request easily.

- [**winston**](https://www.npmjs.com/package/winston)
  `winston` is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs.

- [**eslint (dev)**](https://eslint.org/)
  ESLint is a tool for identifying and reporting on patterns found in JavaScript code. Useful for keep our code clean and well structured. Note: a VSCode plugin is needed and also a eslint config file to share between projects.

- [**prettier (dev)**](https://prettier.io/)
  Prettier is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.

### Database and Authentication

- [**sequelize (SQL)**](https://sequelize.org/)
  Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more. An ORM facilitate us to manipulate data from a database using an object-oriented paradigm without the need of use SQL directly.

- [**mongoose (NoSQL)**](https://mongoosejs.com/)
  Mongoose provides a straight-forward, schema-based solution to model our application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box. This is maybe the best tool for handling data coming from MongoDB database.

- [**jwt**](https://jwt.io/)
  JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties. It is useful and needed for authentication and also encryption of our data during HTTP POST request and other web services and methods.

- [**bcrypt / bcryptjs**](https://www.npmjs.com/package/bcrypt)
  A library that helps us hash passwords. bcrypt allows us to choose our balance of speed and security for keep our password safe from attacks.

- [**passport**](http://www.passportjs.org/)
  Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. It will be useful for handle username / password authentication or whatever strategie (Facebook, Google, Twitter) used by the client.
  hapi/joi

### Dates and Time handlers

- [**moment**](https://momentjs.com/)
  Parse, validate, manipulate, and display dates and times in JavaScript. Moment offers a huge set of date functions that ease our job handling dates and times. Special attention with moment(undefined) when debugging, it returns a date.

- [**date-fns**](https://date-fns.org/)
  Modern JavaScript date utility library that provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js

**Note:** we have to be careful when choosing a date library. It may vary depending of project's nature. There are other libraries that could be better in accordance with our needs, e.g., DayJS or JS-Joda.

### Error handlers

**Note:** This boilerplate won't use Try/Catch block in order handle errors. Instead, it will use a **high order function** called **"catchError()"** in replace of it, wrapping a certain function that wants to be error handled using high-top pratices. This **catchError() function** takes a function as argument, and returns a function that resolves a promise, so what **.catch()** can be chained at the end of that promise in order to handle a possible error. **WARNING:** This **catchError() function** must be used ONLY if the wrapped function returns a promise.

- [**@hapi/boom**](https://www.npmjs.com/package/@hapi/boom)
  boom provides a set of utilities for returning HTTP errors. Each utility returns a Boom error response object which includes a variety of useful properties.

### Web services and Security

- [**helmet**](https://helmetjs.github.io/)
  Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!
- [**cors**](https://www.npmjs.com/package/cors)
  CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Testing

- [**jest (dev)**](https://jestjs.io/)
  `jest` is a delightful JavaScript Testing Framework with a focus on simplicity.
- [**supertest (dev)**](https://github.com/visionmedia/supertest)
  The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.
