console.log($);

const addH2 = () => {
  // do we need the $ before h2?
  let $h2 = $("<h2>").text("Just getting started");
  $("body").append($h2);
};

const changeH2 = () => {
  $("h2").text("Getting warmed up");
};

$(() => {
  addH2();
  setTimeout(() => {
    changeH2();
  }, 1000);
});

// $(() => {}) this waits for the rest of the code to load before
// it runs whats inside
$(() => {
  // 2 ways to create function..
  // Function Declaration and Function Expressions
  // generateSquares is written as a Function Express
  //functions written this way must be defined before called
  const generateSquares = numberOfSquares => {
    for (let i = 1; i < numberOfSquares; i += 1) {
      const $square = $("<div>").addClass("square");
      $square.css("background-color", randColorRGB());
      $square.text(i);
      $square.attr("id", `square${i}`);
      $("body").append($square);
    }
  };

  generateSquares(100);

  // randColorRGB is written as a Function Delcaration
  // functions written this way are Hoisted when the file is
  // initially read...and thereby accessible anytime to be called
  function randColorRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // backticks are used for string template literals..
    // don't confuse them with single quotes..
    return `rgb(${red}, ${green}, ${blue})`;
    //   return "rgb(" + red + "," + green + "," + blue + ")";
  }
});
