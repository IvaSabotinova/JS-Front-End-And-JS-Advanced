function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const btnAdd = document.getElementById('add-button');
    const btnLoad = document.getElementById('load-button');
    const ulElement = document.getElementById('todo-list');
    const inputTitle = document.getElementById('title');
    btnAdd.addEventListener('click', addNewItem);
    btnLoad.addEventListener('click', loadAllItems);
    let allItems = {};
    function loadAllItems(event) {
        if (event) {
            event.preventDefault();
        }
        ulElement.innerHTML = '';
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                for (const { _id, name } of Object.values(data)) {
                    const newLi = createElements('li', '', false, ulElement, _id);
                    const newSpan = createElements('span', name, false, newLi);
                    const btnRemove = createElements('button', 'Remove', false, newLi);
                    const btnEdit = createElements('button', 'Edit', false, newLi);
                    allItems[_id] = name;
                    btnRemove.addEventListener('click', removeItem);
                    btnEdit.addEventListener('click', getElementForEdit);
                }
            })
            .catch((err) => console.error(err));
    }

    function addNewItem(e) {
        e.preventDefault();
        const newName = inputTitle.value;
        if (newName) {
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({ name: newName })
            }
            fetch(BASE_URL, httpHeaders)
            .then(()=> loadAllItems());
            inputTitle.value = '';
      
            
        }
    }

    function getElementForEdit(e) {
        if(e){
            e.preventDefault();
        }
        const currentLi = this.parentNode;      
        const currentSpan = currentLi.children[0];       
        const spanText = currentSpan.textContent;         
        const editBtn = currentLi.querySelectorAll('button')[1];
        editBtn.textContent = 'Submit';
        const newInput = document.createElement('input');
        newInput.value = spanText;
        currentLi.prepend(newInput);
        currentSpan.remove();      
        editBtn.addEventListener('click', () => {
            const newName = newInput.value;
            httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({ name: newName }),
            }
            fetch(`${BASE_URL}${currentLi.id}`, httpHeaders)
                .then(() => loadAllItems());

        });

    }

    function removeItem() {
        const id = this.parentNode.id;
        httpHeaders = {
            method: 'DELETE',
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadAllItems());

    }


    function createElements(type, contentOrValue, useInnerHTML, parentNode, id, classes, classOne, attributes) {
        const htmlElement = document.createElement(type);
        if (contentOrValue && useInnerHTML) {
            htmlElement.innerHTML = contentOrValue;
        }
        else {
            if (contentOrValue && type === 'input') {
                htmlElement.value = contentOrValue;
            }
            if (contentOrValue && type !== 'input') {
                htmlElement.textContent = contentOrValue;
            }
        }

        if (id) {
            htmlElement.id = id;
        }
        if (classes) {
            htmlElement.classList.add(...classes)
        }
        if (classOne) {
            htmlElement.classList.add(classOne)
        }
        // {src: 'link', href : 'http'}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
            }
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        return htmlElement;
    }
}

attachEvents();

