$(() => {
  const pyramid = (num) => {
    for(let i = 1; i <= num; i++) {
      const $div = $('<div>');
      $('body').append($div);
      for(let j = 1; j <= i; j++) {
        console.log(j);
        $triangle = $('<div>').attr('class', 'triangle');
        $div.append($triangle);
      }
    }
  }
  pyramid(6);
})
