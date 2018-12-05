//Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
var input = [3, 4, -1, 1].sort();
var flag = false;
for (var x = 0; x <= input.length - 1; x++) {
    if (input.indexOf(input[x] + 1) === -1 && input[x] + 1 > 0) {
        console.log("Lowest number is:", input[x] + 1);
        flag = true;
        break;
    }
}
if(!flag){
    console.log("Lowest number is:", input[x] + 2);
}
