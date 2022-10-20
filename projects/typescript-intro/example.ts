function addShipping(price: number, shipping: number) : number {
    return price + shipping; 
}

// console.log(addShipping(10, 5));

function stringCounter(word: string) : number {
    let answer:number = (word.length);
    return answer;
}

// console.log(stringCounter("Hello World"));

// for (let i = 0; i < 15; ++i) {
//     let x = addShipping(0,i);
//     x += 1;
//     console.log(x);
// }

class Operations {
    num1: number;
    num2: number;

    constructor(n: number, m: number) {
        this.num1 = n;
        this.num2 = m;
    }

    adding() {
        return this.num1 + this.num2;
    }

    subtracting() {
        return this.num1 - this.num2;
    }

    multiplying() {
        return this.num1 * this.num2;
    }

    dividing() {
        return this.num1 / this.num2;
    }

};


var hello = new Operations(20,5);

console.log("add: " + hello.adding());
console.log("sub: " + hello.subtracting());
console.log("mult: " + hello.multiplying());
console.log("div: " + hello.dividing());