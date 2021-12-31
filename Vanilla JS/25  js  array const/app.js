

// js array const
console.log("js array const")

/*
---- topic ----
const(13), const variable can not be ressigend(33), Array can not const(47),
const variable value must be assigned(74), Const Block Scope(89).

*/

// const:
console.log("js const:");

const q = ['noman', 'nadim', 'rahim'];      //  Write array always use const variable.

console.log(q);     // return ['noman', 'nadim', 'rahim'] this array. Write array always use const variable.

/*
The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
*/




// const variable can not be ressigend:
console.log("const variable can not be ressigned:");

const w = [10, 40, 2000, 30];


let w = ["noman", "nadim", "mahin", "rakib"]   // return error. not allowed.

var w = ["radit", "kaopila", "sonia"];  //return error. not allowed.





// Array can not const:
console.log("array can not const");

const e = ["noma", "nadim", "rahim", "karim"];

e[2] = "Cuna";      // change the element in index number 2

e.push("pothe-pothe");      // add last element

console.log(e);         // return ['noma', 'nadim', 'Cuna', 'karim', 'pothe-pothe']. Arrays can not be const.

/*
It does not define a constant value. It defines a constant reference to a value.

---Because of this you can NOT:
=====Reassign a constant value.
=====Reassign a constant array.
=====Reassign a constant object.

---But you CAN:
=====Change the elements of constant array.
=====Change the properties of constant object.
*/




// const variable value must be assigned:
console.log("const variaable value must be assigned:");

// correct const variavle. and return corect value.

const r = "nahian";     // allowed. Correct const variable.

// incorrect const variable.

const t;        // not allowed. Incorrect const variable. return error.
t = "mehedi-rayhan";




// Const Block Scope:
console.log("const block scope:");

// global scope variable.
const y = ["nadim", "karina", "sila"];      // correct. because this is global scope.
console.log(y);     // return   ["nadim", "karina", "sila"]. this is global scope variable.

// block scope variable.
{       // block scope variable.
    const y = ["nokib", "rakib", "fahim"];      // correct. because this is block scope. 
    console.log(y);     // return   ['nokib', 'rakib', 'fahim']. this is block scope variable.
}

/*note: an array declared with var dose not have block scope.*/ 





















