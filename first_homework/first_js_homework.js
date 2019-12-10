//  Section one
// 1. DRY: Don't Repeat Yourself. It helps write shorter, more efficient code. We have learned for/while  loops to write DRY code.
// 2.  Var and let are variables that can be redeclared and updated where const cannot. Let is preferred over var now for variable declarations. Const maintains a constant value. 

// Section two
//1. 
let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';
let f = false;
let g = 0;


console.log(a < b)
console.log(c > d)

// stumped by this one!
console.log(a < b < c)
console.log(a = a < d);
console.log(e = 'Kevin')
console.log(48 <= '48')
console.log(f != e)
console.log(g)
console.log(g = b + c)
console.log(g)

// I used let since the values were going to be changing which would not work if I had used const.
// I took away some of the 'let' variables and did not have an error pop up.
// When I wrote '10=g', it came back with "SyntaxError: Invalid left-hand side in assignment"

// Section three
// The code is an infinite loop, if while running it, it meets those requirements at any time it will continue to loop and the code does not have a functional exit.
// Loop 2 is not an infinite loop because there is a functional exit and has both options for it to run.

let letters = "A";
let i = 0;
// start a  while loop that runs as long as i is less than 20
while (i <20) {
    // appends "A"
    letters += "A";
    i++;
    // allows i to increment
}
console.log(letters);
// continues running "A" until it has reached 20 times
// code ran as I expected

// Section four

// The first part of the control panel is: let i = 0; (initial condition).
// The second part of the control panel is: i < 100 (while condition).
// The third part of the control panel is : i++ (repeating expression).

// for loop 2
for (let i = 0; i <= 999; i++) {
    console.log(i);
}

// for loop in reverse
for (let i = 999; i >= 0; i--) {
    console.log(i);
}

// more counting
for (let i = 1; i <= 10; i++){
    console.log('The value of i is:' + " " + (i) + " " + 'of' + " " + '10');
}

// Iteration

let StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i of StarWars) {
    console.log(i);
}
// unsure of how to go about getting the value of i!!!!

