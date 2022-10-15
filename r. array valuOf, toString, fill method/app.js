/* ==== JavaScript Array toSting(), valueOf(), fill() method ==== */


// use array toString() method:------
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr1ConvertString = arr1.toString();

console.log(arr1ConvertString);


// use array valueOf() method:------
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2Value = arr2.valueOf();

console.log(arr2Value);


// use array fill() method:------
const arr3 = ['a', 'b', 'c', 'd'];
arr3.fill('changeValue');

console.log(arr3);
