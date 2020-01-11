
const admin = require("../adminModel")
 AdminSignup = async(req,res)=>{
    let user=req.body;
     try{
         //Saving the data into database of the admin
        let store= new admin({username:user.username, password:user.password});
        let datasave = store.save();
        if(datasave)
        res.status(200).json({
            message: "Data saved",
        })

     }
    catch(error){
        console.log(error)
    }
}


module.exports = AdminSignup