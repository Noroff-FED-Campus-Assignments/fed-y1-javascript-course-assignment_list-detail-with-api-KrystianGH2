import { displayErrorMessage } from "./displayError.js";

const dropDownBtn = document.querySelector('.drop-down-nav');
const navList = document.querySelector(".nav-list");
dropDownBtn.addEventListener('click', () => {
    setTimeout(() =>  { 
        navList.classList.toggle('nav-list-show') + dropDownBtn.classList.toggle('drop-down-rotate')   
        ;},200)   
    });     
    
    
const urlLocation =  "https://rickandmortyapi.com/api/episode/"
const episodesContainer = document.querySelector(".location-card-info")



async function fetchEpisodes() {
    
        try{
        
                const response = await fetch (urlLocation);
        
                // console.log(response);
        
                const episodes = await response.json();
        
                // console.log(episodes.results);
        
                let episodesData = episodes.results
        
                episodesContainer.innerHTML = "";
            
            episodesData.forEach(episode => {
        
                episodesContainer.innerHTML +=  `
            <div class="box-parent"> 
                    <div class="box">
                        <h5 class="h5-location-name"> ${episode.name}</h5>
                        <span><i class="fa-solid fa-angle-down"></i></span>
                    </div>
                    <div class="card-box animate__animated animate__fadeInRight">
                        <div class="card-info-elements">ID: ${episode.id}</div>
                        <div class="card-info-elements">Episode: ${episode.episode}</div>
                        <div class="card-info-elements">ID: ${episode.air_date}</div>
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
                episodesContainer.innerHTML = displayErrorMessage(error);     
                }        
            }        
            
            fetchEpisodes()
