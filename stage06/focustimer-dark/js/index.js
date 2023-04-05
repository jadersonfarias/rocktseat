
import sounds from "./sounds.js"
import timer from "./timer.js"
import Events from "./Events.js"


const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const dark = document.querySelector(".dark")
const light = document.querySelector(".light")
const play = document.querySelector(".play")
const pause = document.querySelector(".stop")
const more = document.querySelector(".more")
const anyLess = document.querySelector(".anyLess")


const florest = document.querySelector(".forest")
const rain = document.querySelector(".rain")
const coffeeshop = document.querySelector(".coffeeshop")
const fireplace = document.querySelector(".fireplace")

const volForest = document.querySelector('.volforest')
const volRain = document.querySelector('.volRain')
const volPeople = document.querySelector('.volcoffe')
const volFire = document.querySelector('.volfire')


const html = document.querySelector('html')

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
  light,
  dark,
  html,
  volForest,
  volPeople,
  volRain,
  volFire,
  

}
