function gnomeSort(items) {
    if (items.length <= 1) {
        return;
    }
    let i = 1;
    while (i < items.length) {
        if (items[i - 1] <= items[i]) {
            i++;
        } else {
            let temp = items[i];
            items[i] = items[i - 1];
            items[i - 1] = temp;
            i = Math.max(1, i - 1);
        }
    }
}

var ar = [5, 6, 7, 8, 1, 2, 12, 14];
console.log(ar);
gnomeSort(ar);

console.log(ar);
