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