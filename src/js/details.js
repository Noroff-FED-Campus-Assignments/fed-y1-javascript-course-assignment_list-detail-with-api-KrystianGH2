/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the lsit to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

// /**
//  * TODO: Create a function to create a DOM element.
//  * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
//  * @param {item} item The object with properties from the fetched JSON data.
//  */


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


        console.log(results);
        const  resultOfCharacters = results;

        detailsCardInfo.innerHTML = "";

        createHtml(resultOfCharacters);


            

        }   
             catch(error){
             console.log(error);
            }



}

fetchCharacters()

function createHtml(resultOfCharacters) {
    detailsCardInfo.innerHTML += ` <div class="cardHolder">
    <img src="${resultOfCharacters.image}" alt="${resultOfCharacters.name}" />
    <div class="cardInfo">
    <h4> ${resultOfCharacters.name}</h4>
    <div class = "span-status-gender">
    <span class= "span1"> ${resultOfCharacters.status}</span><span> - ${resultOfCharacters.species}</span>  
    </div>
    <p> ${resultOfCharacters.gender}</p>
    <p> ${resultOfCharacters.origin.name}</p> 
    <p> ${resultOfCharacters.id}</p>
    <p> ${resultOfCharacters.location.name}</p>
    
    </div>  `
}



// {/* <div details-cardInfo>

// </div>
//  */}


