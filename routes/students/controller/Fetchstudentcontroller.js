const studentModel = require("../studentModel");

const fetchstudent = async (req, res) => {
  let studentuser = req.body;
  try {
    //Signing in checking here of admin
    let data = await studentModel.find({ rollnumber: studentuser.rollnumber });
    if (data.length <= 0) {
      res.status(400).json({
        message: "No such user found"
      });
    } else if (data) {
      res.status(200).json({
        data: data,
        message: "authorized"
      });
    }
    // res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchstudent;
