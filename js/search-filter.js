
const cards = document.querySelectorAll(".card"); //get all cards so we can re-use them as needed
const searchBar = document.getElementById('searchbar');

//add event for search form to use
document.getElementById("searchForm").addEventListener('submit', function(event){
  event.preventDefault();  //stop search form from refreshing page
  if (event.key === 'Enter' || event.keyCode === 13) {
    onClickSearch();
  }
}); 


//set onlcick search func
function onClickSearch(){
  let input = searchBar.value;
  if(input.trim() === "") { showAll(); }
  else { search(input); }
}

//actual search func
function search(pSearchVal){
  pSearchVal = pSearchVal.toLowerCase().trim();
  
  cards.forEach( card => {
    let tIsMatch = false;

    //check against game title, or workplace
    let tWorkplace = card.querySelector(".workplace span");
    let tTitle = card.querySelector(".title");

    tIsMatch = compare(pSearchVal, tWorkplace.textContent) || 
      compare(pSearchVal, tTitle.textContent);

    //get the list items in this cards details section
    if(!tIsMatch){
      let tItems = card.querySelectorAll(".details li");
      for(let i = 0; i < tItems.length; i++){
        tIsMatch = compare(pSearchVal, tItems[i].textContent);
        if(tIsMatch) { break; }
      }
    }

    card.style.display = tIsMatch ? 
      "inline-block" : "none";
  });
}

function compare(pSearchVal, pInput){
  return pInput.toLowerCase().trim().indexOf(pSearchVal) !== -1;
}

//resets all cards to be visible
function showAll(){
  cards.forEach( card => { card.style.display = "inline-block"; });
}