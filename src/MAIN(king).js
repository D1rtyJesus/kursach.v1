import { enemySpawner } from './spawner.js';
import { Turnster } from './queue.js';
import { Events } from './events.js';
import { AOE } from './AOE.js';
import { shield } from './shields.js';
import { Ignite } from './status_effects.js';
import { memoize } from './memory.js';
import { writeLog, closeLog } from './combat_log.js';

const bQueue = new Turnster();
const gEvents = new Events();

const Damage = (base, armor) => Math.max(1, base - armor);
const getDamage = memoize(calcDamage, { maxS: 50, strat: "LRU" });

gameEvents.on('attack', (data) => {
    const msg = `${data.attacker} вдарив ${data.target} на ${data.dmg} урону!`;
    console.log(msg);
    writeLog(msg); 
});
console.log("Підготовка...");
let player = {
    type: "Fire Mage",
    hp: 100,
    attack(target) {
        const finalDmg = getDamage(25, 5); 
        target.hp -= finalDmg;
        
        gameEvents.emit('attack', { attacker: this.type, target: target.type, dmg: finalDmg });
        return finalDmg;
    }
};
player = Ignite(player);