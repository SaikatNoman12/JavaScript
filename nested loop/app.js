
// tabular form use nested loop;
for (let i = 1; i <= 100; i += 10) {

    for (let j = i; j < i + 10; j++) {

        document.write(j + ' ');

    }

    document.write('<br>')
}