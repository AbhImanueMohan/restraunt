/* eslint-disable no-unused-vars */
//import json server
const jsonserver = require('json-server');

//create server using json server
const server = jsonserver.create()

// set up path fo db.json file
const router = jsonserver.router('db.json')

// return a middleware used by json server
const middleware = jsonserver.defaults()

// setup port number
const port = process.env.PORT || 4120 //default port number for backend

//use in server
server.use(middleware)
server.use(router)


//to run the port 
server.listen(port,()=>{
    console.log("json server listening on port 4120");
})