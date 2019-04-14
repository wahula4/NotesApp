const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser"); // now included in express
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  // res.send("Hello World!");
  res.send({ express: "Hello From Express" });
});

// create db connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password4"
  // password: process.env.MYSQL_PASSWORD
  // database : 'notesdb'
});

// connect to database
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE IF NOT EXISTS notesDB";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log("create database result ", results);
    res.send("database created");
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
