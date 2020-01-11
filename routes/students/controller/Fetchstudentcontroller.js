const studentModel= require("../studentModel")

const fetchstudent = async(req,res)=>{
    let studentuser = req.body;
    try{
        //Signing in checking here of admin
        let data = await studentModel.find({rollnumber: studentuser.rollnumber});
        if(data.length<=0){
           res.status(404).json({
               message: "Wrong details"
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

module.exports = fetchstudent