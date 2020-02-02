const findCer = require("../certificatesModel");
const fetch = require("node-fetch");

const fetchCertificates = async(req,res)=>{
    
    try{
        //Signing in checking here of admin
        let data = await findCer.find();
        if(data.length<=0){
           res.status(404).json({
               message: "Cannot find"
           })
        }
        let temp = [];
        if(data){
            let mapdata = data.map((data=> { return "https://ipfs.io/ipfs/"+data.Hash}));
           
            for(let i=0; i<mapdata.length; i++){
            let testdata = await fetch(mapdata[i]);
            let jsontest = await testdata.json();
            temp.push(jsontest);
           }
           res.status(200).json({data:temp, message: "Authorized"})
    }
        }
    catch(error){
        console.log(error)
    }
}

module.exports = fetchCertificates