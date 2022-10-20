function addShipping(price, shipping) {
    return price + shipping;
}
// console.log(addShipping(10, 5));
function stringCounter(word) {
    var answer = (word.length);
    return answer;
}
// console.log(stringCounter("Hello World"));
// for (let i = 0; i < 15; ++i) {
//     let x = addShipping(0,i);
//     x += 1;
//     console.log(x);
// }
var Operations = /** @class */ (function () {
    function Operations(n, m) {
        this.num1 = n;
        this.num2 = m;
    }
    Operations.prototype.adding = function () {
        return this.num1 + this.num2;
    };
    Operations.prototype.subtracting = function () {
        return this.num1 - this.num2;
    };
    Operations.prototype.multiplying = function () {
        return this.num1 * this.num2;
    };
    Operations.prototype.dividing = function () {
        return this.num1 / this.num2;
    };
    return Operations;
}());
;
var hello = new Operations(20, 5);
console.log("add: " + hello.adding());
console.log("sub: " + hello.subtracting());
console.log("mult: " + hello.multiplying());
console.log("div: " + hello.dividing());
