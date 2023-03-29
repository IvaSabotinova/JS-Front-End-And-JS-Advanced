function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    const ulPhonebook = document.getElementById('phonebook');
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');
    btnLoad.addEventListener('click', loadEntries);
    btnCreate.addEventListener('click', createEntry);

    async function loadEntries() {
        const load = await fetch(BASE_URL);
        const allBooks = await load.json();
        ulPhonebook.innerHTML = '';
        for (const { person, phone, _id } of Object.values(allBooks)) {
            const newLi = document.createElement('li');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = `Delete`;
            deleteBtn.id = _id;
            newLi.textContent = `${person}: ${phone}`;
            newLi.appendChild(deleteBtn);
            ulPhonebook.appendChild(newLi);
            deleteBtn.addEventListener('click', deleteEntry);
        }

        async function deleteEntry() {
            const idToDelete = this.id;
            httpHeaders = {
                method: 'DELETE',
            }

            const deleted = await fetch(`${BASE_URL}${idToDelete}`, httpHeaders);
            await deleted.json();
            loadEntries();
        }
    }

    async function createEntry() {
        const person = inputPerson.value;
        const phone = inputPhone.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }
        const initial = await fetch(BASE_URL, httpHeaders);
        await initial.json();
        loadEntries();
        inputPerson.value = '';
        inputPhone.value = '';
    }
}

attachEvents();