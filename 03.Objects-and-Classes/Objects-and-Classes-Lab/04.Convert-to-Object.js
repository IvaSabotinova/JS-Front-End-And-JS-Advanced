function convertToObject(text) {
    let obj = JSON.parse(text);

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');