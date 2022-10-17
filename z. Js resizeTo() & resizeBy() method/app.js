/* === JavaScript window resizeTo() & resizeBy() methods === */


// use resizeTo() method:---
let resizeToo;

function openWindow() {
    resizeToo = window.open('', '', 'width=400px, height=400px, left=200px, top=200px');
    resizeToo.document.write('I use resizeTo() method');
}

function resizeTO() {
    resizeToo.resizeTo(600, 600);
    resizeToo.focus();
}


// use resizeBy() method:---
let resizeByy;

function openNewWindow2() {

    resizeByy = window.open('', '', 'width=400px,height=400px, left=100px, right=100px');

}

function resizeBYY() {
    resizeByy.resizeBy(200, 200);
    resizeByy.focus();
}