

// js arrays



// what is array:====
console.log("Js Arrays:");

let x = ["Noman" , "Mahadee" , "Hasnat" , "Mahir"];     //data type object.

let y = x[2];       

console.log(x)      // return ["Noman" , "Mahadee" , "Hasnat" , "Mahir"]. data type object.
console.log(typeof x)      // data type object.

console.log(y);             // return Hasnat. Data type object.
console.log(typeof y);      // Data type object.

// Creating an Array:====
console.log("Creating an Array:");

// 1st type=
let car = [
    'noman',
    'mahadee',                   // Thus type you can write an array.
    'rakib',
    'rayhan'
]

console.log(car);       // return ['noman','mahadde','rakib','rayhan'] . data type object.


// 2nd type=
let cars = [];      // blank array.

cars[0] = 'Amin';       // balnk arry value store.
cars[1] = 'Rahim';      // balnk arry value store.
cars[2] = 'Karim';      // balnk arry value store.
cars[3] = 'Alia';       // balnk arry value store.

console.log(cars);      // return ['Amin', 'Rahim', 'Karim', 'Alia'] . data type object




// Using the JavaScript Keyword new:====
console.log("Using the JavaScript Keyword new:");

let a = new Array('mahi', 'nadim', 'asiq', 'jishan');

console.log(a);     // return ['mahi', 'nadim', 'asiq', 'jishan']. data type object.




// Accessing Array Elements:====
console.log("Accessing Array Elements:");

let b = ['noman', 'mahadee', 'nadim', 'rahim'];

console.log(b[2]);      // return 'nadim'. because index number 2 is nadim. data type string.




// Changing an array element:====
console.log("Chnagin an array element:");

let d_ = ['noman', 'mahadee', 'rahim', 'naim', 'BMW', 'karim'];

d_[1] = 'change';    // chnage this element. chnage 1 index number element.

console.log(d_);     // return ['noman', 'change', 'rahim', 'naim', 'BMW', 'karim']. data type object.




// Access the Full Array:====
console.log("Access the Full Array:");

let a_ = ['noman', 'mahi', 'nadim', 'riodom'];

console.log(a_);        // return ['noman', 'mahi', 'nadim', 'riodom']. data type object.




// Arrays are Object:====
console.log("Arrays are Object:");


// array access=
let b_ = ['noman', 'mahadee', 'nirov', 'rakin'];

console.log(b_);        // return ['noman', 'mahadee', 'nirov', 'rakin']. data type object.

console.log(b_[2]);         // return nirov. data type string


// object access=
let x_ = {name:"abdullah" , lastname:"Al Nomaan"};

let y_ = x_["name"];    // first type of object value access

let _z = x_.lastname;   // second type of object value access.

console.log(_z);        // return Al Nomaan. data type string.

console.log(y_);        // return Abdullah. data type string.




// Array element can be object:====
console.log("Array element can be object:");

let q = "noman";    // data type string.

let e = 10000;      // data type number

let r = [q , e , [10 , 20 , 30] , {name:"ali" , class:10}];

console.log(r);     // return [q , e , f , [10 , 20 , 30] , {name:"ali" , class:10}]. JavaScript supports arrays, objects, functions and various types of data within arrays.




// Array propertise and method:====
console.log("Array propertise and method:");

let t = ['noman', 'mahadee', 'rakib', 'muhit'];

// propertise
let q_ = t.length;      // length is a propertise. 

console.log(q_);        // return 4.  data ype number

// method
let w_ = t.sort();      // sort() is a method. Decorate the elements in the array with alpavet shape.

console.log(w_);    // return ['mahadee', 'muhit', 'noman', 'rakib']. Data type object.




// Accesing the last array element:====
console.log("Accesing the last array element:");

let u = ['mabi', 'rahi', 'kari', 'jubayer'];

let p = u[u.length - 1];    // In this way accesing the last array element.

console.log(p)      // retunr jubayer. data type string.




// Looping Array Elements:====
console.log("Looping Array Elements:");

let fruit = ['Banna', 'Apple', 'Pinaapple', 'jackfruiit'];  // this is array.

let con = fruit.length;        // loop condition


// loop
for( a = 0; a < con; a++){

    console.log(a)      // return index number. data type number.

    console.log( fruit[a]);      // return arrays element list. data type string

};

/*
1. a = 0 means the loop starts in 0 number element in this array. 
2.  a means arrays index.
3. a < con means condition.
4.  a++ means 0+1 ,1+1,2+1 .....etc. end last number index. 
5. fruit[a] means index element. 
*/




let text = '<ul>';      // ul start tag.


// loop
for(i = 0; i < con; i++){
    text += "<li>" + i + fruit[i] + "</li>";
};

text += "</ul>";    // ul close tag.

document.getElementById('demo').innerHTML = text;       // return un order list .data type string.

/*
1. i = 0 means the loop starts in 0 number element in this array. 
2. i means arrays index.
3. i < con means condition.
4. i++ means 0+1 ,1+1,2+1 .....etc. end last number index. 
5. fruit[i] means index element. 
*/




// using forEach() method. forEach() use for all arrays in this type.=

let t_ = ['nom', 'mahedi', 'rahim', 'feni'];

t_.forEach(myFunction);     //  called forEach() method.

function myFunction(value){
    console.log(value);         // return a list nom mahedi rahim feni. data type string.
};




// Adding Array Elements:====
console.log("Adding Array Elements:");


// use push() method and add new array elements=
let h = ['noman', 'rahim', 'karim'];

h.push("ADDTheNewString");      // push() method added new element in array.
 
console.log(h);     // rerurn ['noman', 'rahim', 'karim', 'ADDTheNewString']. data type object.


// use length property and add new array elements=
let p_ = ['noman', 'mahi', 'rahim', 'muhit'];

p_[p_.length] = "nadim";    // length property added new element in array.

console.log(p_);    // return ['noman', 'mahi', 'rahim', 'muhit', 'nadim']. data type object.


// undefined element=
let j = ['noma', 'rahim', 'iraz'];

j[4] = "mahin";     // added mahin. 4 number index in array.

console.log(j) ;     // return ['noma', 'rahim', 'iraz', empty, 'mahin']. data type object.

console.log(j[3]);      // rerturn undefined. data type undefined.




// Associative Arrays:====
console.log("Associative Arrays:");

let ff = [];        // blank array.

ff["First name"] = "Abdullah Al Nomman";

ff["Age"] = 32;

ff["Country"] = "Bangladesh";

console.log(ff);        // return [First name: 'Abdullah Al Nomman', Age: 32, Country: 'Bangladesh'] . but this is a object. data type object. and length 0.

console.log(ff.length);     // return length 0. If you writing an element in a blank array, You must use index number.




// The Difference Between Arrays and Objects:====
console.log("The Difference Between Arrays and Objects:");

// 1. In JavaScript, arrays use numbered indexes.  

// 2. In JavaScript, objects use named indexes.




// When to Use Arrays. When to use Objects:====
console.log("When to Use Arrays. When to use Objects:");

// 1. JavaScript does not support Associative arrays.

// 2. You should use objects when you want the element names to be Strings (text).

// 3. You should use arrays when you want the element names to be Numbers.




// JavaScript new Array():====
console.log("JavaScript new Array():");

let L = [1, 2, 3, 4];       // open syntax. All time use the open syntax array.

let l_ = new Array(1, 2, 3, 4);     // new keyword array. Avoid this array.

console.log(l_);        // return [1, 2, 3, 4]. length 4. Data type object. Js excepted this array. But avoid this array


let r_ = new Array(40);     // avoid this array.

console.log(r_)     // return [empty × 40]. Arrays empty means Undefined. Unexcepted array. Length 40. Data type object. Avoid this array.




// Js how to Recognize an Array:====
console.log("How to Recognize an array:");


// Solution - 1=
let g = [1, 2, 3, 4, 5];    // this is an array. but data type object.

console.log(Array.isArray(g));     // return true. this is a array.


let s_ = {name:"noma", age:"20"};   // this is an object. data type object.

console.log(Array.isArray(s_));      // return false. this not an array.s


// solution - 2=
let u_ = [1, 3, 4, 6];

console.log(u_ instanceof Array);   // return true. this this is a array. instanceof is a operator.






 