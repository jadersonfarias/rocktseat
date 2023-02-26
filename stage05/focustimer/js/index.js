import buttons from "./Events.js"
import sounds from "./sounds.js"
import timer from "./timer.js"
import Events from "./Events.js"


const minutesDisplay = document.querySelector(".minutes")
//const secondsDisplay = document.querySelector(".seconds")


const play = document.querySelector(".play")
const pause = document.querySelector(".stop")
const more = document.querySelector(".more")
const anyLess = document.querySelector(".anyLess")
let minutes = Number(minutesDisplay.textContent)
const florest = document.querySelector(".forest")
const rain = document.querySelector(".rain")
const coffeeshop = document.querySelector(".coffeeshop")
const fireplace = document.querySelector(".fireplace")

const Sounds = sounds()
const Timer = timer()

Events({Timer, Sounds})


export {
  play,
  pause,
  more,
  anyLess,
  florest,
  rain,
  coffeeshop,
  fireplace,
  minutesDisplay,
  
  

}
/*
function updateTimerDisplay (minutes, seconds) {
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}



function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateTimerDisplay(minutes, 0)
  
      if (minutes <= 0) {
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }

*/
/*
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
*/