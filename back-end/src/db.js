const express = require('express')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.PORT_DB
})


db.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
})

module.exports = db