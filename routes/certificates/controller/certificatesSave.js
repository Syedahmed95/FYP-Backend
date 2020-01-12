const Certificates = require("../certificatesModel");

CertificatesPost = async (req, res) => {
  let data = req.body;
  try {
    //Saving the data into database of the admin
    let storage = {
      FullName: data.FullName,
      RollNumber: data.RollNumber,
      MajorDepartment: data.MajorDepartment,
      Program: data.Program,
      CGPA: data.CGPA,
      YOG: data.YOG
    };
    let store = new Certificates(storage);
    let datasave = await store.save();
    if (datasave) {
      res.status(200).json({
        message: "Data saved"
      });
    }
  } catch (error) {
    if (error) {
      return res.status(404).json({
        message: "Fields required"
      });
    }
  }
};

module.exports = CertificatesPost;
