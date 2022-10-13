

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




// Changing element:====
console.log("Changing element:");


// 1. Element changes=
console.log("Element changes=");

let a_ = ["noman", "nadim", "mahin"];

a_[0] = "Fahim";     // changes 0 number index element.

console.log(a_);     // return  ['Fahim', 'nadim', 'mahin']. Chnage 0 number index. data type object.


// 2. Use length property and add new element in array=
console.log("Use length property and add new element in array=");

let k_ = ["noman", "mahdee", "rakib"];

k_[k_.length] = "sohan";      // add new element in this array. arrays index number is 3.

console.log(k_)         // return ['noman', 'mahdee', 'rakib', 'sohan']. data type object. 




// Delete arrays element:====
console.log("Delet aarays element:");


let d_ = ['nadim', 'mahin', 'rakin'];

delete d_[1];       // delet 1 number index element mahin. Using delete keyword leaves undefined or empty holes in the array.

console.log(d_);        // return ['nadim', empty, 'rakin']. arrays emepty means undefined. data type obejct.

console.log(d_.length);     // lenght 3.




// Splice() method:====
console.log("Splice() method:");


let u_ = ["noman", "mahin", "rahim", "kobir"];

u_.splice(1, 0, "amin", "tanvir");          // add element start in mahin. cutting no element.    

console.log(u_);        // return  ['noman', 'amin', 'tanvir', 'mahin', 'rahim', 'kobir']. add amin and tanvirr. add start index number 1

/* 
1. The first parameter (1) defines the position where new elements should be added (spliced in).
2. The second parameter (0) defines how many elements should be removed.
3. The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/


let s_ = ["noman", "mahin", "rahim", "kobir", "sumon"];

s_.splice(1, 3, "abcd", "dfgh");        // remove index number 1, 2, 3. Add abcd & dfgh. Add element start mahin. Cutting start the element mahin. and cutting end the elemnt kobir.

console.log(s_);    // return ['noman', 'abcd', 'dfgh']. data type object. Add element start. Cutting start the element mahin. and cutting end the element kobir.

/* 
1. The first parameter (1) defines the position where new elements should be added (spliced in).
2. The second parameter (3) define menas 1 index to 3 index element should be removed.
3. The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/




// Using splice() method remove element:====
console.log("Using splice() method remove element:");

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.splice(2, 4);    // remove 2 number index his element is 4. and ending remove 5 number index his element 6.

console.log(number);     // return [1, 2, 7, 8, 9]. data type object. Add element start in 3 element. Cutting start element 3.

console.log(number.splice(1, 2));       // splice() method return remove the element in array. return 2 & 3 element. start cutting 2 number element .and end cutting 3 number element.

/*
1. The first parameter (2) defines the position where new elements should be added (spliced in).
2. The second parameter (4) defines how many elements should be removed.
3. The rest of the parameters are omitted. No new elements will be added.
*/




// Merging (Concatenating) Arrays:====
console.log("Merging (Concatenating) Arrays:");


// concat() method=
console.log("concat() method=");

// concat() method add two variable=
console.log("concat() method add two variable ");

let j = [1, 2, 4, 5, 6];

let n = [7, 8, 9, 10, 11];

let add_ = j.concat(n);     // added n in j.

console.log(add_);      //return [1, 2, 4, 5, 6, 7, 8, 9, 10, 11]. data type object. concat menas adding to number or string. 


// concat() method added multiple variable=
console.log("concat() multiple variable=");

let c = [1,2,3,4,5,6];

let l_ = [7,8,9,10];

let j_ = [11,12,13,14];

let g = 17;

let r_ = c.concat(l_, j_, g);       // concat multiple variabel .

console.log(r_);    // return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17]. data type object.


let k = c.concat("this is number");        // the concat() method  take string argument.

console.log(k);     // return [1, 2, 3, 4, 5, 6, 'this is number']. Data type object.


let _k = c.concat("this is number", "hello", "how are you?");        // the concat() method  take multiple string argument.

console.log(_k);     // return [1, 2, 3, 4, 5, 6, 'this is number']. Data type object.





// slice() method:====
console.log("slice() method:");


// slice() method in use start index and end index number=
console.log("slice() method in use start index and end index number");

let p_ = [1, 2, 3, 4, 5, 6, 7]

let _r = p_.slice(1, 4);         // cutting start 2 element his index number 1. And cutting end 4 element his index number 3. 

console.log(_r);        // return [2,3,4,]. cutting start 2 element his index number 1. and cutting and 4 element his index number 3.


// slice() method in use only strat index number

let w_ = p_.slice(2);       // cutting start 3 element his index number 2 . and end 7 elemnet. this is a last element.

console.log(w_);        // return [3, 4, 5, 6, 7]. data type object.




// Automatic toString() method:====

/*
js is a smart language. Java script to run an array of the html in the as using toString() method. In this case js smartly string the array.
So in this case you have to use the toString() method or not. All time js return the arry of html as a stirng.  
*/

let h = ["noman", "mahi", "murad"];

document.getElementById('demo').innerHTML = h;      // return noman,mahi,murad. this is string. Arry show in O/P the HTML. You all time use this type of statement. and array declar only variable in innerHTML. Do not use toString() method. 

document.getElementById('demo1').innerHTML = h.toString();  // return noman,mahi,murad. use toString() method. This is string. Do not use toString() method.










