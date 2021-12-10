

// Number Data Type:====
// javaScript number are always 64 bit floating point.
console.log("Number Data Type:");


let a = 20;         // a number without decimals.

let b = 40.34;      // b number with decimals.

let c = 123e5;      // return 123*100000 = 12300000

let d = 123e-5;     // return 123/100000 = 0.00123

console.log(a , b , c , d);     // return a = 20 , b = 40.34 , c = 12300000 , d = 0.00123




// Integer Precision:====
console.log("Integer Precision:");


let e = 999999999999999;
console.log(e);       // return true number 999999999999999 . Js can read only 15 digit numbers.

let f = 999999999999999999;
console.log(f);       // return false number 10000000000000000 . js can't read up to 15 digit. 




// Floating Precision:====
console.log("Floating Precision:");


let g = 0.2;

let h = 0.1;

console.log(g + h);     // return false number 0.30000000000000004 . js always show the false number in concatenate floting / decimal data.

console.log((0.2*10 + 0.1*10) / 10);    // In this way return true number 0.3 .




// Adding Number & String:====
console.log("Adding Number & String:");


// added two number=
let i = 20 ;
let j = 30;
console.log(i + j);     // return 50. Data type number. It's called added two number.

// concatenation tow string= 
let k = "Noman ";
let l = "Saikat";
console.log(k + l);     // return Noman Saikat. Data type string. It's called concatenate two string.

// one string and one number concatenation=
let m = "Noman age :";
let n = 26;
console.log(m + n);     // return Noman age :26. Data type string. It's called string concatenation.

// fast string and second number concatenation=
let o = "Noman Abdullah ";
let p = 20;
let q = 10;
console.log(o + p + q);     //return Noman Abdullah 2010. Data Type string. It's called string concatenation.

// first number and second string concatenation=
let r = 20;
let t = 10;
let s = " Noman Abdullah";
console.log(r + t + s);   // return 30 Noman Abdullah. Data type string . It's Called string concatenation.




// Numaric String:====
console.log("Numaric String:");


let x = "30";

let y = "10";

console.log(x * y);     // return 300. Data Type Number. It's called numeric string. 

console.log(x - y);     // return 20. Data Type Number. It's called numeric string. 

console.log(x / y);     // return 3. Data Type Number. It's called numeric string. 




// NaN - Not a Number
console.log("Not a Number = NaN");


let ab = 400;   // number

let bc = "200"; // number string

let cd = "Abdullah";    // string

let de = NaN;    // NaN

// use number string & string
console.log(bc / cd);     // return NaN. Data Type Number.

// use number & string
console.log(ab * cd);     // return NaN. Data Type Number.

// use NaN & number string 
console.log(de * bc);     // return NaN. Data Type Number.

// use number & number string
console.log(ab / bc);     // return 2. Data Type Number.

// typeof NaN
console.log(typeof NaN)     // return number. Because NaN data type is number.




// Use isNaN() method:====
console.log("isNaN() Method:");


let num1 = 100;     // number

let num2 = "300";   // string number

let letter = "Abdul";   // string

console.log(isNaN(num1));   // return false. Because it is Number.

console.log(isNaN(num2));   // return false. Because it is Sring number.

console.log(isNaN(letter));    // return true. Because it is String.




// Infinity:====
console.log("Infinity:");

let num3 = 2;

let num4 = 0;

console.log(num3 / num4);           // return infinity. Data type number.




// Hexadecimal Number:====
console.log("Hexadecimal Number:");

let num5 = 0xff;        // this is hexadecimal number .because it's number started by 0x .

console.log(num5);       // return 0xff. data type number.




//  .toString() method:====
console.log(".toString() method:");

let num6 = 32;

console.log(num6.toString(10));     // return 32. Convert decimal number in this variable num6. Decimal number base = 10.
console.log(num6.toString(32));     // return decimal base number.

console.log(num6.toString(16));     // return 20. Convert hexadecimal number in this variable num6. Hexadecimal number base = 16

console.log(num6.toString(8));      // return 40. Convert octal number in this variable num6. Octal number base = 8

console.log(num6.toString(2));      // return 100000. Convert binary number in this variable num6. Binary number base = 2.




//  Number can be Object:====
console.log("Number can be object:");

let num7 = 12345;           // data type number.

let num8 = new Number(12345);   // data type object;

let num9 = new Number(12345);   // data type object;

console.log(num8);          // return {12345}; Data type object.

console.log(num7 == num8);      // return true . Because this value is number.

console.log(num7 === num8);     // return false .Because this value is number but this data type is not a number . num7 data type is number & num8 data type is object.



console.log(num8 == num9);       // always return false. because double equale (==) do not compare the double object.

console.log(num8 === num9);     // // always return false. because triple equale (===) do not compare the double object.

















