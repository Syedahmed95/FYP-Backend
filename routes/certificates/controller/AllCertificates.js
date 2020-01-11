const findCer = require("../certificatesModel")

const fetchCertificates = async(req,res)=>{
    
    try{
        //Signing in checking here of admin
        let data = await findCer.find();
        if(data.length<=0){
           res.status(404).json({
               message: "Cannot find"
           })
        }
        if(data){
            res.status(200).json({
                data: data,
                message: "authorized"
            })
        }
    }
    catch(error){
        console.log(error)
    }
}

module.exports = fetchCertificates