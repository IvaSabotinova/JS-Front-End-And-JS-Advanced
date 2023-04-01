function pianist(input) {
    let pieces = {};
    const num = input.shift();
    const initialCollection = input.splice(0, num)

    for (let index = 0; index < num; index++) {
        const piece = initialCollection[index].split('|')[0];
        const composer = initialCollection[index].split('|')[1];
        const key = initialCollection[index].split('|')[2];
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = {};
            pieces[piece].composer = composer;
            pieces[piece].key = key;
        }
    }

    for (const command of input) {
        if (command === 'Stop') {
            break;
        }
        let tokens = command.split('|');
        if (tokens[0] === 'Add') {
            const piece = tokens[1];
            const composer = tokens[2];
            const key = tokens[3];
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = {};
                pieces[piece].composer = composer;
                pieces[piece].key = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
            else {
                console.log(`${piece} is already in the collection!`)
            }

        }
        else if (tokens[0] === 'Remove') {
            const piece = tokens[1];
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`)
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        else if (tokens[0] === 'ChangeKey') {
            const piece = tokens[1];
            const newKey = tokens[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }

    for (const piece in pieces) {
        const { composer, key } = pieces[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }
}

// pianist(['3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop']);

pianist(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);