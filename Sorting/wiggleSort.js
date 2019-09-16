Array.prototype.wiggleSort = function () {
    for (let i = 0; i < this.length; ++i) {
        const shouldNotBeLessThan = i % 2;
        const isLessThan = this[i] < this[i + 1];
        if (shouldNotBeLessThan && isLessThan) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
    }
    return this;
};
var arr = [3, 5, 2, 1, 6, 4];
console.log(arr);
arr.wiggleSort();

console.log(arr); // [ 3, 5, 2, 6, 1, 4 ]
