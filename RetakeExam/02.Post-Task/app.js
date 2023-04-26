window.addEventListener("load", solve);

function solve() {

    const inputSelectors = {
        titleInput: document.getElementById('task-title'),
        categoryInput: document.getElementById('task-category'),
        contentInput: document.getElementById('task-content')
    }

    const otherSelectors = {
        publishBtn: document.getElementById('publish-btn'),
        ulReviewList: document.getElementById('review-list'),
        ulPublishedList: document.getElementById('published-list'),
        form: document.querySelector('#newPost form')
    }

    otherSelectors.publishBtn.addEventListener('click', createTaskForReview);

    function createTaskForReview(e) {
        e.preventDefault();
        const title = inputSelectors.titleInput.value;
        const category = inputSelectors.categoryInput.value;
        const content = inputSelectors.contentInput.value;
        if (title && category && content) {
            const newLi = createElements('li', '', false, otherSelectors.ulReviewList, '', ['rpost']);
            const article = createElements('article', '', false, newLi);
            const titleH4 = createElements('h4', title, false, article);
            const categoryP = createElements('p', `Category: ${category}`, false, article);
            const contentP = createElements('p', `Content: ${content}`, false, article);
            const editBtn = createElements('button', 'Edit', false, newLi, '', ['action-btn', 'edit']);
            const postBtn = createElements('button', 'Post', false, newLi, '', ['action-btn', 'post']);

            editBtn.addEventListener('click', () => {
                inputSelectors.titleInput.value = title;
                inputSelectors.categoryInput.value = category;
                inputSelectors.contentInput.value = content;
                newLi.remove();
            });

            postBtn.addEventListener('click', () => {
                otherSelectors.ulPublishedList.appendChild(newLi);
                editBtn.remove();
                postBtn.remove();
            })
        }
        otherSelectors.form.reset();
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