/* ==== Javascript BOM moveTo() & moveBy() method ==== */


// use BOM moveTo() method. This is work window absolute position:---------
let myWindow;

function openWindow() {

    myWindow = window.open('', '', 'width=400px, height=200px, left=100px, top=100px');
    myWindow.document.write('<h1>Open your new window. Use moveTo() method!</h1>');

}

function moveToWindow() {

    myWindow.moveTo(200, 200);
    myWindow.focus();

}


// use BOM moveTo() method. This is work window absolute position:---------
let myWindow2;

function openWindow2() {

    myWindow2 = window.open('', '', 'width=300px, height=200px, left=100px, top=100px');
    myWindow2.document.write('<h1>Open new window. Use moveBy() method!</h1>');

}

function moveByWindow() {

    myWindow2.moveBy(200, 200);
    myWindow2.focus();

}




