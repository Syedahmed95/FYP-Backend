const mongoose = require("mongoose")
const Schema = mongoose.Schema,
  MODEL = new Schema({
    rollnumber: {type: String, required: true}
  });

module.exports = mongoose.model("FYP-Student", MODEL);