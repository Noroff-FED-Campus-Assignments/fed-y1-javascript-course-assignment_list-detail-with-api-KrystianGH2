import { displayErrorMessage } from "./displayError";

const queryString =  document.location.search
const params = new URLSearchParams(queryString)
const id = params.get('id');
// const names = params.get('string');

const detailsCardInfo = document.querySelector(".details-cardInfo")
const url = "https://rickandmortyapi.com/api/character/" + id;

async function fetchCharacters() {

    try {

        const response = await fetch(url);
        const results = await response.json();

        const  resultOfCharacters = results;

        detailsCardInfo.innerHTML = "";

        createHtml(resultOfCharacters);            

        }   
             catch(error){
                detailsCardInfo.innerHTML = displayErrorMessage();
            }

}

fetchCharacters()

function createHtml(resultOfCharacters) {
    detailsCardInfo.innerHTML += ` <div class="cardHolder-details">
    <img class ="image-in-cardInfo"src="${resultOfCharacters.image}" alt="${resultOfCharacters.name}" />
    <div class="cardInfo-details">
    <h5 class = "h4-character-names"> ${resultOfCharacters.name}</h5>
    <div class = "span-status-gender">
    <span class= "span1"> ${resultOfCharacters.status}</span><span> - ${resultOfCharacters.species}</span>  
    </div>
    <p class ="p-character-cardInfo"> ${resultOfCharacters.gender}</p>
    <p class ="p-character-cardInfo"><strong>ID:</strong> ${resultOfCharacters.id}</p>
    <p class ="p-character-cardInfo"><strong>Location:</strong> ${resultOfCharacters.location.name}</p>
    
    </div>  `
    
    if(resultOfCharacters.status === "Alive") {
        // console.log(resultOfCharacters.status)
        document.querySelector('.span-status-gender').classList.add("span-status-gender-alive")
    } else if(resultOfCharacters.status === "Dead") {
        document.querySelector('.span-status-gender').classList.add("span-status-gender-dead")
    } else if(resultOfCharacters.status === "unknown") {
        document.querySelector('.span-status-gender').classList.add("span-status-gender-unknown")
    }
}



const dropDownBtn = document.querySelector('.drop-down-nav');
const navList = document.querySelector(".nav-list");
 dropDownBtn.addEventListener('click', () => {
    setTimeout(() =>  { 
     navList.classList.toggle('nav-list-show') + dropDownBtn.classList.toggle('drop-down-rotate')
     ;},200)   
});


const url2 = "https://rickandmortyapi.com/api/character/";

const extraCards = document.querySelector(".extra-cards-details")


async function fetchExtraCards(){
    try{

        const response2 = await fetch(url2);
        // console.log(response2)
        const data = await response2.json();
        const listOfData = data.results

        for (let i = 0; i < listOfData.length; i++) {

            extraCards.innerHTML +=`<div class="details">
            <div class="cardHolder-details">
            <img class ="image-in-cardInfo"src="${listOfData[i].image}" alt="${listOfData[i].name}" />
            <div class="cardInfo-details">
            <h5 class = "h4-character-names"> ${listOfData[i].name}</h5>
            <div class = "span-status-gender">
            <span class= "span1"> ${listOfData[i].status}</span><span> - ${listOfData[i].species}</span>  
            </div>
            <p class ="p-character-cardInfo"> ${listOfData[i].gender}</p>
            <p class ="p-character-cardInfo"><strong>ID:</strong> ${listOfData[i].id}</p>
            <p class ="p-character-cardInfo"><strong>Location:</strong> ${listOfData[i].location.name}</p>
            
            </div></div>`

        
            if(listOfData[i].name.startsWith("J") ) {
                return;
                
            }
        }




    } catch(error){
        extraCards.innerHTML = displayErrorMessage();
    }
}
fetchExtraCards()