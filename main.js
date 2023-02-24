const ramCharacterHolder =  document.querySelector(".ram-character-container");
const input = document.querySelector("#input");
const url = "https://rickandmortyapi.com/api/character/?page=16";


// ui js
const dropDownBtn = document.querySelector('.drop-down-nav');
const navList = document.querySelector(".nav-list");
 dropDownBtn.addEventListener('click', () => {
    setTimeout(() =>  { 
     navList.classList.toggle('nav-list-show') + dropDownBtn.classList.toggle('drop-down-rotate')
     ;},200)   
});



//Search bar on keyup event
input.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
    console.log(searchValue)
    fetchCharacters(searchValue)
})



async function fetchCharacters(searchValue = "")  {
    
    try {
        const response = await fetch (url)
        //  console.log(response);
        
        const results = await response.json();
        // console.log(results.results);
        
        const characters = results.results
        
        const  filteredCharacters = characters.filter(function(characters){
            return characters.name.toLowerCase().includes(searchValue)
        })

        ramCharacterHolder.innerHTML = "";

        
        filteredCharacters.forEach(characters => {
            ramCharacterHolder.innerHTML += `
            <a class= "a-holder" href= "details.html?id=${characters.id} & ${characters.name} ">
            <div class="cardHolder">
            <img class ="character-image" src="${characters.image}" alt="${characters.name} " />
            <div class="cardInfo">
            <h5 class = "h4-character-names"> ${characters.name}</h5>
            <div class = "span-status-gender">
            <span class= "span1"> ${characters.status}</span><span> - ${characters.species}</span>  
            </div>
            <p class ="p-character-cardInfo"> Origin: ${characters.origin.name}</p> 
            </div> 
            </div></a> 
            
            `
            
        });
        
    } catch (err) {
        console.log(err);
    }
}

fetchCharacters();


// image slideshow carousel

let images = ['src/image/image0.avif','src/image/image1.webp','src/image/image2.png','src/image/image3.webp']
const carousel = document.querySelector('#images-slideshow');
let i = 0;
function slideShow() {
        carousel.src=images[i];
        if(i < images.length-1) {
                i++;
            } else{
                    i = 0;
                }
                setTimeout("slideShow()",5000)
            }
            window.onload = slideShow;
            
            
