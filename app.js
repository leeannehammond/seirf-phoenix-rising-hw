console.log('Landscaper Game app.js is attached to index.html');

// INITIALIZE
let tool;
let money;
let cost;
let choice;

let start = () => {
  tool = 'your teeth';
  money = 1;
  askForAction();
};


// USER INFORMATION
let showStatus = () => {
  alert('You have $' + money + '.  Your tool is ' + tool + '.')
};

// USER ACTIONS AND INPUT
let askForAction = () => {
  showStatus();
  promptAlerts();
};

let promptAlerts = () => {
  choice = prompt('What do you want to do?', 'landscape/buy tools');
    if (choice.toLowerCase() === 'landscape') {
      landscape();
    } else if (choice.toLowerCase() === 'buy tools') {
      checkTool();
    } else if (choice.toLowerCase() === 'exit') {
      //exits game - option not shown to user
    } else if (choice.toLowerCase() === 'restart') {
      //resets game - option not shown to user
      start();
    } else {
      alert('Please try that action again!')
      askForAction();
    }
};

//LANDSCAPE ACTIONS
let landscape = () => {
  if (tool === 'your teeth') {
    alert('Using ' + tool + ' will earn you $1 each day!')
    money += 1;
    askForAction();
  } else if (tool === 'a pair of rusty scissors') {
    money += 5;
    askForAction();
  } else if (tool === 'an old-timey push lawnmower') {
    money += 50;
    askForAction();
  } else if (tool === 'a fancy battery-powered lawnmower') {
    money += 100;
    askForAction();
  } else if (tool === 'a team of starving students') {
    money += 250;
    if (money <1000) {
      askForAction();
    } else {
    // Game Ends
      alert('Congratulations!  You have made $' + money + ' with the help of your tools!  You have won the game!')
    }
  }
};


// CHECK AND BUY TOOLS
let checkTool = function () {
  if (money < 5) {
    alert('Sorry, you don\'t have enough money to buy a new tool yet.  Keep landscaping!');
    askForAction();
  } else {
    buyTool();
  }
};

// functions
let buyScissors = () => {
  cost = 5;
  money -= 5;
  makeAmount = 5;
  tool = 'a pair of rusty scissors';
  alertText();
};

let buyPushMower= () => {
  cost = 25;
  money -= 25;
  makeAmount = 50;
  tool = 'an old-timey push lawnmower';
  alertText();
};

let buyFancyLawnMower = () => {
  cost = 250;
  money -= 250;
  makeAmount = 100;
  tool = 'a fancy battery-powered lawnmower';
  alertText();
};

let buyTeamOfStudents = () => {
  cost = 500;
  money -= 500;
  makeAmount = 250;
  tool = 'a team of starving students';
  alertText();
};

let alertText = () => {
  alert('You can buy ' + tool + ' for $' + cost + '.');
  alert('You have purchased ' + tool + '!  Using this tool will earn you $' + makeAmount + ' each day!');
  askForAction();
};



document.addEventListener('DOMContentLoaded', () => {
  start();
});