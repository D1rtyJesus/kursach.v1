export class Turnster {
    constructor() {
        this.queue = [];
        this.Counter = 0;
    }

    enqueue(entity, speed) {
        if (entity) {
            this.queue.push({ entity: entity, priority: speed, Order: this.Counter });
            this.Counter++;
        }
    }

    dequeue(criteria = 'highest') {
        if (this.queue.length === 0) return null;

        this.queue.sort((a, b) => {
            switch (criteria) {
                case 'highest':
                    if (a.priority !== b.priority) return a.priority - b.priority;
                    return b.Order - a.Order;
                
                case 'lowest':
                    if (a.priority !== b.priority) return b.priority - a.priority;
                    return b.Order - a.Order;
                
                case 'oldest':
                    return b.Order - a.Order;
                
                case 'newest':
                    return a.Order - b.Order;
            }
        });

        const unit = this.queue.pop();
        return unit.entity;
    }

    peek(criteria = 'highest') {
        if (this.queue.length === 0) return null;

        this.queue.sort((a, b) => {
            switch (criteria) {
                case 'highest':
                    if (a.priority !== b.priority) return a.priority - b.priority;
                    return b.Order - a.Order;
                case 'lowest':
                    if (a.priority !== b.priority) return b.priority - a.priority;
                    return b.Order - a.Order;
                case 'oldest':
                    return b.Order - a.Order;
                case 'newest':
                    return a.Order - b.Order;
            }
        });

        return this.queue[this.queue.length - 1].entity;
    }
}
