$(() => {
  const $container = $('<div>');
  $container.addClass('container');
  $('body').append($container);
  const rowGenerator = () => {
    for(let i = 1; i <= 8; i++) {
      const $square = $('<div>');
      if(i % 2 === 0) {
        $square.addClass('red');
      } else {
        $square.addClass('black')
      }
      $container.append($square);
    }
  }
  const rowGenerator2 = () => {
    for(let j = 1; j <= 8; j++) {
      const $square = $('<div>');
      if(j % 2 === 0) {
        $square.addClass('black');
      } else {
        $square.addClass('red')
      }
      $container.append($square);
    }
  }
  const createGrid = () => {
    for(let k = 1; k <= 4; k++) {
      rowGenerator();
      rowGenerator2();
    }
  }
  createGrid();
});
