var currentMediaIndex = null;

//get all the media from the scroll containers
const scrolls = document.querySelectorAll('.scroll-container');
let allMedia = [];
scrolls.forEach(scroll => { 
    allMedia = allMedia.concat([...scroll.children]); 
});

//get overlay and give it the exit onclick callback
const overlay = document.querySelector('#media-zoom');
const target = document.querySelector('.media-zoom-target');

overlay.addEventListener('click', function(){
    overlay.style.opacity = 0;
    setTimeout(function(){ overlay.style.display = 'none'; }, 350); //wait until css tranistion finishes before chaning display mode
});

//give all the media we gathered an onclick callback to make it the overlayed media
for(let i = 0; i < allMedia.length; i++){
  let media = allMedia[i];
  media.addEventListener('click', function() {
    //set bg image to our overlay and give it the proper display
    overlay.style.display = 'flex';
    setImage(media, i);
    
    //1ms delay so that the opacity css transition takes effect and isnt impacted by the display style change
    setTimeout(function(){ 
        overlay.style.opacity = 1;
    }, 1);
  });
}

//add functionality to next and prev buttons
const next = document.querySelector(".next");
next.addEventListener('click', function(){
  nextImage(1);
  event.stopPropagation();
});

const prev = document.querySelector(".prev");
prev.addEventListener('click', function(){
  nextImage(-1);
  event.stopPropagation();
});

nextImage = function(pIndexAdjust){
  let tNewIndex = (currentMediaIndex + pIndexAdjust) % (allMedia.length);
  setImage(allMedia[tNewIndex], tNewIndex);
}

setImage = function(pImage, pIndex){
  currentMediaIndex = pIndex; //set index

  target.innerHTML = ""; //clear current image

  //set new image
  let tCopy = pImage.cloneNode(true);
  tCopy.style.width = '100%';
  tCopy.style.padding = '30px';
  tCopy.style.objectFit = "contain";
  target.appendChild(tCopy);
};