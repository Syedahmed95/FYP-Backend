const admin = require("../adminModel");

const fetchAdmin = async (req, res) => {
  let adminuser = req.body;
  try {
    //Signing in checking here of admin
    let data = await admin.find({
      username: adminuser.username,
      password: adminuser.password
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
