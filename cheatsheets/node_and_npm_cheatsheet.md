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
- `npm i express ejs method-override`
- `mkdir views`
- Create your EJS files (index.ejs, show.ejs, etc) in the `views` folder of your project.

Example starter server.js file:

```js
// Load express:
const express = require('express');
const app = express();
const methodOverride = require("method-override");

// Set the web server port:
const port = 3000;

// Load methodOverride middleware so you can make delete, put, and 
// patch requests from web pages:
app.use(express.urlencoded());
app.use(methodOverride("_method"));

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// Define one or more routes:

// INDEX:
app.get("/plants", (req, res) => {
  res.render("index.ejs", { plants: plants });
});

// SHOW: 
app.get("/plants/:id", (req, res) => {
  res.render("show.ejs", {
    plant: plants[req.params.id]
  });
});

// EDIT:
app.get("/plants/:id/edit", function(req, res) {
  res.render(
    "edit.ejs", //render views/edit.ejs
    {
      //pass in an object that contains
      plant: plants[req.params.id], //the plant object
      index: req.params.id //... and its index in the array
    }
  );
});

// DELETE:
app.delete("/plants/:id", (req, res) => {
  // code that deletes a plant:
  plants.splice(req.params.id, 1); //remove the item from the array
  res.redirect("/plants"); //redirect to index page
});

// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port,() => {
    console.log('listening on port' , port);
});
```


## To run your node/express app:

At the terminal run: `nodemon`

To stop the web server, `ctrl`+`c`
