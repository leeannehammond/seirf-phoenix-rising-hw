// HELLO! I attempted to do a shift array for the battle and am unsure of where
// exactly it should go or what other code to put before it!!!!



// Create the Player's ship object:
let playerShip = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  // Add methods 
  attack: enemyShip => {
    console.log("Player attacking Alien ship");
    // Check for hit  on playerShip accuracy:
    if (Math.random() < playerShip.accuracy) {
      console.log("Attack hit!");
      enemyShip.hull -= playerShip.firepower;
    } else {
      console.log("Attack missed!");
    }
    console.log(enemyShip);
     //if (Math.random() < alien[0].accuracy) {
     //console.log('You have been hit!');
  }
}
//  AlienShip class
class AlienShip {
  constructor() {
    // Make hull random between 3 and 6
    this.hull = Math.floor(Math.random() * 4 + 3);
    // Make random between 2 and 4
    this.firepower = Math.floor(Math.random() * 3 + 2);
    // TODO: Make random between .6 and .8
    this.accuracy = Math.floor(Math.random() * 3 + 6) * 0.1;
  }
  attack() {
    console.log("Alien Ship attacking");
    // Check for hit or miss:
    if (Math.random() < this.accuracy) {
      console.log("Alien ship hit player!");
      playerShip.hull -= this.firepower;
      console.log(`Player Ship hull remaining: ${playerShip.hull}`);
    } else {
      console.log("Alien ship missed");
    }
  }
}
// Start 
console.log("Generating enemy ships");
enemy = new AlienShip();
console.log(enemy);
// Create a game object - checkwin
// Turn by turn logic
// Player ship attacks:
playerShip.attack(enemy);
// Check if enemy ship is destroyed:
if (enemy.hull <= 0) {
  console.log("Enemy ship destroyed!");
  let response = prompt("Ship Destroyed, attack or retreat?");
  if (response === "retreat") {
    alert("You retreated, game over");
  } else if (response === "attack") {
    // TODO: finish this
    // do attack
    console.log("Continuing gameplay");
  }
} else {
  // Enemy ship attacks:
  enemy.attack();
  // shift array--???? 
}
if (fightOneAlien.hull <= 0) {
  // If enemy ship is destroyed:
  alienEnemies.shift(); 

// Retreat option
// End game logic