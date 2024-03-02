
const cards = document.querySelectorAll(".card"); //get all cards so we can re-use them as needed
const searchBar = document.getElementById('searchbar');

//add event for search form to use
document.getElementById("searchForm").addEventListener('submit', function(event){
  event.preventDefault();  //stop search form from refreshing page
  if (event.key === 'Enter' || event.keyCode === 13) {
    //document.getElementById("id_of_button").click();
    onClickSearch();
}
}); 


//set onlcick search func
function onClickSearch(){
  let input = searchBar.value; console.log(input);
  if(input.trim() === "") { showAll(); }
  else { search(input); }
}

//actual search func
function search(pSearchVal){
  pSearchVal = pSearchVal.toLowerCase().trim();
  
  cards.forEach( card => {
    //check against game title, or workplace

    //get the list items in this cards details section
    let tItems = card.querySelectorAll(".details li");

    let tFitsSearchCriteria = false;
    for(let i = 0; i < tItems.length; i++){
      tFitsSearchCriteria = pSearchVal == tItems[i].textContent.toLowerCase().trim();
      if(tFitsSearchCriteria) { break; }
    }

    card.style.display = tFitsSearchCriteria ? 
      "inline-block" : "none";
  });
}

//resets all cards to be visible
function showAll(){
  cards.forEach( card => { card.style.display = "inline-block"; });
}