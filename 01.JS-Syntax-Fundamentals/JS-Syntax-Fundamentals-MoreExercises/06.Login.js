function login(array) {
    let username = array[0];
    let passwords = array.slice(1);
    let correctPassword = username.split('').reverse().join('');
    let output = '';
    let count = 0;
    for (const password of passwords) {
        if (password === correctPassword) {
            output += `User ${username} logged in.`;
        }
        else {   
            count++;       
            if (count === 4) {
                output += `User ${username} blocked!`
                break;
            }
            output += `Incorrect password. Try again.\n`;            
        }
    }
    console.log(output);
}


login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
