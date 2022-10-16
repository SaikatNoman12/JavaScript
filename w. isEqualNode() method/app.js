/* ==== JavaScript DOM isEqualNode() method ==== */


// use DOM isEqualNode() method:---------
const target1 = document.getElementById('list-1').firstElementChild;
const target2 = document.getElementById('list-2').firstElementChild;

const equalValue = target1.isEqualNode(target2);
console.log(equalValue);


/* 
Must same this this compare element:- 
1. nodeType
2. nodeName
3. nodeValue
4. childNodes
5. attributes
6. attribute Value
*/

