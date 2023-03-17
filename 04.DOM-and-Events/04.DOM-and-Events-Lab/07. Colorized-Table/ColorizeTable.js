function colorize() {
    const tdEvens = document.querySelectorAll('tr:nth-child(even)');    

    for (const tdEven of tdEvens) {
        tdEven.style.backgroundColor = 'Teal'
    }

}

