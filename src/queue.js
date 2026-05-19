
export class Turnster {
    constructor() {
        this.queue = []; 
        this.Counter = 0; 
        
    }
    enqueue(entity, speed) {
         if (entity !== false) {
            this.queue.push({entity: entity, priority: speed, Order: this.Counter}) 
            
            this.Counter++
         }
    }
}