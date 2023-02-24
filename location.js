
const urlLocation =  "https://rickandmortyapi.com/api/location/"
const ramCharacterHolder = document.querySelector(".ram-character-container")

async function fetchLocation() {

    try{

        const response = await fetch (urlLocation);

        // console.log(response);

        const location = await response.json();

        console.log(location.results);

        let locationData = location.results

        ramCharacterHolder.innerHTML = "";

        locationData.forEach(location => {

            ramCharacterHolder.innerHTML += `
            <div class="cardHolder">
            <span>${location.name}</span> 
            <span>${location.dimension}</span>
            <span>${location.type}</span>


            </div>
            `



        })


        

    } catch(error) {
        console.log(error)
    }
}

fetchLocation()