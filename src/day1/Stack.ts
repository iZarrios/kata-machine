export default class Stack<T> {
    public length: number;
    public data: T[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    push(item: T): void {
        this.length++;
        this.data.push(item);
    }
    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        return this.data.pop()
    }
    peek(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        return this.data[this.length - 1];
    }
}
