const express = require('express')
require('dotenv').config();
const colors = require('colors');
const cors = require('cors')
const graphqlHttp = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port  = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(cors());

app.use('/graphql',graphqlHttp({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port,console.log(`Listening...at ${port}`))
