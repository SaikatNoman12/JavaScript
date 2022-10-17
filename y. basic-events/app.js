/* === JavaScript Basic Events === */


// use onclick event:---
function clickMyEvent() {
    document.getElementById('click1').innerText = 'Yes you are clicked.Use onclick.';
}


// use ondblclick:---
function doubleClickEvent() {
    document.getElementById('click2').innerText = 'Yes you are clicked. Use ondblclick.';
}


// use onmouseover enter. same to mouseenter event:---
function mouserOver() {
    document.getElementById('mouseOver').innerText = 'Yes you are mouse over. Use onmouseover. This is same to onmouseenter.';
}


// use onmouseenter event. same to mouseover event:---
function mouseEnter() {
    document.getElementById('mouseEnter').innerText = 'Yes you are mouse enter. Use onmouseenter. This is same to onmouseover.';
}


// use onmousedown event. same to click event:---
function mouseDown() {
    document.getElementById('mousedown').innerText = 'Yes, your mouse is down. Use onmousedown. This is to click.'
}


// use onmouseup event:---
function mouseUp() {
    document.getElementById('mouseoUp').innerText = 'Yes, your mouse is up. Use onmouseup.'
}



// use onkeypress event:--- 
function keyPress() {
    document.getElementById('keyPress').innerText = 'Yes, your work your onkeypress.'
}


// use onkeydown event:---
function keyDown() {
    document.getElementById('keyDown').textContent = 'Yse, your key is down. Use onkeydown.';
}


// use onkeyup event:---
function keyUp() {
    document.getElementById('keyUp').innerText = 'Yes, your key is up. Use onkeyup.';
}


// use onload event:------
function load() {
    document.getElementById('onLoad').textContent = 'Your loading is ended.';
}


// use onunload event this is and window event.
window.addEventListener('unload', function (e) {
    console.log('hello on unload!');
}, false)

// use onscroll event:---
/* 
function scrolling() {
    alert('You are scrolling!');
} */