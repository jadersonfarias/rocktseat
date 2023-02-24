import sounds from "./sounds.js"



export default function Timer({ 
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) { 

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)


 function updateDislplay(newMinutes, seconds) {

    //false
    //truthy
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    // let isfinised = minutos <= 0 && seconds <= 0
}
 function reset(){
    updateDislplay(minutes,0)
    clearTimeout(timerTimeOut)
}

 function countdown() {
   timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateDislplay(minutes, 0)

                if (minutes <= 0 && seconds <= 0){   // isfinised
                   resetControls()
                   updateDislplay()
                   sounds().timeEnd()
                   return
                }
                
             
        if( seconds <= 0 ) {
            seconds = 60
            --minutes //
        }
        
        updateDislplay(minutes, String(seconds - 1))//

        countdown()
    }, 1000)
  
}

function updateMinutes(newMinutes) {
    minutes = newMinutes
}

function hold() {
    clearTimeout(timerTimeOut)
}
    

 return{
    countdown,
    reset, 
    updateDislplay,
    hold,
    updateMinutes
}
}

