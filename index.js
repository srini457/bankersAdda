const express = require("express");
// initiate express application
const app = express();

const router = express.Router();
const mongoose = require("mongoose"); //node tool for mongodb
const config = require("./backend/config/database"); //mongoose config
const path = require('path');

// Database connection
mongoose.Promise = global.Promise;
// mongo connection
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("could not connect to database", err);
  } else {
    console.log("connect to the database:" + config.db);
    // console.log(config.secret);
  }
});

app.use(express.static(__dirname + '/dist/bankersAdda'));

//  connect server to angular 6
app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname + '/dist/bankersAdda/index.html'));
});
app.listen(3000, () => {
  console.log("app is working in port 3000");
});
