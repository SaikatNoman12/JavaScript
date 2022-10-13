

/* 
----Topic----:
forEach(), map(), filter(), reduce(), reduceRight(),
every(), some(), indexOf(), lastIndexOf(), includes(),
find(), findIndex(), Array.from(), keys() method.
*/


// js array iteration
console.log("js array iteration");


// forEach() method:====
console.log("forEach()");

let q = ['nom', 'mahedi', 'rahim', 'feni'];

q.forEach(myFunction);     //  called forEach() method. And call myfunction name.

function myFunction(value , index, array){
    console.log(index);         // return array index number. data type number
    console.log(value);         // return a list  nom mahedi rahim feni . data type string.
    console.log(array);         // return array. data tyoe object
    console.log("----------");
};
/*  return 

0       // value of index. data type number.
nom     //array of value. data type sthing.
(4) ['nom', 'mahedi', 'rahim', 'feni']       // array. data type object.
----------

1        //array of index. data type number.
mahedi   // array of value. data type string.
(4) ['nom', 'mahedi', 'rahim', 'feni']       // array. data type object.
----------

2       // value of index. data type number.
rahim   // array of value. data type string.
(4) ['nom', 'mahedi', 'rahim', 'feni']       // array. data type object.
----------

3       // value of index. data type number.
feni    // array of value. data type string.
(4) ['nom', 'mahedi', 'rahim', 'feni']       // array. data type object.

*/




//Array.map() method:
console.log("Array.map() method:");

// type - 1
let w = [10, 20 , 30, 40];

function Noman(value){
    return value * 4;
};
const e = w.map(Noman);     // Noman is a function name.

console.log(e);         // return [40, 80, 120, 160]. data type object. 

// type - 2
let r = [100, 30, 10, 40];

function rubi(value, index, array){
    console.log(value * 2);
    console.log(index);
    console.log(array);
    console.log("========");
};

r.map(rubi);        // map() method call rubi function.

/* return  value , index, array

200     == value
0       == index number
(4) [100, 30, 10, 40]   == array
========
60
1
(4) [100, 30, 10, 40]
========
20
2
(4) [100, 30, 10, 40]
========
80
3
(4) [100, 30, 10, 40]
========e

*/




// Array.filter() method:
console.log("Array.filter() method:");

// type - 1:
let t = [20, 30, 40, 50, 60];

function molla(value, index, array){
    return value > 30;        // it's means 2 grater than index all index number.
};
let y = t.filter(molla);

console.log(y);     // return [40, 50, 60].


// type - 2:
let u = [20, 30, 40, 70];

function kalia(value, index, array){
    console.log("======")
    console.log(value > 30);    // return  false.
    console.log(index < 2);    // return true.
    console.log(array);         // return [20, 30, 40, 70].
};

u.filter(kalia);        // filter() method called kaila function.

/* return  value, index, array

======
false   === value. return false. because 20 less than 30.
true    === index. return true. because 0 number index less than 2.
(4) [20, 30, 40, 70]

======
false   === value. return false. because 30 less than 30.
true    === index. return true. becuse 1 number index less than 2.
(4) [20, 30, 40, 70]    === array.

======
true    === value. return true. because 40 grater than 30.
false   === index. return false. becuse 2 number index grater than 2.
(4) [20, 30, 40, 70]   === array.

======
true    === value. return true. because 20 grater than 30.
false   === index. return false. becuse 3 number index greter than 2
(4) [20, 30, 40, 70]    === array.

*/




// Array.reduce() method:
console.log("Array.reduce() method:");

// type - 1: when the initial value is 0. Because I did not say the initial value of this array.
console.log("type - 1");

let o = [20, 30 , 40, 70];

function kafahi(total, value, index, array){
    return total + value;
};

const a = o.reduce(kafahi);     // reduce() method called a function kafahi.

console.log(a);     // return total array value 160


// type - 2: when the initial value is 0 Because I did not say the initial value of this array.
console.log("type - 2")

let p = [20, 30 , 40, 70];

function mahi(total, value, index, array){
    console.log(total);     // total means (20 + 0 = 20), (20 + 30 = 50), (50 + 40 = 90).
    console.log("------")
    return total + value;
};

p.reduce(mahi);     // reduce() method called a function mahi. initial value 0. Because I did not say the initial value of this array.

/* return reduce value.
20      === 20 + 0 = 20
------
50      === 20 + 30 = 50
------
90      === 50 + 40 = 90

*/


// type - 3. use initial value.
console.log("Type - 3. Use initial value");

let d = [20, 30, 50, 70];

function nadim(total, value, index, array){
    console.log(total);     // return total value in array
    console.log("=====");
    return total + value; 
};

const f = d.reduce(nadim, 100);       // initial value is 100. 100 summation all array element.

console.log("noman" , f);       // return total array element value (20 + 30 + 50 + 70) + 100 = 270.  100 is a initial value.

/* return reduce value

100     ===100 initial value. 
=====
120     ===100 + 20 = 120. initial value 100 + array 1st element 20.
=====
150     ===100 + 20 + 30 = 150. initial value 100 + array 1st element 20 + array 2nd element 30.
=====
200     ===100 + 20 + 30 + 50 = 200. initial value 100 + array 1st element 20 + array 2nd element 30 + array 3rd element 50.
=====

*/


// type - 4. only total value return.
console.log("type - 4. return total value")

let g = [20, 30, 50];

function rahim(total, value, index, array){
    return total + value;
}; 

const l = g.reduce(rahim, 100);

console.log(l);    // return total array value 200.




// Array.reduceRight() method:
console.log("array.rediceRight() method:");

// type -1. i use not a initial value
console.log("type - 1. I use not a initial value");

let b = [10 , 20, 30, 40];
function nirob(total, value, index, array){
          console.log(total);
     return total + value;
}

b.reduceRight(nirob);       // called function. in reduceRight() method perametter.

/* return reduce value

40  === 40 +  0 = 40 . Because I did not say the initial value of this array. It's initial value is 0.
70  === 40 + 30 = 70.
90  === 70 + 20 = 90.

*/


// type - 2. I use a initial value in array.reduceRight() method.
console.log("type - 2. use intial value");

let m = [20, 60, 40];

function karim(total, value, index, array){
    return total + value;
}

const n = m.reduceRight(karim, 100);

console.log(n);         // return 220. reduceRight() method the statement execute the right array element. (40 + 60 + 20) + 100 = 200. 




// Array.every() method:
console.log("Array.every() method:");

let num = [20, 30, 40, 70];     // this is array.


function kaki(value, index, array){
    return value > 10;
}

const numbers = num.every(kaki);        // every() method perametter call function name.
console.log(numbers);       // retrun true. becuse. arrays all elemment grater than 10.



function papi(value, index, array){
    return value > 40;
}

const numbersNum = num.every(papi);        // every() method perametter call function name.
console.log(numbersNum);        // return false. Arrays all element gratter than 40. but 20 , 30 & 40 element less than 40. So here is the false return.




// Array.some() method:
console.log("Array some method");

let a_ = [20, 30, 40, 50];


function sabiha(value, index, array){
    return value > 30;      // codition.
};

const s_ = a_.some(sabiha);         // every() method perametter call function name.
console.log(s_);        // return true. In this case any element grater than 30 will return true.




// Array.indexOf() method:
console.log("Array.indexOf() method:");

let q_ = ["nadim", "mahin", "karim", "kalia"];

let e_ = q_.indexOf("mahin");

console.log(e_);        // return 1. because arrays index number 1 is mahin. this method show the index number i array element.




// Array.lastIndexOf() method:
console.log("Array.lastIndexOf() method:");

let r_ = ["nadim", "rayhan", "korim", "rahi", "rayhan"];

let t_ = r_.lastIndexOf("rayhan");      // search index number.

console.log(t_);        // return 4 . lastIndexOf() method always return 2nd element index number.




// Array.includes() method:
console.log("Array.includes() method");

let y_ = ["nadim", "rahim", "karim", "sonia"];

let x_ = y_.includes("rahim");

console.log(x_);        // return true. because rahim in this array.

console.log(y_.includes("nabil"));        // return false. because rahim do not in this array.




// Array.find() method:
console.log("Array.find() method");

let g_ = [10, 30, 40, 50, 60];

function nahian(value, index, array){
    return value > 40;
};

const h_ = g_.find(nahian);

console.log(h_);        // return 50. because first big element is 50 .




// Array.findIndex() method:
console.log("Array.findIndex() method");

let d_ = [1, 2, 3, 4, 5, 6]

function jabin(value, index, array){
    return value > 3;
};

let _h_ = d_.findIndex(jabin);

console.log(_h_);        // return 3. because element 4 index number is 3




// Array.from() method:
console.log("Array.form() method");

let l_ = "ABCDEF";

let p_ = Array.from(l_);        // It's variable called a perametter.

console.log(p_);        // return ['A', 'B', 'C', 'D', 'E', 'F']. It's make a array.

console.log(Array.from("klmnop"));      // return ['k', 'l', 'm', 'n', 'o', 'p']. It's make a array.




// Array.keys() method:
/* The Array.keys() method returns an Array Iterator object with the keys of an array. */
console.log("Array.keys() method");

let c_ = ["nadim", "mahin", "rahim", "karim"];

let b_ = c_.keys();  

console.log(b_);        // return Array Iterator {}. The Array.keys() method returns an Array Iterator object with the keys of an array.

// working Array.keys() method.















