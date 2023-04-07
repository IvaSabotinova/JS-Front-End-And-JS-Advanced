function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const loadBtn = document.getElementById('loadBooks');
  const titleInput = document.querySelector('input[name="title"]');
  const authorInput = document.querySelector('input[name="author"]');
  const submitBtn = document.querySelector('#form button');
  const tableBody = document.getElementsByTagName('tbody')[0];
  const formH3 = document.querySelector('#form h3');
  let editBookId = null;

  loadBtn.addEventListener('click', loadAllBooks);
  submitBtn.addEventListener('click', createOrEditBook);

  let obj = {};

  function loadAllBooks() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        obj = data;
        tableBody.innerHTML = '';
        for (const key in data) {
          const tableRow = createElements('tr', '', tableBody, key);
          const titleTd = createElements('td', data[key].title, tableRow);
          const authorTd = createElements('td', data[key].author, tableRow);
          const buttonsTd = createElements('td', '', tableRow);
          const editBtn = createElements('button', 'Edit', buttonsTd);
          const deleteBtn = createElements('button', 'Delete', buttonsTd);

          editBtn.addEventListener('click', getBookForEdit);
          deleteBtn.addEventListener('click', () => {
            httpHeaders = {
              method: 'DELETE'
            }
            fetch(`${BASE_URL}${key}`, httpHeaders)
              .then(() => loadAllBooks());
          })
        }
      })
  }

  function createOrEditBook(e) {

    if (titleInput.value && authorInput.value) {

      let currentUrl = BASE_URL;
      let httpHeaders = {
        method: 'POST',
        body: JSON.stringify({
          author: authorInput.value,
          title: titleInput.value
        })
      }

      if (e.currentTarget.textContent === 'Save') {
        const id = editBookId;
        httpHeaders.method = 'PUT';
        currentUrl += id;
        submitBtn.textContent = 'Submit';
        formH3.textContent = 'FORM';

      }
      fetch(currentUrl, httpHeaders)
        .then(() => loadAllBooks())

      titleInput.value = '';
      authorInput.value = '';

    }
  }

  function getBookForEdit(e) {
    editBookId = e.currentTarget.parentNode.parentNode.id;
    formH3.textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';
    titleInput.value = obj[editBookId].title;
    authorInput.value = obj[editBookId].author;  
    e.currentTarget.parentNode.parentNode.remove();

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



