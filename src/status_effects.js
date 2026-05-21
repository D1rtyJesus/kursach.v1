export function Ignite(entity) {
    const ogAttack = entity.attack;

    entity.attack = function(target) {
        const bDamage = ogAttack.call(this, target);

        if (!target.effects) {
            target.effects = [];
        }

        target.effects.push({
            name: 'Burn',
            duration: 3, 
            damagePerTurn: 5  
        });

        console.log(`\x1b[31m🔥 ${this.type} підпалює ${target.type}! на 3 ходи.\x1b[0m`);

        return bDamage; 
    };

    return entity;
}