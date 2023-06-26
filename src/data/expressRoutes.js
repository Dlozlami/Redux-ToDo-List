var express = require('express');
var router = express.Router();
const fs = require('fs');

let jsonData;
// Read JSON file
fs.readFile('expressDB.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    jsonData = JSON.parse(data);
    //console.log(jsonData);
  });


// Handling GET /accounts Request
router.get('/accounts', function (req, res) {
    res.json(jsonData);
});
  
// Handling GET /accounts/id Request
router.get('/accounts/:id', function (req, res) {
    const accountId = req.params.id;
    
    // Find the account with the matching ID
    const account = jsonData.accounts.find((acc) => acc.id === accountId);
  
    if (!account) {
      // If the account is not found, send a 404 error response
      res.status(404).json({ error: 'Account not found' });
    } else {
      // If the account is found, send it as the JSON response
      res.json(account);
    }
});

//export this router to use in our index.js
module.exports = router;