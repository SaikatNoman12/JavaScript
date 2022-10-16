/* === JavaScript DOM contains() === */


// js DOM contains() first test:---------
const demo = document.querySelector('.demo');
const test = document.querySelector('.h1')


const firstContain = demo.contains(test);
console.log(firstContain);  // return true. 


// js DOM contains() second test:---------
const demo2 = document.querySelector('.demo2');


const test2 = document.getElementById('kalia');
console.log(demo2.contains(test2));   // return true;



// js DOM contains() third test:---------
const demo3 = document.getElementById('demo3');


const test3 = document.getElementById('test3');
console.log(demo3.contains(test3));  // return false;

