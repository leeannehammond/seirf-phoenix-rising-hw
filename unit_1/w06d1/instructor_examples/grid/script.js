// CHRIS SOLUTION
$( () => {
    console.log('It\'s working!')
    const $container = $("<div>").addClass("container");
    $container.css("max-width", "900px");
    $container.css("margin", "auto");
    $("body").append($container);
    const generateRow1 = () => {
        const $divRow = $("<div>").addClass("row");
        $container.append($divRow)
        for(let i = 1; i <= 8; i++){
            $div = $("<div>").addClass("square");
            if(i % 2 === 0) {
                $div.addClass("black");
                $divRow.append($div);
            } else {
                $div.addClass("red")
                $divRow.append($div);
            }
        }
    }
    const generateRow2 = () => {
        const $divRow = $("<div>").addClass("row");
        $container.append($divRow)
        for(let i = 1; i <= 8; i++){
            $div = $("<div>").addClass("square");
            if(i % 2 === 0) {
                $div.addClass("red");
                $divRow.append($div);
            } else {
                $div.addClass("black")
                $divRow.append($div);
            }
        }
    }
    const generateCheckerBoard = () => {
        for(let i = 0; i < 4; i++) {
            generateRow1();
            generateRow2();
        }
    }
    generateCheckerBoard();
});


// SCOTTS SOLUTION
// console.log("running");
// const generateRedSquare = () => {
//     let $redSquare = $('<div>').addClass(`redSquare`);
//     $redSquare.css("background-color", "red");
//     $(".container").append($redSquare);
// }
// const generateBlackSquare = () => {
//     let $blackSquare = $('<div>').addClass(`blackSquare`);
//     $blackSquare.css("background-color", "black");
//     $(".container").append($blackSquare);
// }
// const generateSquares = (numberOfSquares) => {
//     for(let i=1;i<=numberOfSquares;i++) {
//         if(i % 2 !== 0) {
//             generateRedSquare();
//         }
//         else {
//             generateBlackSquare();
//         }
//     }
// };
// generateSquares(64);
// // challenge: make a perfect checker board
// // generate a red square
// const generateRedSquare2 = () => {
//     let $redSquare = $('<div>').addClass(`redSquare`);
//     $redSquare.css("background-color", "red");
//     $(".container2").append($redSquare);
// }
// // generate a black square
// const generateBlackSquare2 = () => {
//     let $blackSquare = $('<div>').addClass(`blackSquare`);
//     $blackSquare.css("background-color", "black");
//     $(".container2").append($blackSquare);
// }
// // generate a row by alternating between the two square functions which are passed in
// const generateRow = (firstColor,secondColor) => {
//     for(let i=0;i<8;i++) {
//         if(i % 2 === 0) {
//             firstColor();
//         }
//         else {
//             secondColor();
//         }
//     }
// }
// // generate checker board by alternating between the two row patterns
// const generateCheckerBoard = () => {
//     for(let i=0;i<8;i++) {
//         if(i % 2 === 0) {
//             generateRow(generateRedSquare2,generateBlackSquare2);
//         }
//         else {
//             generateRow(generateBlackSquare2,generateRedSquare2);
//         }
//     }
// };
// generateCheckerBoard();