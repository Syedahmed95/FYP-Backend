
const admin = require("../adminModel")
const encrpt = require("crypto");
 AdminSignup = async(req,res)=>{
    let user=req.body;
     try{
        const hashpass = encrpt.scryptSync('aes-192-cbc', user.password,24);
         //Saving the data into database of the admin
        let store= new admin({username:user.username, password:hashpass});
        let datasave = await store.save();
        if(datasave)
        res.status(200).json({
            message: "Data saved",
        })

     }
    catch(error){
        if(error){
            return res.status(404).json({
                message: "Fields required"
            })
        }
    }
}


module.exports = AdminSignup