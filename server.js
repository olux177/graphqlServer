import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import models from "./db";

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
  res.send('Hello World')
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

app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/playground to run queries!`);
})
