import {
    volForest,
    volPeople,
    volFire,
    volRain,
} from "./index.js"

export default function() {
    const forest = new Audio("./src/Floresta.wav");
    const rain = new Audio("./src/chuva.wav");
    const fireplace = new Audio("./src/lareira.wav");
    const coffeshop = new Audio(".src/coffee-shop.wav");
  

    function nature() {
        forest.play()
    }

    function water(){
        rain.play()
    }
    
    function coffe(){
        coffeshop.play
    }

    function fire(){
       fireplace.play()
    }

    function setaudiovolume() {
        forest.volume = volForest.value
        rain.volume = volRain.value
        fireplace.volume = volFire.value
        coffeshop.volume = volPeople.value
    }


    return {
       nature,
       water,
       coffe,
       fire,
       setaudiovolume,
       
       
    }
}