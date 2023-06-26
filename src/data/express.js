// Importing express and cors
const express = require('express');
const cors = require('cors');


const app = express();


// Enable CORS for all routes
app.use(cors());


let walkWays = require('./expressRoutes.js');

// Listening to server at port 5000
app.listen(5000, function () {
	console.log("server started...\nClick the url to gain access: http://localhost:5000/");
})
