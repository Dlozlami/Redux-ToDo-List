// Importing express
const express = require('express');
const fs = require('fs');

const app = express();
let jsonData;

// Read JSON file
fs.readFile('expressDB.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  jsonData = JSON.parse(data);
  console.log(jsonData);
});



// Handling GET /accounts Request
app.get('/accounts', function (req, res) {
  res.json(jsonData);
});

// Listening to server at port 5000
app.listen(5000, function () {
	console.log("server started...\nClick the url to gain access: http://localhost:5000/");
})
