const app = require("../index");
const http = require("http");
const server = http.createServer(app)
server.listen(process.env.PORT||3000,()=>{
    console.log("Server Started");
});