const admin = require("../adminModel");
const encrpt = require("crypto");

const fetchAdmin = async (req, res) => {
  let adminuser = req.body;
  try {
    const hashpass = encrpt.scryptSync('aes-192-cbc', adminuser.password,24);
    //Signing in checking here of admin
    let data = await admin.find({
      username: adminuser.username,
      password: hashpass
    });
    if (data.length <= 0) {
      res.status(400).json({
        message: "Wrong details"
      });
    } else if (data) {
      res.status(200).json({
        data: data,
        message: "authorized"
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchAdmin;
