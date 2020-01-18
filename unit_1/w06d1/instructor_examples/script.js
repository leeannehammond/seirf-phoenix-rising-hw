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

const generateSquares = numberOfSquares => {
  for (let i = 1; i < numberOfSquares; i += 1) {
    const $square = $("<div>").addClass("square");
    $square.css("background-color", randColorRGB());
    $square.text(i);
    $square.attr('id', `square${i}`)
    $("body").append($square);
  }
};

const randColorRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
  //   return "rgb(" + red + "," + green + "," + blue + ")";
};

$(() => {
  generateSquares(100);
});
