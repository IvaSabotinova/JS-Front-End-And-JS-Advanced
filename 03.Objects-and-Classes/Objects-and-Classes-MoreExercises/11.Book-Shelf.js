function bookShelf(input) {
    let shelves = {};
    for (const line of input) {
        if (line.includes('->')) {
            let shelfId = line.split(' ')[0];
            let shelfGenre = line.split(' ')[2];
            if (!shelves.hasOwnProperty(shelfId)) {
                shelves[shelfId] = {};
                if (!shelves[shelfId].shelfGenre) {
                    shelves[shelfId].shelfGenre = shelfGenre;
                }
                shelves[shelfId].books = [];
            }
        }
        else {
            let bookName = line.split(':')[0];
            let bookAuthor = line.split(': ')[1].split(', ')[0];
            let bookGenre = line.split(':')[1].split(', ')[1];

            for (const key in shelves) {
                if (shelves[key].shelfGenre === bookGenre) {
                    shelves[key].books.push({ title: bookName, author: bookAuthor });
                }
            }
        }
    }
    let sortedShelves = Object.entries(shelves).sort((a, b) => b[1].books.length - a[1].books.length);
    for (const [shelfId, _shelfOb] of sortedShelves) {
        console.log(`${shelfId} ${shelves[shelfId].shelfGenre}: ${shelves[shelfId].books.length}`);
        let sortedBooks = shelves[shelfId].books.sort((a, b) => a.title.localeCompare(b.title))
        for (const { title, author } of sortedBooks) {
            console.log(`--> ${title}: ${author}`)
        }
    }
}


bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);

bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']);