import {get} from "./actions.js";


/**
 * Add a new log message to the logbox
 * @param {log message to be displayed} message 
 */
export function log(message) {
    let now = new Date();
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(`[${formatDate(now.getHours())}:${formatDate(now.getMinutes())}:${formatDate(now.getSeconds())}] ${message}`));
    document.getElementById("actionbox").prepend(p); // add it at the top of the box
}

/**
 * Format a part of the date by adding a 0 if < 10
 * @param {part of date to be formated} date 
 * @returns formatted date (ex : 13 or 03)
 */
function formatDate(date) {
    return (date < 10 ? `0${date}` : date);
}

/**
 * Display the status of the monster on the interface
 */
export function displayStatus() {
    let i = document.querySelectorAll("#status li");
    let m = get();

    // Change description of monster
    i[0].innerHTML = `life: ${m.life}`;
    i[1].innerHTML = `money: ${m.money}`;
    i[2].innerHTML = (m.awake) ? "awake" : "asleep";

    let mEl = document.getElementById("monster");
    // Change color of the monster according to life
    if (m.life < 10)
        mEl.style.backgroundColor = "red";
    else if (m.life < 25)
    mEl.style.backgroundColor = "orange";
    else if (m.life < 50)
    mEl.style.backgroundColor = "lightblue";
    else 
    mEl.style.backgroundColor = "lightgreen";

    // Change border width according to money
    let width = m.money * .5;
    mEl.style.border = `${width}px solid black`;
}
