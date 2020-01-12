const findCer = require("../certificatesModel");

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
      res.status(200).json({
        data: data,
        message: "authorized"
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchCertificates;
