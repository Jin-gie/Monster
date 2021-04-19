import {log, displayStatus} from "./ui.js";

let name;
let life;
let money;
let awake;

/**
 * Getter function for the monster
 * @returns objet with monster attributes
 */
 export function get() {
    return {
        name: name,
        life: life,
        money: money,
        awake: awake
    };
}

/**
 * Initialize a monster with given parameters
 * @param {name of the monster} n 
 * @param {health points of the monster} l 
 * @param {money of the monster} m 
 * @param {is the monster awake ?} a 
 */
 export function init(n, l, m, a) {
    name = n;
    life = l;
    money = m;
    awake = a;
}

/**
 * Open an alert with monster stats
 */
 export function showMe() {
    let m = get();
    alert(`Name: ${m.name}\nHP: ${m.life}\nMoney: ${m.money}\nIs Awake? ${m.awake}`);
}

/**
 * Makes the monster go for a run: 
 * -1 hp
 */
 export function run() {
    if (life >= 1 && awake) {
        life--;
        log(`${name} did a nice run`);
        displayStatus();
    } else
        log(`${name} cannot run`);
}

/**
 * Makes the monster fight:
 * -3 hp
 */
 export function fight() {
    if (life >= 3 && awake) {
        life -= 3;
        log(`${name} fought and lost 3hp`);
        displayStatus();
    } else
        log(`${name} cannot fight`);
}


/**
 * Makes the monster go to work: 
 * -1 hp
 * +2 money
 */
 export function work() {
    if (life >= 1 && awake) {
        life--;
        money += 2;
        log(`${name} worked hard and earned 2 coins`);
        displayStatus();
    } else
        log(`${name} cannot work`);
}

/**
 * Makes the monster eat:
 * -3 money
 * +2 hp
 */
 export function eat() {
    if (money >= 3 && awake) {
        money -= 3;
        life += 2;
        log(`${name} ate a gained 2 hp`);
        displayStatus();
    } else
        log(`${name} cannot eat`);
}

/**
 * Makes the monster sleep for 10 secs:
 * +1 hp
 * during this time none of the other activities can be done
 */
 export function sleep() {
    awake = false;
    log(`${name} is sleeping`);
    displayStatus();
    setTimeout(() => {
        awake = true;
        life++;
        log(`${name} is awake`);
        displayStatus();
    }, 1000 * 10);
}