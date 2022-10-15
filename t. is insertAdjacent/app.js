/* ==== JavaScript DOM insertAdjacent methods ==== */

/* 
insertAdjacent positions:
1. beforebegin
2. afterbegin
3. beforeend
4. afterend
*/

// use insetAdjacentElement(position, elementVar). and all positions:---------
const createH1 = document.createElement('h1');
const createH2 = document.createElement('h1');
const createH3 = document.createElement('h1');
const createH4 = document.createElement('h1');

const text1 = document.createTextNode('Use insertAdjacentElement(). Use beforebegin position.');
const text2 = document.createTextNode('Use insertAdjacentElement(). Use afterbegin position.');
const text3 = document.createTextNode('Use insertAdjacentElement(). Use beforeend position.');
const text4 = document.createTextNode('Use insertAdjacentElement(). Use afterend position.');

createH1.appendChild(text1);
createH2.appendChild(text2);
createH3.appendChild(text3);
createH4.appendChild(text4);

const target = document.getElementById('demo');

target.insertAdjacentElement('beforebegin', createH1);
target.insertAdjacentElement('afterbegin', createH2);
target.insertAdjacentElement('beforeend', createH3);
target.insertAdjacentElement('afterend', createH4);



// use insertAdjacentHTML(position, elementVar). and all positions:---------
const h1 = "<h1>Use insertAdjacentHTML(). Use beforebegin position.";
const h2 = "<h1>Use insertAdjacentHTML(). Use afterbegin position.";
const h3 = "<h1>Use insertAdjacentHTML(). Use beforeend position.";
const h4 = "<h1>Use insertAdjacentHTML(). Use afterend position.";

const target2 = document.getElementById('demo1');

target2.insertAdjacentHTML('beforebegin', h1);
target2.insertAdjacentHTML('afterbegin', h2);
target2.insertAdjacentHTML('beforeend', h3);
target2.insertAdjacentHTML('afterend', h4);


// use insertAdjacentText(position, textVar). and all positions:---------
const text5 = 'Use insertAdjacentText(). Use beforebegin position.';
const text6 = 'Use insertAdjacentText(). Use afterbegin position.';
const text7 = 'Use insertAdjacentText(). Use beforeend position.';
const text8 = 'Use insertAdjacentText(). Use afterend position';

const demo3 = document.getElementById('demo3');

demo3.insertAdjacentText('beforebegin', text5);
demo3.insertAdjacentText('afterbegin', text6);
demo3.insertAdjacentText('beforeend', text7);
demo3.insertAdjacentText('afterend', text8);


// use insertBefore(element, childNode):---------
const target3 = document.getElementById('demo4');

const htmlEle = document.createElement('h1');
htmlEle.innerHTML = "JavaScript insertBefore().";

target3.insertBefore(htmlEle, target3.childNodes[3]);

