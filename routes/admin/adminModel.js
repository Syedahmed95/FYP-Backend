//import mongoose from "mongoose";
const mongoose = require("mongoose")
const Schema = mongoose.Schema,
  MODEL = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
  });

module.exports = mongoose.model("FYP-Admin", MODEL);
