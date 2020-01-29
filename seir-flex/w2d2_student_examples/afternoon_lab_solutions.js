// Easy Does It

let quotes = ["Bonjour", "Hello", "Hola"];

// Random

let randomThings = [1, 10, "Hello", true];

randomThings[2] = "World";

console.log(randomThings);

// We've Got Class

let ourClass = ["Outrun", "Zoom", "Github", "Slack"];

ourClass[2] = "Octocat";

ourClass.push("Cloud City");
console.log(ourClass);

// Mix It Up

let myArray = [5, 10, 500, 20];
// push element to end of array
myArray.push("Egon");
// check if push worked
console.log(myArray);
// find out length of array
console.log(myArray.length);
// set new length of array and remove last string
myArray.length = 4;
// check length
console.log(myArray);
// unshift method to add element to beginning
console.log(myArray.unshift("Bob Marley"));
// check array
console.log(myArray);
// remove from the beginning of array using shift method
myArray.shift();
console.log(myArray);
// reverse method
myArray.reverse();
console.log(myArray);

// Biggie Smalls

// if number is greater than or equal to 100
if (myArray >= 100) {
    // respond with quote
    console.log("little number");
} else {
    console.log("big number")
}

// Monkey in the Middle
let num = "middle"
if (num < 5) {
    console.log("little number")
} else if (num > 10) {
    console.log("big number")
}  else if (num) {
    console.log("monkey")
}

////// What's in your closet?

let kristynsCloset = ["left shoe", "cowboy boots", "right sock", "GA hoodie", "green pants", "yellow knit hat", "marshmallow peeps"];