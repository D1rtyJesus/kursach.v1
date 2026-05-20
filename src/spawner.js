export function* enemySpawner() {
    const types = ["Goblin", "Orc", "Skeleton", "Troll", "TRIPLE T", "Spider"];
    let id = 1;

    while (true) {
        const randomType = types[Math.floor(Math.random() * types.length)];
        const hp = Math.floor(Math.random() * 50) + 50;
        
        yield {
            id: id++,
            type: randomType,
            hp: hp,
            isAlive: true
        };
    }
}

export function timeoutIterator(iterator, timeoutSec) {
    const startTime = Date.now();
    const timeoutMs = timeoutSec * 1000;

    while (Date.now() - startTime < timeoutMs) {
        const nextData = iterator.next();
        if (nextData.done) break;

        const enemy = nextData.value;
        console.log(`[Spawn] ${enemy.type} (ID: ${enemy.id}, HP: ${enemy.hp}) entered the arena!`);
    }
}
