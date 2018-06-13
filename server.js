import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress} from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import models from "./db";
import {Panel} from "./cms/panel/index"
import {Page} from "./cms/page/index"

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
  const wel = new Panel();
  wel.name ='welcome';
  wel.desc = 'this is the list of services';
  wel.contents = [
    {
      type:'header',
      value:'welocme content'
    },
    {
      type:'paragraph',
      value:'this is the content for welcome'
    }
  ];
  wel.create();
  
  res.send('ok');
})
app.get('/read', function (req, res) {
  const wel = new Panel();
  wel.name = 'about';
  const result = wel.read()
  res.send(result)
})
app.use('/graphql', bodyParser.json(), graphqlExpress(req =>
  ({
    schema,
    context:{
      models,
      SECRET,
      Panel,
      Page
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
