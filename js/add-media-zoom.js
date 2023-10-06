const imgs = document.querySelectorAll('.scroll-container img');
const overlay = document.querySelector('#media-zoom');

imgs.forEach(img => {
    console.log(img);
  img.addEventListener('click', function() {
    overlay.style.backgroundImage = 'url(' + img.src + ')';
    overlay.style.display = 'block';
    console.log(img);
  });
});