 let min = function(arr) {
    min_number = 0;
    for(let elem in arr) {
        if (arr[elem] < min_number || min_number == 0) min_number = arr[elem];
    }
    return min_number;
}
 let max = function(arr) {
    max_number = 0;
    for(let elem in arr) {
        if (arr[elem] > max_number) max_number = arr[elem];
    }
    return max_number;
}
 let avg = function(arr) {
    if (arr === undefined) return 0; 
    avg_number = 0;
    for(let elem in arr) {
        avg_number += arr[elem];
    }
    if (arr.length > 0) return avg_number/arr.length; 
    else return avg_number;
}
module.exports.min = min;
module.exports.max = max;
module.exports.avg = avg;

console.log(avg());
