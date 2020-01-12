
const Student = require("../studentModel")
StudentSignup = async(req,res)=>{
   let user=req.body;
    try{
        //Saving the data into database of the admin
       let store= new Student({rollnumber:user.rollnumber});
       let datasave = await store.save();
       if(datasave)
       return res.status(200).json({
           message: "Data saved",
       })
    }
   catch(error){
       if(error){
           return res.status(404).json({
               message: "RollNumber is required"
           })
       }
   }
}


module.exports = StudentSignup;