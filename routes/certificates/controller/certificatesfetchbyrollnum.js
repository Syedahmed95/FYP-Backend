const findCer = require("../certificatesModel");
const mongoose = require("mongoose")
const fetch = require("node-fetch")

const fetchCertificates = async (req, res) => {
  let rolluser = req.query;
  try {
    //Signing in checking here of admin
    let data = await findCer.find({ RollNumber: rolluser.rollnumber });
    if (data.length <= 0) {
      res.status(400).json({
        message: "Wrong details"
      });
    }
    if (data) {
      for(let i=0; i<data.length; i++){
        let alldata = data[i]
        let ipfsdata = await fetch(`https://ipfs.io/ipfs/${alldata.Hash}`);
        let fetchdata = await ipfsdata.json()
        res.status(200).json({
        data: fetchdata,
        message: "authorized"
      });
      }
      
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchCertificates;
