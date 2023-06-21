// Importing express
const express = require('express');
const fs = require('fs');

// Creating instance of express
const app = express();

// Handling GET / Request
app.get('/', function (req, res) {
    // Read the JSON file
    fs.readFile('src\\\data\\tododb.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
  
      // Parse the JSON data
      let jsonData;
      try {
        jsonData = JSON.parse(data);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error parsing JSON data');
        return;
      }
  
      // Send the JSON data as the response
      res.json(jsonData);
    });
  });

// Listening to server at port 5000
app.listen(5000, function () {
	console.log("server started");
})
