// Importing express and cors
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))

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
app.get('/accounts', function (req, res) {
    res.json(jsonData);
});


// Handling GET /accounts/id Request
app.get('/accounts/:id', function (req, res) {
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


app.post('/accounts', function (req, res) {
  const newAccount = req.body;

  // Assign the existing ID from req.body as the account ID
  const accountId = newAccount.id;

  // Add the new account to the jsonData
  jsonData.accounts.push(newAccount);

  // Write the updated JSON data back to the file
  fs.writeFile('expressDB.json', JSON.stringify(jsonData), 'utf8', (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add account' });
    } else {
      res.json({ message: 'Account added successfully', id: accountId });
    }
  });
});


app.patch('/accounts/:id', function (req, res) {
  const accountId = req.params.id;
  const newData = req.body;

  // Find the index of the account with the matching ID
  const accountIndex = jsonData.accounts.findIndex((acc) => acc.id === accountId);

  if (accountIndex === -1) {
    // If the account is not found, send a 404 error response
    return res.status(404).json({ error: 'Account not found' });
  }

  // Retrieve the original account object
  const originalAccount = jsonData.accounts[accountIndex];

  // Merge the original account object with the new data
  const updatedAccount = { ...originalAccount, ...newData };

  // Update the account in the JSON data
  jsonData.accounts[accountIndex] = updatedAccount;

  // Write the updated JSON data back to the file
  fs.writeFile('expressDB.json', JSON.stringify(jsonData), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update account' });
    }

    return res.json({ message: 'Account updated successfully' });
  });
});



app.delete('/accounts/:id', function (req, res) {
  const accountId = req.params.id;

  // Find the index of the account with the matching ID
  const accountIndex = jsonData.accounts.findIndex((acc) => acc.id === accountId);

  if (accountIndex === -1) {
    // If the account is not found, send a 404 error response
    res.status(404).json({ error: 'Account not found' });
  } else {
    // Remove the account from the jsonData
    jsonData.accounts.splice(accountIndex, 1);

    // Write the updated JSON data back to the file
    fs.writeFile('expressDB.json', JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete account' });
      } else {
        res.json({ message: 'Account deleted successfully' });
      }
    });
  }
});



// Listening to server at port 5000
app.listen(5000, function () {
	console.log("server started...\nClick the url to gain access: http://localhost:5000/");
})
