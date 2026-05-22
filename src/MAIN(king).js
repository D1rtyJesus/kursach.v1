import { Spawner } from './spawner.js';
import { Queue } from './queue.js';
import { Events } from './events.js';
import { shield } from './shields.js';
import { withIgnite } from './status_effects.js';
import { AOE } from './AOE.js';
import { getDamage } from './memory.js'; 
import { writeLog, closeLog } from './combat_log.js';

const spawner = new Spawner();
let knight = spawner.spawn("Knight");
let mage = spawner.spawn("Mage");
let orc1 = spawner.spawn("Orc");
let orc2 = spawner.spawn("Orc");

knight = shield(knight);
mage = withIgnite(mage);

const battleQueue = new Queue();
battleQueue.enqueue(knight); 
battleQueue.enqueue(mage);
battleQueue.enqueue(orc1);
battleQueue.enqueue(orc2);