/* === JavaScript cloneNode() method === */


// use javaScript DOM cloneNode() method:---------
const target = document.querySelector('.list1').children[2];

const copyTargetNode = target.cloneNode(true) // default parameter is true;

const innerList = document.querySelector('.list2');
innerList.insertBefore(copyTargetNode, innerList.children[0]);