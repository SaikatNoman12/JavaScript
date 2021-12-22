

// js array sort:====
console.log("js array short:");


// number alphabetically align use sort() method=
let x = [1, 4, 5, 9, 3, 2, 6, 8, 7];        // number type data.

console.log(x.sort());      // return [1, 2, 3, 4, 5, 6, 7, 8, 9]. The sort() method sorts an array numberly.


// letter align use sort() method=
let y = ["a", "c", "e", "f", "b", "d"];     // string type data.

y.sort();   // Called sort() method.

console.log(y);      // return ['a', 'b', 'c', 'd', 'e', 'f']. The sort() method sorts an array alphabetically. 




// reverse() method:====
console.log("reverse() method:");


// use number alphabetically in reverse() method=
let a = [2, 4, 5, 6, 1, 3 ,100];

a.sort();       // align number serialy. [1, 100, 2, 3, 4, 5, 6]

console.log(a.reverse());       // return [6, 5, 4, 3, 2, 100, 1] number element reverse serialy.


// use letter in revrse() method
let b = ["a", "c", "e", "f", "b", "d"];  // string type data.

b.sort();       // align letter serialy. ['a', 'b', 'c', 'd', 'e', 'f'].    

b.reverse();        // reverse() letter element reversely show in O/P.

console.log(b);     // return ['f', 'e', 'd', 'c', 'b', 'a']. use reverse(method)




// Numaric sort:====


// Numaric number strign align sort method=
let q = ["100", "20", "10","30", "400", "700"];

q.sort();       // number strign sort() method align serialy.

console.log(q);     // return ['10', '100', '20', '30', '400', '700']. data type object. 


// sort() method in use compare function=
console.log("sort() method in use complex function=");


// show lower to heighr number. uses conditon a - b= 
let w = [100, 2, 1, 7, 40, 20, 800, 1000];

w.sort(function(a, b){
    return a - b;           // use sort method in complex function. print lower to higher number. return a - b means lower to heighr number.
});

// [100(a) - 2(b) = 98 = positive]. positive menas true. true menas (a > b). Then [100(a) - 800(b) = -700 = negative]. negative means false. false means (a < b).

console.log(w);      // return [1, 2, 7, 20, 40, 100, 800, 1000]. data type object


// show heigher to lower number. uses condtion b - a=
let e = ["100", "2", "1", "7", "40", "20", "800", "1000"];

e.sort(function(a, b){
    return b - a;           // use sort method in complex function. print higher to lower number. return b - a menas heighr to lower number.        
});

// [2(b) - 100(a) = -98 = negative]. Negative means false. (a < b). Then [800(b) - 100(a) = 700 = positive]. Positive means true. True means (a > b).

console.log(e);        // return  ['1000', '800', '100', '40', '20', '7', '2', '1']. return b - a means reverse.




// sort() method use math.random() function:====
console.log("sort() method use math.random() function:");

let r = [20, 50 , 4, 30, 2, 10];

r.sort(function(a,b){
    return 0.5 - Math.random();         // math.random() means 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 .
})

console.log(r);     // return [20, 50 , 4, 30, 2, 10] 1st reload. [20, 50 , 4, 30, 2, 10]. 2nd reload [20, 50, 4, 2, 30, 10]. In this way, arrays number will change with each reload.




// Find the Highest (or Lowest) Array Value:====
console.log("Find the Highest (or Lowest) Array Value:");




// sorting ascending (lowest to highest number=)
console.log("lowest to highest");

let t = [3, 4, 1, 7, 30, 10];

t.sort(function(a, b){
    return a - b;       // lowest to highest number. this condition you use to return lowest to highest number.
})

console.log(t);     // return [1, 3, 4, 7, 10, 30]. lowest to highest number.



/* only lowest number in this array */
console.log("lowest number is =", t[0]);      // return lowest number = 1


/* only highest number in this array */
console.log("highest number is =", t[t.length - 1]);      // return highest number is = 30




// sorting descending (highest to lowest number=)
console.log("sorting descending (highest to lowest number=");

let o = [30, 10, 100, 50, 40];

o.sort(function(a, b){
    return b - a;       //lowest to highest number. this condition you use to return highest to lowest number.
})

console.log(o);     // return [100, 50, 40, 30, 10]. highest to lowest. 



/* only lowest number in this array */
console.log("lowest number is = ", o[o.length - 1]);    // return the lowest number is = 10


/* only hightest number in this array */
console.log( "highest number is = ", o[0]);     // return hightest number is = 100




// Using Math.max.apply() method on an Array:====
console.log("Using Math.max() on an Array:");

let p = [1, 5, 7, 3, 20, 10];

function nameHere(arr){
    return Math.max.apply(null, arr);           // You can use Math.max.apply to find the highest number in an array.
};

console.log(nameHere(p));       // return 20. The highest number is 20.  Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).


// It can also be used in this way.

console.log(Math.max.apply(null, p));       // return 20. The highest number is 20. 




//  using Math.min.apply() method an array:====
console.log("using Math.min.apply() methos an array:");

let d = [5, 7, 8, 1, 9, 2];

function minHere(arry){
    return Math.min.apply(null, arry);
};

console.log(minHere(d));        // return 1. The lowest number is 1. Mathmin.apply(null , [1, 2, 3]) is equivalent  to Math.min(1, 2, 3).


// It can also be used in this way.
console.log(Math.min.apply(null, d));       // return 1. The lowest number is 1




// My Max/Min JavaScript Method:====
console.log("My Max/Min JavaScript method:");


// max:=
console.log("Max");                 // working


// min:=
console.log("Min");                 // working




// Sorting Object arrays:====
console.log("sorting object arrys:");

let g = [
    {name:"noman", year:2002},
    {name:"nahid", year:2017},
    {name:"rakib", year:2012},          // this is oject arrays.
    {name:"kabir", year:2005},
    {name:"sokina", year:2009}
];

/* use sort method. */
g.sort(function(a, b){
    return a.year - b.year;     // sort() method use an object year property.
});

console.log(g);        
/*
return=
0: {name: 'noman', year: 2002}
1: {name: 'kabir', year: 2005}
2: {name: 'sokina', year: 2009}         //    you can sorting an object arrays. 
3: {name: 'rakib', year: 2012}
4: {name: 'nahid', year: 2017}
*/




// Comparing string properties is a little more complex:====
console.log("Comparing string properties is a little more complex:");


let cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

cars.sort(function(a, b){

    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();

    if (x < y) {return -1;}         // (x < y) it is codition in if. It's return -1.
    if (x > y) {return 1;}          // (x > y) it is condition in if. It;s retrun 1.
    return 0;
  
});

console.log(cars);
/* return
0: {type: 'BMW', year: 2010}
1: {type: 'Saab', year: 2001}       // length 3.
2: {type: 'Volvo', year: 2016}
*/








