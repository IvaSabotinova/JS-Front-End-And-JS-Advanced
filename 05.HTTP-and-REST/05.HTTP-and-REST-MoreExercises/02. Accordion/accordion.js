function solution() {
    const BASE_URL_LIST = 'http://localhost:3030/jsonstore/advanced/articles/list/';
    const BASE_URl_DETAILS = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const sectionMain = document.getElementById('main');
    let articles = {};
    fetch(BASE_URL_LIST)
        .then((res) => res.json())
        .then((data) => {
            for (const { _id, title } of data) {
                articles[_id] = {};
                articles[_id].title = title;
                const divAccordion = createElements('div', '', sectionMain, '', '', 'accordion');
                const divHead = createElements('div', '', divAccordion, '', '', 'head');
                const span = createElements('span', title, divHead);
                const button = createElements('button', 'MORE', divHead, _id, '', 'button');
                const divExtra = createElements('div', '', divAccordion, '', '', 'extra', { style: 'display:none' });
                button.addEventListener('click', toggleMoreLess);
            }
        })
        .catch((err) => console.error(err));

    function toggleMoreLess(e) {
        fetch(`${BASE_URl_DETAILS}${this.id}`)
            .then((res) => res.json())
            .then((article) => {

                if (this.textContent === 'MORE') {
                    const para = createElements('p', article.content, this.parentElement.parentElement.querySelector('.extra'));
                    this.parentElement.parentElement.querySelector('.extra').style.display = 'block';
                    this.textContent = 'LESS';
                }
                else if (this.textContent === 'LESS'){
                    this.parentElement.parentElement.querySelector('.extra').style.display = 'none';
                    this.textContent = 'MORE';
                }
            })
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

solution();