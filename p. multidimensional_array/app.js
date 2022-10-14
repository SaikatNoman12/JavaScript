/* === JavaScript Multidimensional Array === */


// use multidimensional array;
const array = [
    ['Name', 'Age', 'Degree', 'Job'],
    ['Deo', 25, 'BSC', 'Jr. Software Engineer'],
    ['Jhone', 28, 'BBA', 'Sr. Manager'],
    ['Prianka', 49, 'BSC', 'Sr. Actor'],
    ['Dipika', 37, 'IBA', 'Sr. Actor']
]

const arrayDataShow = (array1) =>
    (function (myArr) {
        const table = document.querySelector('#table');

        for (let i = 0; i < myArr.length; i++) {
            const createTr = document.createElement('tr');

            for (let j = 0; j < myArr[i].length; j++) {

                const createTd = document.createElement('td');
                createTd.innerText = myArr[i][j];
                createTr.appendChild(createTd);

            }

            table.appendChild(createTr);
        }

    })(array1);

arrayDataShow(array);
