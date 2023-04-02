function shoppingList(input) {
    const initialList = input[0].split('!');
    const commands = input.slice(1);
    let shoppingList = [];

    for (const item of initialList) {
        shoppingList.push(item);
    }
    for (const command of commands) {
        if (command === 'Go Shopping') {
            break;
        }
        let commandSplit = command.split(' ');
        if (commandSplit[0] === 'Urgent' && !shoppingList.includes(commandSplit[1])) {
            shoppingList.unshift(commandSplit[1]);
        }
        else if (commandSplit[0] === 'Unnecessary' && shoppingList.includes(commandSplit[1])) {
            let index = shoppingList.indexOf(commandSplit[1]);
            shoppingList.splice(index, 1);
        }
        else if (commandSplit[0] === 'Correct' && shoppingList.includes(commandSplit[1])) {
            let index = shoppingList.indexOf(commandSplit[1]);
            shoppingList.splice(index, 1, commandSplit[2]);
        }
        else if (commandSplit[0] === 'Rearrange' && shoppingList.includes(commandSplit[1])) {
            let index = shoppingList.indexOf(commandSplit[1]);
            let element = shoppingList.splice(index, 1);
            shoppingList.push(element);
        }
    }

    console.log(shoppingList.join(', '));
}

shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]));

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]));