function radixSort(items, RADIX) {
  if (RADIX === undefined || RADIX < 1){
    RADIX = 10;
  }
  var maxLength = false;
  var placement = 1;
  while (!maxLength) {
    maxLength = true;
    var buckets = [];

    for (var i = 0; i < RADIX; i++) {
      buckets.push([]);
    }

    for (var j = 0; j < items.length; j++) {
      var tmp = items[j] / placement;
      buckets[Math.floor(tmp % RADIX)].push(items[j]);
      if (maxLength && tmp > 0) {
        maxLength = false;
      }
    }

    var a = 0;
    for (var b = 0; b < RADIX; b++) {
      var buck = buckets[b];
      for (var k = 0; k < buck.length; k++) {
        items[a] = buck[k];
        a++;
      }
    }
    placement *= RADIX;
  }
  return items;
}
var ar = [5, 6, 7, 8, 1, 2, 12, 14];
console.log(ar);
radixSort(ar);
console.log(ar);
