export class Events {
    constructor() {
        this.events = {}; 
    }

    on(evName, cback) {
        if (!this.events[evName]) {
            this.events[evName] = [];
        }
        this.events[evName].push(cback);
    }

    off(evName, cback) {
        if (this.events[evName]) {
            this.events[evName] = this.events[evName].filter(cb => cb !== cback);
        }
    }

    emit(evName, data) {
        if (this.events[evName]) {
            for (const cback of this.events[evName]) {
                cback(data);
            }
        }
    }
}