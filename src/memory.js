export function memoize(fn, options = {}) {
    const cache = new Map();
    const maxS = options.maxS || Infinity;
    const strat = options.strat || "LRU";

    return function(...arg) {
        const key = JSON.stringify(arg);

        if (cache.has(key)) {
            const save = cache.get(key);
            save.count += 1; 

            if (strat === "LRU") {
                cache.delete(key);
                cache.set(key, save);
            }

            console.log(`[Cache Hit] взято з пам'яті: ${key}`);
            return save.value; 
        }

        const result = fn(...arg);

        if (cache.size >= maxS) {
            if (strat === "LRU") {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            } else if (strat === "LFU") {
                let min = Infinity;
                let lfuKey = null;
                for (const [k, record] of cache) {
                    if (record.count < min) {
                        min = record.count;
                        lfuKey = k;
                    }
                }
                cache.delete(lfuKey);
            }
        }

        console.log(`[Cache Miss] збереження:  ${key}`);
        cache.set(key, { value: result, count: 1 });
        return result;
    };
}
