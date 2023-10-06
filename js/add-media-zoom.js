//get all the media from the scroll containers
const scrolls = document.querySelectorAll('.scroll-container');
let allMedia = [];
scrolls.forEach(scroll => { 
    allMedia = allMedia.concat([...scroll.children]); 
});

//get overlay and give it the exit onclick callback
const overlay = document.querySelector('#media-zoom');
overlay.addEventListener('click', function(){
    overlay.style.opacity = 0;
    setTimeout(function(){ overlay.style.display = 'none'; }, 350); //wait until css tranistion finishes before chaning display mode
});

//give all the media we gathered an onclick callback to make it the overlayed media
allMedia.forEach(media => {
  media.addEventListener('click', function() {
    //set bg image to our overlay and give it the proper display
    overlay.style.display = 'flex';
    overlay.innerHTML = "";

    let tCopy = media.cloneNode(true);
    tCopy.style.width = '100%';
    tCopy.style.padding = '50px';
    tCopy.style.objectFit = "contain";
    // tCopy.style.paddingLeft = 'auto';
    // tCopy.style.paddingRight = 'auto';
    overlay.appendChild(tCopy);
    
    //1ms delay so that the opacity css transition takes effect and isnt impacted by the display style change
    setTimeout(function(){ 
        overlay.style.opacity = 1;
    }, 1);
  });
});