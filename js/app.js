import * as actions from "./actions.js";
import * as ui from "./ui.js";

let run = document.getElementById("b2");
let fight = document.getElementById("b3");
let work = document.getElementById("b7");
let sleep = document.getElementById("b4");
let eat = document.getElementById("b5");
let show = document.getElementById("b6");
let newLife = document.getElementById("b1");
let kill = document.getElementById("k");

let timerUpInterval;
let audio = new Audio('sounds/ThemeTomate.mp3');


/**
 * Starts the application by initializing a monster
 * and declare a handler the buttons
 */
 export function start() {
    ui.clearLogContent();
    actions.init("Mons'", 100, 10, true);

    show.addEventListener("click", actions.showMe);
    run.addEventListener("click", actions.run);
    fight.addEventListener("click", actions.fight);
    work.addEventListener("click", actions.work);
    eat.addEventListener("click", actions.eat);
    sleep.addEventListener("click", actions.sleep);
    newLife.addEventListener("click", start);
    kill.addEventListener("click", actions.killMe);
    ui.displayStatus();

    audio.loop = true;
    audio.play();
}

//Every 12 seconds excecute a random activity
setInterval(actions.random, 1000 * 12);


// Update alive time
timerUpInterval = setInterval(() => {
    if (!actions.get().dead)
        ui.updateAlive();
}, 1000);
