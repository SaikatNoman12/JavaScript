
// Js Number Method:====
console.log("Js Number Method:");



// js .toString() Number method:====
console.log(".toString() number method:");

let x = 123;            // data type number. literals value.
let y = 100 + 23;       // data type number. espression value.
let z = x.toString();   //data type string. variable value.

console.log(typeof (x.toString()) );  //return 123. data type string. variable value.

console.log(typeof (y.toString()) );  //return 123. data type string. espression value.

console.log(typeof z)      //return 123. data type string. variable value.

console.log((123).toString()); // return 123. data type string. literals value.




// js .toExponential() method:====
console.log(".toExponential() method:");


let num1 = 96560000000000;      // 6560000000000 = 13 crecter. integer value.

let num2 = 9.650400;          // 656 = 3 carecter. float value.

/* integer number */
console.log(num1.toExponential(2));     // return 9.66e+13 . data type string. when the number is integer.

console.log(num1.toExponential(4));     // return 9.6560e+13 . data type string. when the number is integer.

console.log(num1.toExponential(6));     // return 9.656000e+13 . data type string. when the number is integer.

console.log(typeof (num1.toExponential()));    // return 9.656e+13 . data type string. when the number is integer.

/* float number */
console.log(num2.toExponential(3));     // return 9.650e+0 . data type string. when the number is float.

console.log(num2.toExponential(6));     // return 9.650400e+0 . data type string. when the number is float.

console.log(num2.toExponential());      // return 9.650e+0 . data type string. when the number is float.




// .toFixed() method:====
console.log(".toFixed() method:");

let num3 = 9.656;       // float number. data type number

let num4 = 9656000;     // integer number. data type number

/* float number */
console.log(num3.toFixed(0));   // return 10. data type string. 10 value is a integer base number.

console.log(num3.toFixed(3));   // return 9.656 . data type string.

console.log(num3.toFixed(6));   // return 9.656000 . data type string

console.log(num3.toFixed());    // return 9.656 . data tyoe string.

/* integer number */
console.log(num4.toFixed(3));   // return 9656000.000 . data type string.

console.log(num4.toFixed());    // return 96565000 . data type string.




// .toPrecision() method:====
console.log(".toPrecision() method:");













