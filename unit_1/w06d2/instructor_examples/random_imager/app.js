const urls = [
  'https://opensource.org/files/osi_keyhole_100X100_90ppi.png',
  'https://www.astrazeneca.com/content/dam/az/Image%20Bank/New-homepage/Neuro_circular_icon.png/_jcr_content/renditions/xcq5dam.web.100.square.Neuro_circular_icon.png.pagespeed.ic.nQqEGld_nl.png',
  'http://www.materrassefm.com/images/100x100.gif',
  'http://www.crimsy.com/images/100x100.PNG',
  'http://geniussys.com/img/placeholder/blogpost-placeholder-100x100.png',
  'http://www.imagemagick.org/Usage/misc/interpolate_tri-mesh.jpg'
]

$(() => {
  $buttonDiv = $('<div>').text('Add Random Image').addClass('square').css('background-color', 'red');
  $('body').append($buttonDiv);
  $buttonDiv.on('click', () => {
    let rand = Math.floor(Math.random() * 6);
    $newDiv = $('<div>').addClass('square');
    $newDiv.css('background-image', `url(${urls[rand]})`);
    $('body').append($newDiv);
  })
})
