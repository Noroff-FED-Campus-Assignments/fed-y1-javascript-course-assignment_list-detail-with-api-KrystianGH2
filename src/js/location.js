import  {displayError}  from "./displayError.js";
const urlLocation =  "https://rickandmortyapi.com/api/location/?page=5"
const locationContainer = document.querySelector(".location-card-info")



async function fetchLocation() {
    
        try{
        
                const response = await fetch (urlLocation);
        
        
                const location = await response.json();
        
        
                let locationData = location.results
        
                locationContainer.innerHTML = "";
            
            locationData.forEach(location => {
        
                        locationContainer.innerHTML +=  `
            <div class="box-parent"> 
                    <div class="box">
                        <h5 class="h5-location-name"> ${location.name}</h5>
                        <span><i class="fa-solid fa-angle-down"></i></span>
                    </div>
                    <div class="card-box animate__animated animate__fadeInDown">
                        <div class="card-info-elements"> ${location.dimension}</div>
                        <div class="card-info-elements">Type: ${location.type}</div>
                        <div class="card-info-elements">ID: ${location.id}</div>
                    </div>
            </div>`   

                })       
                
                const boxParent = document.querySelectorAll('.box-parent')

                boxParent.forEach(boxes => {
                    const cardBox = boxes.querySelector('.card-box')
                    boxes.addEventListener('click', () =>{
                        cardBox.classList.toggle('card-box-show')
                    })

                })
                
        
            } catch(error) {
                locationContainer.innerHTML = displayError()        
                }        
            }        
            
            fetchLocation()

            const dropDownBtn = document.querySelector('.drop-down-nav');
            const navList = document.querySelector(".nav-list");
            dropDownBtn.addEventListener('click', () => {
                setTimeout(() =>  { 
                    navList.classList.toggle('nav-list-show') + dropDownBtn.classList.toggle('drop-down-rotate')   
                    ;},200)   
                });     
                
                
                