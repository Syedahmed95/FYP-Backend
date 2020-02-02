var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var body = require("body-parser");
var app = express();
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(cors());
var router = express.Router();
app.use("/", router);
require("./routes/routes")(app, router);
mongoose.connect(
  "mongodb+srv://Auction:model@auction-ujxcw.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
let db = mongoose.connection;
db.once("open", () => console.log("connected"));

module.exports = app;
