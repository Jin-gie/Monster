import * as actions from "./actions.js";

let run = document.getElementById("b2");
let fight = document.getElementById("b3");
let work = document.getElementById("b7");
let sleep = document.getElementById("b4");
let eat = document.getElementById("b5");
let show = document.getElementById("b6");
let newLife = document.getElementById("b1");
let kill = document.getElementById("k");


/**
 * Starts the application by initializing a monster
 * and declare a handler for "showme" button
 */
 export function start() {
    actions.init("Mons'", 100, 100, true);
    show.addEventListener("click", actions.showMe);
}