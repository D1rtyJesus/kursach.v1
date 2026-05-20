
export class Turnster {
    constructor() {
        this.queue = []; 
        this.Counter = 0; 
        
    }
    enqueue(entity, speed) {
         if (entity) {
            this.queue.push({entity: entity, priority: speed, Order: this.Counter}) 
            
            this.Counter++
         }
    }
    dequeue() {

        if (this.queue.length === 0) return null;

  
        this.queue.sort((a, b) => {
            if (a.priority !== b.priority) {
                return a.priority - b.priority; 
            }
            return b.Order - a.Order; 
        });

      
        const fastestFighter = this.queue.pop();
        return fastestFighter.entity;
   }
}
