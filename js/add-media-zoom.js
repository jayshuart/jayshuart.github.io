const scrolls = document.querySelectorAll('.scroll-container');
const overlay = document.querySelector('#media-zoom');

let allMedia = [];
scrolls.forEach(scroll => { 
    allMedia = allMedia.concat([...scroll.children]); 
});

console.log(allMedia);

overlay.addEventListener('click', function(){
    overlay.style.opacity = 0;
    //wait until css tranistion finishes before chaning display mode
    setTimeout(function(){ overlay.style.display = 'none'; }, 350);
});

allMedia.forEach(media => {
  media.addEventListener('click', function() {
    //set bg image to our overlay and give it the proper display
    overlay.style.display = 'flex';
    overlay.innerHTML = "";

    let tCopy = media.cloneNode(true);
    tCopy.style.height = '100vh';
    tCopy.style.padding = '50px';
    tCopy.style.paddingLeft = 'auto';
    tCopy.style.paddingRight = 'auto';
    overlay.appendChild(tCopy);
    
    //1ms delay so that the opacity css transition takes effect and isnt impacted by the display style change
    setTimeout(function(){ 
        overlay.style.opacity = 1;
    }, 1);
  });
});