window.addEventListener("load", solve);

function solve() {
  const divMain = document.getElementById('main');
  const inputFirstName = document.getElementById('first-name');
  const inputLastName = document.getElementById('last-name');
  const inputAge = document.getElementById('age');
  const inputStoryTitle = document.getElementById('story-title');
  const selectGenre = document.getElementById('genre');
  const textAreaStory = document.getElementById('story');
  const btnPublish = document.getElementById('form-btn');
  const ulElement = document.getElementById('preview-list');
  btnPublish.addEventListener('click', createPreview);

  function createPreview(e) {
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const age = inputAge.value;
    const storyTitle = inputStoryTitle.value;
    const genre = selectGenre.value;
    const storyText = textAreaStory.value;
    if (firstName && lastName && age && genre && storyTitle && storyText) {
      const newLi = createElements('li', '', ulElement, '', '', 'story-info');
      const newArticle = createElements('article', '', newLi);
      const newH4 = createElements('h4', `Name: ${firstName} ${lastName}`, newArticle);
      const paraAge = createElements('p', `Age: ${age}`, newArticle);
      const paraTitle = createElements('p', `Title: ${storyTitle}`, newArticle);
      const paraGenre = createElements('p', `Genre: ${genre}`, newArticle);
      const paraStoryText = createElements('p', storyText, newArticle);
      const btnSave = createElements('button', 'Save Story', newLi, '', '', 'save-btn');
      const btnEdit = createElements('button', 'Edit Story', newLi, '', '', 'edit-btn');
      const btnDelete = createElements('button', 'Delete Story', newLi, '', '', 'delete-btn');
      e.currentTarget.disabled = true;
      inputFirstName.value = '';
      inputLastName.value = '';
      inputAge.value = '';
      inputStoryTitle.value = '';
      selectGenre.value = 'Disturbing'
      textAreaStory.value = '';
      btnEdit.addEventListener('click', editStory);
      btnSave.addEventListener('click', saveStory);
      btnDelete.addEventListener('click', deleteStory);


      function editStory(e) {
        inputFirstName.value = firstName;
        inputLastName.value = lastName;
        inputAge.value = age;
        inputStoryTitle.value = storyTitle;
        selectGenre.value = genre;
        textAreaStory.value = storyText;
        ulElement.innerHTML = '';
        createElements('h3', 'Preview', ulElement, 'preview-list');
        btnPublish.disabled = false;

      }

      function saveStory() {
        divMain.innerHTML = '';
        createElements('h1', 'Your scary story is saved!', divMain);

      }

      function deleteStory() {
        ulElement.innerHTML = '';
        createElements('h3', 'Preview', ulElement, 'preview-list');
        btnPublish.disabled = false;
      }
    }
  }

  function createElements(type, contentOrValue, parentNode, id, classes, classOne, attributes) {
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
    if (classOne) {
      htmlElement.classList.add(classOne)
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
