/* ==== JavaScript Forms Event ==== */


// use Forms onkeypress(), onkeyup(), onkeydown(), onfocus(), onblur(), oninput():------------

const form = document.forms['form'];
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const selectItem = document.getElementById('selectItem');

console.log(typeof nameInput.type);

// short for form
inputClick(form, 'submit');


// short for form name event:-- 
inputClick(nameInput, 'keypress');
inputClick(nameInput, 'keydown');
inputClick(nameInput, 'keyup');
inputClick(nameInput, 'focus');
inputClick(nameInput, 'blur');
inputClick(nameInput, 'input');
inputClick(nameInput, 'change');
inputClick(nameInput, 'select');


// short for form email event:-- 
inputClick(emailInput, 'keypress');
inputClick(emailInput, 'keydown');
inputClick(emailInput, 'keyup');
inputClick(emailInput, 'focus');
inputClick(emailInput, 'blur');
inputClick(emailInput, 'input');
inputClick(emailInput, 'change');
inputClick(emailInput, 'invalid');


// short for form select event:-- 
inputClick(selectItem, 'keypress');
inputClick(selectItem, 'keydown');
inputClick(selectItem, 'keyup');
inputClick(selectItem, 'focus');
inputClick(selectItem, 'blur');
inputClick(selectItem, 'input');
inputClick(selectItem, 'change');



// event function:---
function inputClick(input, key) {
    input.addEventListener(key, function (e) {
        if (key === 'submit') {
            e.preventDefault();
            console.log('form submit');

        }
        else if (key === 'change') {

            console.log('clicked use on change');

        }
        else if (key === 'invalid') {
            alert('Please enter your gmail!');
        }
        else if (key === 'select') {

            console.log('yaah, you are selected!');

        }
        else if ((key === 'keyup')
            || (key === 'keypress')
            || (key === 'keydown')
            || (key === 'input')) {

            console.log(`------------- ${key} ------------- `);
            console.log(e.target.value);

        }
        else if (key === 'focus') {

            e.target.style.background = 'red';
            e.target.style.color = '#fff';

        }
        else {

            e.target.style.background = '';
            e.target.style.color = '';

        }

    });

}


/* // onsubmit() event:--
form.addEventListener('change', function(e){
    e.preventDefault();
    console.log('form submit');
}); */


/* // onkeypress() event:--
nameInput.addEventListener('keypress', function (e) {
    console.log(' ------------- onkeypress ------------- ');
    console.log(e.target.value);
});
*/


/* // onkeyup() event:--
nameInput.addEventListener('keyup', function (e) {
    console.log(' ------------- onkeyup ------------- ');
    console.log(e.target.value);
});*/


/* // onkeydown() event:--
nameInput.addEventListener('keydown', function (e) {
    console.log(' ------------- onkeydown ------------- ');
    console.log(e.target.value);
});*/


/* // onfocus() event:--
nameInput.addEventListener('focus', function () {
    console.log(' ------------- onfocus ------------- ');
    nameInput.style.background = 'red';
    nameInput.style.color = 'white';
});*/


/* // onblur() event:--
nameInput.addEventListener('blur', function () {
    console.log(' ------------- onblur ------------- ');
    nameInput.style.background = '';
    nameInput.style.color = '';
});*/


/* // onblur() event:--
nameInput.addEventListener('blur', function () {
    console.log(' ------------- onblur ------------- ');
    nameInput.style.background = '';
    nameInput.style.color = '';
});*/


/* // onchange() event:--
nameInput.addEventListener('change', function(){
    console.log('clicked');
}); */


/* // onselect() event:--
form.addEventListener('
select', function(){
    console.log('Yah, you are selected!');
}); */


/* // oninvalid() event:--
emailInput.addEventListener('invalid', function () {
    alert('please fill your name input box!');
}); */







