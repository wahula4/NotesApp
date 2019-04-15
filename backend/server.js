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
  password: "password4",
  database: "notesDB"
});

// connect to database
connection.connect(err => {
  if (err) throw err;
  console.log("MYSQL Connected!");
});

// app.get("/createdb", (req, res) => {
connection.query("CREATE DATABASE IF NOT EXISTS notesDB", (err, results) => {
  if (err) throw err;
  console.log("database created", results);
  // res.send("database created");
});
// });

// app.get("/createtable", (req, res) => {
connection.query(
  "CREATE TABLE IF NOT EXISTS Notes(ID int NOT NULL AUTO_INCREMENT, Body varchar(255), Time datetime, PRIMARY KEY(id))",
  (err, results) => {
    if (err) throw err;
    console.log("table created", results);
    // res.send("table created");
  }
);
// });

// connection.query(
//   "INSERT INTO Notes (Body, Time) VALUES ('Note 1', NOW())",
//   (err, results) => {
//     if (err) throw err;
//     console.log("table data added", results);
//   }
// );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
