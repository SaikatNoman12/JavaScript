/* ==== JavaScript DOM get and set method ==== */

// use innerHTML, innerText, textContent:--------

// innerHTML;
const demo1 = document.querySelector('#demo1').innerHTML;
console.log(demo1 + " - use innerHTML");


// innerText; 
const demo2 = document.getElementById('demo1').innerText;
console.log(demo2 + " - use innerText");


// textContent;
const demo3 = document.getElementById('demo1').textContent;
console.log(demo3 + " - use textContent");



// use getAttribute(attrName), getAttributeNode(attrName) & attributes:--------

// getAttribute(attrName)
const demo4 = document.getElementById('myDemo').getAttribute('class');
console.log(demo4 + " - use getAttribute(attrName)"); // return class value "demo2";


// getAttributeNode(attrName)
const demo5 = document.getElementById('myDemo').getAttributeNode('id');
console.log(demo5); // return id="myDemo";


// attributes 
const demo6 = document.getElementById('myDemo').attributes;
console.log(demo6); // return all attribute inner nameNodeMap;
console.log(demo6[2]); // return target="this ish1 tag"
console.log(demo6[2].name);  // return "target"; 
console.log(demo6[2].value); // return "this is h1 tag";



/* === DOM Set Methods === */

// use innerHTML, innerText & textContent:--------

// innerHTML;
const demo7 = document.getElementById('demo3');
demo7.innerHTML = '<h2>JavaScript Set This Element</h2>';
console.log(demo7); // return demo7;


// innerText;
const demo8 = document.getElementById('demo3');
demo8.innerText = 'JavaScript set text use inner Text';
console.log(demo8); // return demo8;


// textContent;
const demo9 = document.getElementById('demo3');
demo9.textContent = 'JavaScript Set text use textContent';
console.log(demo9); // return demo9;


// use setAttribute("attrName", "attrValue"), attributes, removeAttribute("attrName");

// setAttribute("attrName", "attrValue");
const demo10 = document.getElementById('demo3');
demo10.setAttribute('class', 'myNewClass');
demo10.setAttribute('style', 'border:2px solid red;');
demo10.setAttribute('onClick', 'myFunc()');
console.log(demo10);  // return demo10;


// attributes;
const demo11 = document.getElementById('demo3');
demo11.attributes[1].value = 'myNewClass1 myNewClass2';
console.log(demo11);  // return demo11;


// removeAttribute(attrName);
const demo12 = document.getElementById('demo3');
demo12.removeAttribute('class');
console.log(demo12); // return demo12;



