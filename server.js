const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const todosRoutes = require('./routes/todos');
const mysqlconnection = require('./connection');
var cors = require('cors')
const app = express();
app.use(express.static('uploads'))
// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
  }));
app.use(cors())
app.use('/todos', todosRoutes);

app.listen(4000);