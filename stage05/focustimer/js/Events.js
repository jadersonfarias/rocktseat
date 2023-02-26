
import {  
    play,
    pause,
    more,
    anyLess,
    florest,
    rain,
    coffeeshop,
    fireplace,
 
} from "./index.js";

const minutesDisplay = document.querySelector(".minutes")
let minutes = Number(minutesDisplay.textContent)

export default function ({
    Timer,
    Sounds,
    
}){
   
    play.addEventListener('click', function(){
        Timer.countdown()
    })
    
    pause.addEventListener('click', function(){
       Timer.stop()
    })
    
    more.addEventListener('click', function(){
      minutes = Number(5) + minutes                                          
      Timer.updateTimerDisplay(minutes, 0)
    })
    
    anyLess.addEventListener('click', function(){
        minutes = minutes  - Number(5)                                        
        Timer.updateTimerDisplay(minutes, 0)
    })
    
    
    florest.addEventListener('click', function(){
            florest.classList.toggle('hide')
            Sounds.nature()
    })
    
    rain.addEventListener('click', function(){
            rain.classList.toggle('hide')
            Sounds.water()
    })
    
    coffeeshop.addEventListener('click', function(){
        coffeeshop.classList.toggle('hide')
        Sounds.coffe()
    })
    
    fireplace.addEventListener('click', function(){
           fireplace.classList.toggle('hide')
           Sounds.fire()
    })
}