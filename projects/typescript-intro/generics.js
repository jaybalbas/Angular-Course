// The "<T>" is the generic. similar to typename
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('luis');
nameQueue.add('andrei');
var numberQueue = new Queue();
numberQueue.add(10);
numberQueue.add(20);
for (var _i = 0, _a = nameQueue.data; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
for (var _b = 0, _c = numberQueue.data; _b < _c.length; _b++) {
    var i = _c[_b];
    console.log(i);
}
