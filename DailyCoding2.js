//Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
var inputList = [3,2,1];
var outputList = []];
var prod = 1;
for (var x = 0; x <= inputList.length - 1; x++) {
    for (var j = 0; j <= inputList.length - 1; j++) {
        if (inputList[j] !== inputList[x]) {
            prod *= inputList[j]
        }
    }
    outputList.push(prod);
    prod = 1;
}
console.log(outputList);
