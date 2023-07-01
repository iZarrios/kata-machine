export default class Queue<T> {
    public length: number;
    public data: T[];



    constructor() {
        this.length = 0;
        this.data = [];
    }

    enqueue(item: T): void {
        this.length++;
        this.data.push(item);
    }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        return this.data.shift();
    }

    peek(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        return this.data[0];
    }
}
