// The "<T>" is the generic. similar to typename

class Queue<T> {
    public data: T[] = [];

    add(item: T) {
        this.data.push(item);
    }

    remove() {
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('luis');
nameQueue.add('andrei');

const numberQueue = new Queue<number>();
numberQueue.add(10);
numberQueue.add(20);

for (let i of nameQueue.data) {
    console.log(i);
}

for (let i of numberQueue.data) {
    console.log(i);
}