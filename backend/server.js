const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser"); // now included in express
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let connection;
// create db connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password4",
    database: "notesDB"
  });
}

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
    res.json(results);
  });
});

app.get("/note/:id", (req, res) => {
  let sql = `SELECT * FROM notes WHERE ID = ${req.params.id}`;
  connection.query(sql, (error, results, fields) => {
    if (error) return console.error(error.message);
    res.status(200).send(results);
    console.log("results:", results);
  });
});

app.post("/addnote", (req, res) => {
  let { title, body, time } = req.body;
  let sql = `INSERT INTO notes
  (
      Title, Body, Time
  )
  VALUES
  (
      ?, ?, ?
  )`;
  connection.query(sql, [title, body, time], (err, results) => {
    if (err) throw err;
    res.status(200).send(results);
  });
  console.log(`title: ${title}, body: ${body}, time:${time}`);
});

app.put("/edit", (req, res) => {
  let { title, body, time, id } = req.body;
  let sql = "UPDATE notes SET Title = ?, Body = ?, time = ? WHERE ID = ?";

  connection.query(sql, [title, body, time, id], (error, results) => {
    if (error) throw error;
    res.status(200).send(results);
    console.log("Rows affected:", results.affectedRows);
  });
});

app.delete("/delete/:id", (req, res) => {
  let sql = `DELETE FROM notes WHERE ID = ${req.params.id}`;
  console.log("id: ", req.params.id);

  // delete a row with id = req.params.id
  connection.query(sql, (error, results, fields) => {
    if (error) return console.error(error.message);
    res.status(200).send(results);
    console.log("Deleted Row(s):", results.affectedRows);
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
