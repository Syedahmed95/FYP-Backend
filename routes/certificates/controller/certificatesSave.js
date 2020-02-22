const Certificates = require("../certificatesModel");
// const IPFS = require('ipfs');
const ipfsAPI = require('ipfs-api');


CertificatesPost = async (req, res) => {
  let data = req.body;
   let storage = {
    FullName: data.FullName,
    RollNumber: data.RollNumber,
    MajorDepartment: data.MajorDepartment,
    Program: data.Program,
    CGPA: data.CGPA,
    YOG: data.YOG
  };
  try {
    var node = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})
    let objectString = JSON.stringify(storage);
    const filesAdded = await node.add({
      path: 'hello.txt',
      content: Buffer.from(objectString)
    });
    let objectdata = {RollNumber: data.RollNumber, Hash: filesAdded[0].hash}
    let store = new Certificates(objectdata);
    let datasave = await store.save();
    if (datasave) {
      res.status(200).json({
        message: "Data saved"
      });
    }
  } 
    catch (error){
    if (error) {
      return res.status(404).json({
        message: "Fields required",
        error: error
      });
    }
  }
}

module.exports = CertificatesPost;
