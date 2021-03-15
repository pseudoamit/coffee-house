const express = require("express");
const mongoose = require("mongoose");
// const keys = require("./src/app/config/keys");
const { mongoURI } = require("./src/app/config");

const app = express();

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

app.get("/", (req, res) => {
  res.send("Server up and running");
});

module.exports = app;
