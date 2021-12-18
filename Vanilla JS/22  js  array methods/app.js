

// Js arrays methods:


// Converting Arrays toString() method:====
console.log("Converting Arrays toString() method:");

let x = ["noman", "nadim", "rafi"];

console.log(x.toString());      // return noman,nadim,rafi. data type string.




// Join() method:====
console.log("join() method:");

let y = ["amin", "modon", "ronia"];

console.log(y.join(" * "));     // return amin * modon * ronia. data type string. 




// poping and pushing method:====
console.log("Poping and Pushing method:");


// 1. pop() method=
console.log("pop() method:");

let q = ['noman', 'nadim', 'rahim', 'sonia'];

q.pop();        // pop() remove the last element of array.

console.log(q);       // return ['noman', 'nadim', 'rahim']. pop() method remove the las element in array. data type object


let r = q.pop();

console.log(r);     // return sonia. out put the last element of arrays.


// 2. push() method=
console.log("push() method=");

let t = ['nadim', 'rahim', 'karim', 'kalia'];

t.push("Loppia");

console.log(t);     // return ['nadim', 'rahim', 'karim', 'kalia', 'Loppia']. data type object. push() method add last element in array.

console.log(t.push("Samiraaa"));        // return 6.  data type number. 6 is arrays length number.




// Shifting Elements:====
console.log("Shifting Elements:");


// 1.shift() method=
console.log("shift() method=");

let p = ["karim", "salim", "papus"];

p.shift();      // shift() method remove or return the arrays first element.  

console.log(p);     // return ['salim', 'papus']. data type object. shift() method remove the arrays first element.

console.log(p.shift())      // return karim. shift method return first method in array.


// unshift() method=
console.log("unshift() method=");

let z = ["noman", "mahi", "rakin"];

z.unshift("Faruk");     // unshift() method add a first element in array.

console.log(z);     // return ['Faruk', 'noman', 'mahi', 'rakin']. data type object. 

console.log(z.unshift("jesmin"));   // return 5.  data type number. 5 is arrays length number. 















