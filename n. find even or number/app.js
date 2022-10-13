
const tableOne = document.getElementById('table-one');
const tableTwo = document.querySelector('#table-two');

function findEvenOddNumber() {
    for (let i = 0; i <= 100; i++) {

        const createTr = document.createElement('tr');

        if (i % 2 === 0) {
            createTr.innerHTML = 'Even number: ' + '<span>' + i + '</span>';
            tableOne.appendChild(createTr);
        }
        else {
            createTr.innerHTML = 'Odd number: ' + '<span>' + i + '</span>';
            tableTwo.appendChild(createTr);
        }

    }
}


findEvenOddNumber();