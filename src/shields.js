export function shield(entity) {
    return new Proxy(entity, {
        set(target, prop, value) {
            if (prop === 'hp' && value < target.hp) {
                console.log("Block");
                return true; 
            }
            target[prop] = value;
            return true;
        }
    });
}