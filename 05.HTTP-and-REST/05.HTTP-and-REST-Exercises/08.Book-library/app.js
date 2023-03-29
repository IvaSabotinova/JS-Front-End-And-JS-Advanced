function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const btnSubmit = document.querySelector('#form > button');
  const btnLoadBooks = document.getElementById('loadBooks');
  const inputTitle = document.querySelector('input[name="title"]');
  const inputAuthor = document.querySelector('input[name="author"]');
  const tableBody = document.querySelector('tbody');
  const formH3 = document.querySelector('#form > h3')
  btnLoadBooks.addEventListener('click', loadAllBooks);
  btnSubmit.addEventListener('click', createOrEditBook);
  let editBookId = null;

  async function loadAllBooks() {
    tableBody.innerHTML = '';
    const initial = await fetch(BASE_URL);
    const data = await initial.json();

    for (const key in data) {
      const newRow = createElements('tr', '', tableBody);

      //create title and author cells (td)
      createElements('td', data[key].title, newRow);
      createElements('td', data[key].author, newRow);

      const tdAction = createElements('td', '', newRow);
      const btnEdit = createElements('button', 'Edit', tdAction, key);
      const btnDelete = createElements('button', 'Delete', tdAction, key);
      btnEdit.addEventListener('click', getBookForEdit)
      btnDelete.addEventListener('click', deleteBook)
    }
  }

  async function createOrEditBook() {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let url = BASE_URL;
    if (title && author) {
      const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({ title, author }),
      }
      if (formH3.textContent === 'Edit FORM') {
        httpHeaders.method = 'PUT';
        url += editBookId;
        formH3.textContent = 'FORM';
        btnSubmit.textContent = 'Submit';

      }
      await fetch(url, httpHeaders);
      loadAllBooks();

      inputTitle.value = '';
      inputAuthor.value = '';

    }
  }

  function getBookForEdit() {
    editBookId = this.id;  
    fetch(`${BASE_URL}${editBookId}`)
      .then((res) => res.json())
      .then((obj) => {
        formH3.textContent = 'Edit FORM';
        btnSubmit.textContent = 'SAVE';
        inputTitle.value = obj.title;
        inputAuthor.value = obj.author;
      })
      .catch((err)=> console.error(err));
  }

  async function deleteBook() {
    const idToDelete = this.id;
    httpHeaders = {
      method: 'DELETE',
    }
    await fetch(`${BASE_URL}${idToDelete}`, httpHeaders);
    loadAllBooks();
  }

  function createElements(type, contentOrValue, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (contentOrValue && type === 'input') {
      htmlElement.value = contentOrValue;
    }
    if (contentOrValue && type !== 'input') {
      htmlElement.textContent = contentOrValue;
    }

    if (id) {
      htmlElement.id = id;
    }
    if (classes) {
      htmlElement.classList.add(...classes)
    }
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


