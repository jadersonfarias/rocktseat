const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let timerTimeOut


export default function timer()
{

    function updateTimerDisplay (minutes, seconds) {
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }
    
    function stop(){
        clearTimeout(timerTimeOut)
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

      return{
        countdown,
        updateTimerDisplay,
        stop
      }
}