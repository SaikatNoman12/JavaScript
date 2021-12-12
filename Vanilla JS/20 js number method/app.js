
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


let num1 = 96560000000000;      // 6560000000000 = 13 crecter. Integer value.

let num2 = 9.650400;          // 656 = 3 carecter. float value.

/* integer number */
console.log(num1.toExponential(2));     // return 9.66e+13 . Data type string. When the number is integer.

console.log(num1.toExponential(4));     // return 9.6560e+13 . Data type string. When the number is integer.

console.log(num1.toExponential(6));     // return 9.656000e+13 . Data type string. When the number is integer.

console.log(typeof (num1.toExponential()));    // return 9.656e+13 . Data type string. When the number is integer.

/* float number */
console.log(num2.toExponential(3));     // return 9.650e+0 . Data type string. When the number is float.

console.log(num2.toExponential(6));     // return 9.650400e+0 . Data type string. When the number is float.

console.log(num2.toExponential());      // return 9.6504e+0 . Data type string. When the number is float.




// .toFixed() method:====
console.log(".toFixed() method:");

let num3 = 9.656;       // float number. Data type number

let num4 = 9656000;     // integer number. Data type number

/* float number */
console.log(num3.toFixed(0));   // return 10. Data type string. 10 value is a integer base number.

console.log(num3.toFixed(3));   // return 9.656 . Data type string.

console.log(num3.toFixed(6));   // return 9.656000 . Data type string

console.log(num3.toFixed());    // return 9.656 . Data tyoe string.

/* integer number */
console.log(num4.toFixed(3));   // return 9656000.000 . Data type string.

console.log(num4.toFixed());    // return 96565000 . Data type string.




// .toPrecision() method:====
console.log(".toPrecision() method:");

let num5 = 9.567;       // float number. Data type number

let num6 = 9567;        // integer number. Data type number.

/* float number */
console.log(num5.toPrecision());        // return 9.567 . Data type string.

console.log(num5.toPrecision(2));       // return 9.5 . Data type string.

console.log(num5.toPrecision(6));       // return 9.56700 . Data type string.

console.log( typeof (num5.toPrecision(2)));       // Data type string.

/* integer number */
console.log(num6.toPrecision());        // return 9567 . Data type srting.

console.log(num6.toPrecision(2));        // return 9.6e+3 , Data type string.

console.log(num6.toPrecision(6));        // return 9567.00 . Data type number.

console.log( typeof (num6.toPrecision(2)));       // Data type string.




// js .toString() Number method:====
console.log(".valueOf() number method:");

let num7 = 123;            // data type number. literals value.
let num8 = 100 + 23;       // data type number. espression value.
let num9 = x.valueOf();   //data type string. variable value.

console.log((num7.valueOf()) );  //return 123. data type number. variable value.

console.log(typeof (num8.valueOf()) );  //return 123. data type number. espression value.

console.log(typeof num9)      //return 123. data type number. variable value.

console.log((123).valueOf()); // return 123. data type number. literals value.




// converting variables to number:====
console.log("converting variables to number:");

/* i. Number() method */
/* ii. parseInt() method */
/* iii. parseFloat() method */




// Number() method:====
console.log("Number() method");

let num10 = 10;

console.log(num10);     // return 10. Data Type number

console.log(Number("100"));     // return 100. Data type number.

console.log(Number("   100   "))    // return 100. Data type number.

console.log(Number(200 , 100));      // return 200 . Data type number.

console.log(Number("300 100"));      // return NaN . Data type number.

console.log(Number("100 , 100"));      // return NaN . Data type number.

console.log(Number("noman"));       // return NaN. Data type number.

console.log(Number(true));      // retrun 1 . Because true is a boolean operator.

console.log(Number(false));     // return 0 . Becuse false is a boolean operator.

/* date */
let num11 = Number(new Date("2021-12-12"));     // Data type object.
console.log(num11);     // return 1639267200000 mili second . Data type object.

let num12 = Number(Date("2021-12-12"));     // Data type object.
console.log(num12);     // return NaN . Data type object.






// The parseInt() method:====
console.log("parseInt() method:");

let num13 = 10;

console.log(parseInt(num13));    // return 10. Data type number.

console.log(parseInt(20.33));    // return 20. Data type number.

console.log(parseInt("60.999"));  // return 60. Data type number.  

console.log(parseInt("20.33 , 30 , 10"));    // return 20. Data type number.

console.log(parseInt(20.33 , 30 , 10));    // return 30*2 = 60. Data type number.

console.log(parseInt(20.33 , 40 , 10));    // return NaN. Data type number.

console.log(parseInt("40.33  30  10"));    // return 40. Data type number.

console.log(parseInt("20.33 years"));    // return 20. Data type number.

console.log(parseInt("years 30.36"));    // return NaN. Data type number.

console.log(parseInt("years"));    // return NaN. Data type number.

console.log(parseInt("true"));    // return NaN. Data type number.

console.log(parseInt("false"));    // return NaN. Data type number.






// The parseFloat() method:====
console.log("parseFloat() method:");

let num14 = 20.123;

console.log(parseFloat(num14));    // return 20.123 . Data type number.

console.log(parseFloat(20.33));    // return 20.33 . Data type number.

console.log(parseFloat("40"));  // return 40 . Data type number.

console.log(parseFloat("60.999"));  // return 60.999 . Data type number.  

console.log(parseFloat("20.33 , 30 , 10"));    // return 20.33 . Data type number.

console.log(parseFloat(20.34 , 30 , 10));    // return 20.34 . Data type number.

console.log(parseFloat(20.35 , 40 , 10));    // return 20.35 . Data type number.

console.log(parseFloat("40.33  30  10"));    // return 40.33 . Data type number.

console.log(parseFloat("20.33 years"));    // return 20.33 . Data type number.

console.log(parseFloat("years 30.36"));    // return NaN. Data type number.

console.log(parseFloat("years"));    // return NaN. Data type number.

console.log(parseFloat("true"));    // return NaN. Data type number.

console.log(parseFloat("false"));    // return NaN. Data type number.

console.log(parseFloat(600));       // return 600. Data type number.

console.log(parseFloat("700"));     // return 700. Data type.

console.log(parseFloat("700e5"));     // return 70000000. Data type number.

console.log(parseFloat("700e-5"));     // return 0.007. Data type number.




// Number Propertise:====
console.log("Number Propertise:");

/*
1. MAX_VALUE        Returns the largest number possible in JavaScript

2. MIN_VALUE        Returns the smallest number possible in JavaScript      

3. POSITIVE_INIFINITY      Represents infinity (returned on overflow)

4.NEGATIVE_INIFINITY       Represents negative infinity (returned on overflow)

5. NaN          Represents a "Not-a-Number" value
*/


// MAX_VALUE:====
console.log("MAX_VALUE:");

let num16 = Number.MAX_VALUE;

console.log(num16);         // return 1.7976931348623157e . Data type number.
console.log(typeof num16);         // return 1.7976931348623157e . Data type number.


// MIN_VALUE:====
console.log("MIN_VALUE:");

let num17 = Number.MIN_VALUE;

console.log(num17);         // return 1.7976931348623157e . Data type number.
console.log(typeof num17);         // return 1.7976931348623157e . Data type number.



// POSITIVE_INFINITY:====
console.log("POSITIVE_INFINITY:");

let num18 = Number.POSITIVE_INFINITY;

let num19 = 1/0;

console.log(num18);         // return Infinity . Data type number.
console.log(typeof num18);         // return Infinity. Data type number.

console.log(num19);         // return Infinity.Data type number.


// POSITIVE_INFINITY:====
console.log("NEGATIVE_INFINITY:");

let num20 = Number.NEGATIVE_INFINITY;

let num21 = -1/0;       

console.log(num20);         // return -Infinity . Data type number.
console.log(typeof num20);         // return -Infinity. Data type number.

console.log(num21);         // return -Infinity.Data type number.


// NaN number:====
console.log("NEGATIVE_INFINITY:");

let num22 = Number.NaN;

let num23 = "noman"/0;       

console.log(num22);         // return NaN . Data type number.
console.log(typeof num22);         // return NaN . Data type number.

console.log(num23);         // return NaN .Data type number.




// Number Property Can Not Used On Variables:====
console.log("Number Property Can Not Used On Variables:");

let num24 = 100;

console.log(x.MAX_VALUE);       // return undefined. data type undefined.

console.log(x.MIN_VALUE);       // return undefined. data type undefined.

console.log(x.POSITIVE_INFINITY);       // return undefined. data type undefined.

console.log(x.NEGATIVE_INFINITY);       // return undefined. data type undefined.

console.log(x.NaN);       // return undefined. data type undefined.













