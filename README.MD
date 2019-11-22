# Backend Boilerplate Definition

The main objective of the definition of a boilerplate for the development of the backend, which is used in the different projects, is to establish a general structure that covers the general requirements of the same and serves as a basis for initiating the project, also seeks to have as an additional benefit, establish a general working methodology, facilitating the easy integration of new members to the projects, since the structure to be implemented (clean architecture), which is intuitive and clean, can be understood easily and also its structure lends itself to the easy scaling of any of the projects.

Some conventions are established, which seek to work general aspects in a homogeneous way between projects.


## Conventions

* All variable names, file names, etc. must be assigned English names.
* Establish the name of the directories always used as plural (models, controllers, utils, middlewares...).
* File names of the different directories always declared in singular (e.g. model: user, controller: role...).
* Use of camelcase to assign names to declared variables.
* Name of variables should always be the most descriptive, either giving an idea of its function or what data will be stored in it.
* Perform the declaration of variables using the reserved words let or const, taking into account the purpose of that variable.
* Constants that have a global character must be defined in capital letters (e.g. environment variables).
* Avoid reassigning variables declared as constants.
* Always opt, if supported, for the implementation of async - await.
* Use objects to manage functions and variables between components. Perform the export of such objects and in the process of requiring functions or variables of that component, perform the destructuring of it and avoid importing all the data, which is not required at the time.
Implement the project with the use of eslint and prettier tools.
* All the response must be have a http status

## Commit Rules

Comming soon

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

Comming soon
