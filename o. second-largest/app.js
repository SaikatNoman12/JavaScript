const numArr = [1002, 1000, 4000, 400, 2000, 505, 493];

// System one: find second largest. ;
let s = 0;
let l = 0;

for (let i = 0; i < numArr.length; i++) {

    if (numArr[i] > l) {
        s = l;
        l = numArr[i];
    }
    else if ((numArr[i] > s) && (numArr[i] < l)) {
        s = numArr[i];
    }

}
console.log(s);


//  System two: find second largest number.;
numArr.sort((a, b) => {
    return a - b;
})
const secondLargest = numArr.at(-2);
console.log(secondLargest);  // output: 2000;



// find second largest all same strings in an array;
const names = ['Rahima', 'Faruki', 'Karim Ullah', 'Karim', 'Fahim', 'Kariam'];


let secLongName = '';
let longName = '';

let secondNamesArr = [];

for (let i = 0; i < names.length; i++) {

    if (names[i].length > longName.length) {
        secLongName = longName;
        longName = names[i];
        secondNamesArr.push(secLongName); // push secLongName;
    }
    if ((names[i].length >= secLongName.length) && (names[i].length < longName.length)) {
        secLongName = names[i];
        secondNamesArr.push(secLongName); // push secLongName; 
    }

}


// store all secondLargest same string. In an secondLargestNames array;
const secondLargestNames = [];

for (let i = 0; i < secondNamesArr.length; i++) {
    if (secondNamesArr[i].length >= secLongName.length) {
        secondLargestNames.push(secondNamesArr[i]);
    }
}

console.log(secondLargestNames);  // output: ['Rahima', 'Karima']


// sorting array and find second largest string;
names.sort((a, b) => {
    return a.length - b.length;
})

console.log(names.at(-2));