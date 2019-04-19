const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser"); // now included in express
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/createdb", (req, res) => {
  connection.query("CREATE DATABASE IF NOT EXISTS notesDB", (err, results) => {
    if (err) throw err;
    console.log("database created", results);
    res.send("database created");
  });
});

app.get("/createtable", (req, res) => {
  connection.query(
    "CREATE TABLE IF NOT EXISTS Notes(ID int NOT NULL AUTO_INCREMENT, Title varchar(255), Body varchar(255), Time datetime, PRIMARY KEY(id))",
    (err, results) => {
      if (err) throw err;
      console.log("table created", results);
      res.send("table created");
    }
  );
});

app.get("/allnotes", (req, res) => {
  connection.query("SELECT * FROM Notes", (err, results) => {
    if (err) throw err;
    console.log("all notes", results);
    // res.send(results);
    res.json(results);
  });
});

app.get("/api", (req, res) => {
  // res.send("Hello World!");
  res.send({ express: "Hello From Express" });
});

app.post("/addnote", (req, res) => {
  let { title, body, time } = req.body;
  let query = `INSERT INTO notes
  (
      Title, Body, Time
  )
  VALUES
  (
      ?, ?, ?
  )`;
  connection.query(query, [title, body, time], (err, results) => {
    if (err) throw err;
    // return res.send("added note", results);
  });
  console.log(`title: ${title}, body: ${body}, time:${time}`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
