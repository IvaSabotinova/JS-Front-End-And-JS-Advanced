class Contact {
    #online
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.#online = false;
    }

    get online() {
        return this.#online;
    }

    set online(value) {
        this.#online = value;

        const div = Array.from(document.querySelectorAll('.title'))
            .find(x => x.textContent.includes(`${this.firstName} ${this.lastName}`));
        if (div) {
            if (value === true) {
                div.classList.add('online');
            }
            else {
                div.classList.remove('online');
            }
        }
    }

    render(id) {
        //create html elements
        const newArticle = document.createElement('article');
        const titleDiv = document.createElement('div');
        const button = document.createElement('button');
        const infoDiv = document.createElement('info');
        const phoneSpan = document.createElement('span');
        const emailSpan = document.createElement('span');

        //add classes, textContent, innerHTML
        titleDiv.classList.add('title');
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;
        if (this.#online) {
            titleDiv.classList.add('online');
        }
        button.innerHTML = `&#8505;`;
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';
        phoneSpan.innerHTML = `&phone; ${this.phone}`;
        emailSpan.innerHTML = `&#9993; ${this.email}`;

        //append elements

        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);
        titleDiv.appendChild(button);
        newArticle.appendChild(titleDiv);
        newArticle.appendChild(infoDiv);

        document.getElementById(id).appendChild(newArticle);

        button.addEventListener('click', (e) => {
            infoDiv.style.display = (infoDiv.style.display == 'none') ? 'block' : 'none';
        })
    }
}



let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
contacts[0].online = true;
