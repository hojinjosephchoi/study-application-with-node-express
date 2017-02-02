const _ = require('underscore');

var arr = [3, 6, 9, 1, 12];

// console.log(_.first(arr));

var sortedArr = _.sortBy(arr, (num) => {
    return -num;
});

console.log(sortedArr);