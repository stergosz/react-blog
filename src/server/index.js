const express = require("express");
const os = require("os");

const app = express();

// app.use(express.static("dist"));

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_blog"
  });
  res.locals.connection.connect();
  next();
});

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(3050, () => console.log("Listening on port 3050!"));
