function sequences(input) {
    let jsonOutput = [];
    let output = [];
    for (const arr of input) {
        let currentArray = JSON.parse(arr).sort((a, b) => b - a);
        let jsonArray = JSON.stringify(currentArray);
        if (!jsonOutput.includes(jsonArray)) {
            jsonOutput.push(jsonArray);
            output.push(JSON.parse(jsonArray));
        }
    }

    for (const array of output.sort((a, b) => a.length - b.length)) {
        console.log(`[${array.join(', ')}]`)
    }
}


sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);


