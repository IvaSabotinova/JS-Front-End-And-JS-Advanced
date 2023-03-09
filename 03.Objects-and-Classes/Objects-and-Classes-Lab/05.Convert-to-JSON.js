function convertToJSON(name, lastName, hairColor){
    let person = {
        name,
        lastName, 
        hairColor
    }
    let jsonText = JSON.stringify(person);
    console.log(jsonText);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');