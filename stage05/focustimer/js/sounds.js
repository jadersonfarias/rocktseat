export default function() {
    const florest = new Audio("./src/Floresta.wav");
    const rain = new Audio("./src/chuva.wav");
    const coffeshop = new Audio("./src/Cafeteria.wav");
    const fireplace = new Audio("./src/lareira.wav");

    function nature() {
        florest.play()
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


    return {
       nature,
       water,
       coffe,
       fire,
    }
}