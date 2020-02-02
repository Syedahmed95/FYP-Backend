//import mongoose from "mongoose";
const mongoose = require("mongoose")
const Schema = mongoose.Schema,
  MODEL = new Schema({
    //FullName: {type: String, required: true},
    RollNumber: {type: String, required: true},
    Hash: {type: String, required: true}
    // MajorDepartment: {type: String, required: true},
    // Program: {type: String, required: true},
    // CGPA: {type: String, required: true},
    // YOG: {type: String, required: true}
  });

module.exports = mongoose.model("FYP-Certificates", MODEL);
