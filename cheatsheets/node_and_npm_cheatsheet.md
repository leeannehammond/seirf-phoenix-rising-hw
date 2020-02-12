# Node and NPM CheatSheet
By Ira Herman

---

## NPM Terminal Commands:

- `npm install package-name --save`
  - install a package and keep a record of it in package.json
  - NPM Version 5.0.0 and up automatically do a `--save`, no need to type it
  - Shortcut `npm i package-name`
- `npm install package-name -g`
  - install a package as a global terminal command
- `npm install`
  - read package.json file and install all listed dependencies
- `npm init`
  - initialize a directory with package.json file for saving dependencies


## Setting up a new Node/Express app:

- `mkdir name_of_your_express_app`
- `cd name_of_your_express_app`
- `touch server.js`
- `npm init`
- `npm i express`

Example starter server.js file:

```js
// Load express:
const express = require('express');
const app = express();

// Set the web server port:
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// Define one or more routes:
app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});

// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port,() => {
    console.log('listening on port' , port);
});
```

## To run your node/express app:

At the terminal run: `nodemon`

To stop the web server, `ctrl`+`c`