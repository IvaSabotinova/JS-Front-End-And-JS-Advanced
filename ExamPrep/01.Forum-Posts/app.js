window.addEventListener("load", solve);

function solve() {

  const inputSelectors = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content'),
  }
  const otherSelectors = {
    publishBtn: document.getElementById('publish-btn'),
    ulReviewList: document.getElementById('review-list'),
    ulPublishedList: document.getElementById('published-list'),
    clearBtn: document.getElementById('clear-btn'),
    form: document.querySelector('#newPost .newPostContent'),
  }

  let inputsObj = {};

  otherSelectors.publishBtn.addEventListener('click', getFormInfo);

  function getFormInfo() {

    const areValid = Object.values(inputSelectors).every(x => x.value.trim() !== '');
    if (areValid) {
      for (const key in inputSelectors) {
        inputsObj[key] = inputSelectors[key].value;
      }
      const newLi = createElements('li', '', false, otherSelectors.ulReviewList, '', ['rpost']);
      const article = createElements('article', '', false, newLi);
      const h4title = createElements('h4', inputSelectors.title.value, false, article);
      const categoryPara = createElements('p', `Category: ${inputSelectors.category.value}`, false, article);
      const contentPara = createElements('p', `Content: ${inputSelectors.content.value}`, false, article);
      const editBtn = createElements('button', 'Edit', false, newLi, '', ['action-btn', 'edit']);
      const approveBtn = createElements('button', 'Approve', false, newLi, '', ['action-btn', 'approve']);

      otherSelectors.form.reset();

      editBtn.addEventListener('click', () => {
        for (const key in inputsObj) {
          inputSelectors[key].value = inputsObj[key];
          newLi.remove();
        }
      });

      approveBtn.addEventListener('click', () => {
        otherSelectors.ulPublishedList.appendChild(newLi);
        editBtn.remove();
        approveBtn.remove();
      });

      otherSelectors.clearBtn.addEventListener('click', () => {
        otherSelectors.ulPublishedList.children[0].remove();
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
