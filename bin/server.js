const app = require("../index");
const http = require("http");
const server = http.createServer(app);
server.listen(process.env.PORT || 4000, () => {
  console.log("Server Started", "PortNumber:",4000);
});
