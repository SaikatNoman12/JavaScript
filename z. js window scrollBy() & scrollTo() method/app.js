/* === JavaScript window scrollBy() & scrollTo() method === */


// use scrollBy method:----
function scrollBYY() { // y-axis positive
    window.scrollBy(0, 100);
}


function scrollBYX() { // y-axis negative
    window.scrollBy(0, -100);
}

function scrollRight() { // x-axis right
    window.scrollBy(100, 0);
}

function scrollLefty() { // x-axis left
    window.scrollBy(-100, 0);
}


// js scrollTo() method:---
function scrollTOO() { // scroll to top
    // window.scrollTo(0, 0);
    window.scrollTo(0, 100);  // is stop top 100px gap;
}


function scrollToLeft() { // scroll left
    window.scrollTo(0, 0); 
    window.scrollTo(100, 0); // is scroll to left 100px gap;
}
