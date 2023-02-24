//DOM
// doment object model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o código mais performático
// sem alterar sua funcionalidades
import Controls from "./controls.js"
import  Timer from "./Timer.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonset,
    minutesDisplay,
    secondsDisplay, 
} from "./elements.js"
import sounds from "./sounds.js"
import Events from "./events.js"


const sound = sounds()
const controls= Controls({
    buttonPlay,
    buttonPause,
    buttonset,
    buttonStop,
})

const timer = Timer ({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})


Events({controls, timer, sound})


































/*
buttonPlay.addEventListener('click', function (){
    controls.play()
    timer.countdown()
    sound.pressbutton()

})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressbutton()
})

buttonStop.addEventListener('click', function (){
    controls.reset()
    timer.reset()
    sound.pressbutton()
})
   
buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.play()
})

   
buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
})

buttonset.addEventListener('click', function(){
 let newMinutes = controls.getMinutes()

    if (!newMinutes){
        timer.reset()
        return
    }

    timer.updateDislplay(newMinutes, 0)
    timer.updateMinutes(newMinutes,0)                         
    
})
*/