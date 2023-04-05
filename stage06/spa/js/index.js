import { Router } from "./router.js";
import { Backgrounds } from "./event.js";
import {bgHome, bgUniverse, bgExploration, button} from "./elements.js";


const backgrounds = Backgrounds({
  bgHome,
  bgUniverse,
  bgExploration,
})
 

  bgHome.addEventListener("click", function () {
    backgrounds.backgroundHome();
  });




  bgUniverse.addEventListener("click", function () {
    backgrounds.backgroundUniverse();
  });



  bgExploration.addEventListener("click", function () {
    backgrounds.backgroundExploration();
  });


  console.log(bgUniverse)

const router = new Router()
router.add('/',"../page/home.html");
router.add("/exploracao","../page/exploracao.html");
router.add("/universo","../page/universo.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();