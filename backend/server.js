const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const bodyParser  = require('body-parser');
const cors = require("cors");

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  // res.send("Hello World!");
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
