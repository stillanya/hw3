var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var counts = {};
for (var i=0;i<tags.length;i++){
   var tag=tags[i];
    if (counts[tag]) {
        counts[tag]++;
    } else {
        counts[tag] = 1;
    }
};
console.log(counts)

var numbers = [10, 20, 30, 50, 235, 3000, 5000439857];

for (var i = 0; i < numbers.length; i++) {
    var numbs = Math.floor(Math.abs(numbers[i]) / Math.pow(10, Math.floor(Math.log10(Math.abs(numbers[i])))));
    if (numbs === 1 || numbs === 2 || numbs === 5) {
        console.log(numbers[i]);
    }
}

for (var i = 20; i >= 0; i--) {
    console.log(i);
}
