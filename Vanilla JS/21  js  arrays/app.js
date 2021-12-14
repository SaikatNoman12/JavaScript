

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

console.log(r);     // return [q , e , f , [10 , 20 , 30] , {name:"ali" , class:10}]. JavaScript supports arrays, objects and various types of data within arrays.













