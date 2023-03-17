function sumTable() {
    const table = document.querySelectorAll('td');
    let total = 0;

    for (let index = 1; index < table.length - 2; index += 2) {
        total += Number(table[index].textContent);

    }
    
    let sum = document.getElementById('sum');
    sum.textContent = total;
}

