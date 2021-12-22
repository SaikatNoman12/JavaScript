

// js array iteration
console.log("js array iteration");


// forEach() method:====
console.log("forEach() method");

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































