//Given a list of numbers and a number k, return whether any two numbers from the list add up to k
var inputList = [10,15,3,7];
var sumCompare = 17;
for (var i = 0; i <= inputList.length - 1; i++) {
 for (var j = 0; j <= inputList.length - 1; j++) {
  if (inputList[j] !== inputList[i]) {
   if (inputList[i] + inputList[j] == sumCompare) {
    console.log(inputList[i]," + ",inputList[j]," = ",inputList[i]+inputList[j]);
   }
  }
 }
}
