function addShipping(price: number, shipping: number) : number {
    return price + shipping; 
}

console.log(addShipping(10, 5));

function stringCounter(word: string) : number {
    let answer:number = (word.length);
    return answer;
}

console.log(stringCounter("Hello World"));