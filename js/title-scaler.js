//get all the titles so we can resize them to always fit
const titles = document.querySelectorAll('.title');
const lineHeight = 50; 
const lineHeightTall = 100;

let onResize = function(){
  let tFontSize = 45;
  let tFontSizeMin = 10;
  let tSizeDiff = tFontSize - tFontSizeMin;

  let tFontScaler = 1;
  let tLocalFontSize = 0;

  let tScroll = null;

  let i = 0;
  titles.forEach(title => {
    title.style.fontSize = "250%"; //reset to standard size for accurate size checking

    tScroll = title.parentNode.parentNode.querySelector('.scroll-container');
    if(tScroll != null){
      tFontScaler = lineHeight / title.offsetHeight; 
      tLocalFontSize = tFontSizeMin + (tFontScaler * tSizeDiff); 
    }
    else{
      tFontScaler = (lineHeight * 10) / title.offsetHeight; 
      tLocalFontSize = tFontSizeMin + ((tFontScaler * tSizeDiff) * 1); 
    }

    

    if(tLocalFontSize < tFontSize){
      title.style.fontSize = tLocalFontSize + "px";
    } title.style.fontSize = tLocalFontSize + "px";
  });
}

window.addEventListener("resize", onResize);
onResize();