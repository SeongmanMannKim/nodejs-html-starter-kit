/**
server type
  "dev","prod"
**/
let serverType = "dev";

let config = {
  "portProd" : 3005,
  "portDev" : 8005,
}

const server = {};
server.port = serverType === "dev" ? config.portDev : config.portProd;

module.exports = server;
