window.addEventListener("load", solve);

function solve() {

  const inputFirstName = document.getElementById('first-name');
  const inputLastName = document.getElementById('last-name');
  const inputAge = document.getElementById('age');
  const inputSelectGender = document.getElementById('genderSelect');
  const descriptionTextArea = document.getElementById('task');
  const btnForm = document.getElementById('form-btn');
  const ulInProgress = document.getElementById('in-progress');
  const spanProgressCount = document.getElementById('progress-count'); 
  const form = document.querySelector('#main form');
  const ulFinished = document.getElementById('finished');
  let count = Number(spanProgressCount.textContent);

  btnForm.addEventListener('click', getFormInfo);

  function getFormInfo(event) {
    if (event) {
      event.preventDefault();
    }

    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const age = inputAge.value;
    const gender = inputSelectGender.value;
    const description = descriptionTextArea.value;

    if (firstName && lastName && age && gender && description) {
      const newLi = createElements('li', '', false, ulInProgress, '', ['each-line']);
      const article = createElements('article', '', false, newLi);
      const h4Name = createElements('h4', `${firstName} ${lastName}`, false, article);
      const genderAgePara = createElements('p', `${gender}, ${age}`, false, article);
      const descriptionPara = createElements('p', `Dish description: ${description}`, false, article);
      const editBtn = createElements('button', 'Edit', false, article, '', ['edit-btn']);
      const completeBtn = createElements('button', 'Mark as complete', false, article, '', ['complete-btn']);
      form.reset();
      count++;
      spanProgressCount.textContent = count;
      editBtn.addEventListener('click', getInfoInInputFields)
      completeBtn.addEventListener('click', completeTask)
    }

    function getInfoInInputFields() {
      inputFirstName.value = firstName;
      inputLastName.value = lastName;
      inputAge.value = age;
      inputSelectGender.value = gender;
      descriptionTextArea.value = description;
      ulInProgress.children[1].remove();
      count--;
      spanProgressCount.textContent = count;
    }

    function completeTask() {
      ulFinished.appendChild(ulInProgress.children[1]);
      count--;
      spanProgressCount.textContent = count;
      ulFinished.querySelector('.edit-btn').remove();
      ulFinished.querySelector('.complete-btn').remove();
      const clearBtn = document.getElementById('clear-btn');
      clearBtn.addEventListener('click', () => {
        ulFinished.children[0].remove();
      })
    }

  }

  function createElements(type, contentOrValue, useInnerHTML, parentNode, id, classes, attributes) {
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
