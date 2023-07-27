const express = require('express');
const app = express()
var bodyParser = require('body-parser')
const port = 8080


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const publicRoutes = require('./routes/public')

app.use('/', publicRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

