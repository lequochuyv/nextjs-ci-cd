const express = require('express')
const app = express()
const PORT = process.env.PORT_BACKEND || 4000;
const db = require('./db')
const cors = require("cors");

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World10!')
})

app.get('/users/list', (req, res) => {
  console.log('Fetching users from the database');
  var sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})