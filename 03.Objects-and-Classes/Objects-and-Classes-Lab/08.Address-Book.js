function addressBook(input) {
    let book = {};
    for (const element of input) {
        let [name, address] = element.split(':');
        book[name] = address;
    }

    let arrBook = Object.entries(book);
    let sortedBook = arrBook.sort((a, b) => a[0].localeCompare(b[0]));

    // for (const entry of sortedBook) {
    //     console.log(`${entry[0]} -> ${entry[1]}`);
    // }

    for (const [name, address] of sortedBook) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);