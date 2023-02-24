
const ramCharacterHolder =  document.querySelector(".ram-character-container");
const input = document.querySelector("#input");
// const getApiBtn = document.querySelector(".getApi")
const url = "https://rickandmortyapi.com/api/character/?page=33";



//Search bar on keyup event
input.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
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
            <a href= "details.html?id=${characters.id} & ${characters.name} ">
            <div class="cardHolder">
            <img src="${characters.image}" alt="${characters.name} " />
            <div class="cardInfo">
            <h4> ${characters.name}</h4>
            <div class = "span-status-gender">
            <span class= "span1"> ${characters.status}</span><span> - ${characters.species}</span>  
            </div>
            <p> ${characters.gender}</p>
            <p> ${characters.origin.name}</p> 
            <p> ${characters.id}</p> 
            </div> 
            </div></a> 
            
            `
        });

        
        
    } catch (err) {
        console.log(err);
    }
    
    
}
// getApiBtn.addEventListener('click', () => {
    //     fetchCharacters();
    // })
    
    fetchCharacters();
    
