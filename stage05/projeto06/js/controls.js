export default function Controls({
    buttonPlay,
    buttonPause,
    buttonset,
    buttonStop,
}){
    function play(){
        buttonPlay.classList.add("hide")
        buttonPause.classList.remove('hide')
        buttonset.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonset.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('quantos minutos?')  
        if (!newMinutes){
            timer.reset()
            return false
        }
    
        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }

}    
