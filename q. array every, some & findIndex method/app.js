/* ==== JavaScript some(), every() & findIndex() ==== */


// use some() method:-
const arr = [1, 2, 17, 70, 30, 40, 35];

const some = arr.some((element) => {
    return element >= 70;
})

console.log(some);  // return true. 


// use every() method:---------
const arr2 = [3, 4, 5, 6, 7, 8, 9, 10, 11];

const every = arr2.every(function (element) {
    return element >= 2;
});

console.log(every);   // return true; this is compare all element. then return true or false;


// use findIndex() method:
const arr3 = [20, 40, 65, 80, 100];

const findIndex = arr3.findIndex(element => {
    return element >= 60;
})

console.log(findIndex);  // return 2. Array 2 number index match findIndex() method condition. because array 65 element index number is 2.  