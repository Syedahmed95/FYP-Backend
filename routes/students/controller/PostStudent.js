
const Student = require("../studentModel")
StudentSignup = async(req,res)=>{
   let user=req.body;
    try{
        //Saving the data into database of the admin
       let store= new Student({rollnumber:user.rollnumber});
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


module.exports = StudentSignup;