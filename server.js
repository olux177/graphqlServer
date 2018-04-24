import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import models from "./db";
import {Person} from "./acl/pre"

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

var app = express()
const PORT = 8000;
const SECRET = "secret"

app.use(cors('*'));

app.get('/', function (req, res) {
  const person = new Person('Jane Doe')
person.setName('Sarah Doe')
person.greeting = 'Hello'
person.getName() // Name: John Doe
person.getGreetingCallback()('Jeff')
  res.send(person.getName())
})
app.use('/graphql', bodyParser.json(), graphqlExpress(req =>
  ({
    schema,
    context:{
      models,
      SECRET,
    }
  })
));

// Start the server
models.sequelize.sync({logging:false})
  .then( ()=>
    app.listen(PORT, () => {
      console.log(`Running graphql server`);
    })
  )
