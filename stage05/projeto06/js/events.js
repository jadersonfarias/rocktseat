import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonset,
    buttonSoundOn,
    buttonSoundOff,
}from "./elements.js"
export default function({controls, timer, sound}){
    
    
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
        sound.bgAudio.pause()
    })
    
       
    buttonSoundOff.addEventListener('click', function(){
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
        sound.bgAudio.play()
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

    

}


