function phoneBook(input){
   let person = {};
  for (const element of input) {
    let [name, phoneNumber] = element.split(' ');
    person[name] = phoneNumber;    
  }  

  for (const key in person) {
    console.log(`${key} -> ${person[key]}`)
  }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);