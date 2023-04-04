window.addEventListener('load', solve);

function solve() {
    const inputFirstName = document.getElementById('first-name');
    const inputLastName = document.getElementById('last-name');
    const inputPeopleCount = document.getElementById('people-count');
    const inputFromDate = document.getElementById('from-date');
    const inputDaysCount = document.getElementById('days-count');
    const btnNext = document.getElementById('next-btn');
    const ulPreviewTicket = document.querySelector('#info-ticket .ticket-info-list');
    const ulConfirmTicket = document.querySelector('#confirm-ticket-section .confirm-ticket');
    const mainDiv = document.getElementById('main');
    const body = document.getElementById('body');
    const form = document.querySelector('#append-ticket .container-text > form');

    btnNext.addEventListener('click', ticketPreview);

    function ticketPreview() {
        const firstName = inputFirstName.value;
        const lastName = inputLastName.value;
        const peopleCount = inputPeopleCount.value;
        const fromDate = inputFromDate.value;
        const daysCount = inputDaysCount.value;
        if (firstName && lastName && peopleCount && fromDate && daysCount) {
            const newLi = createElements('li', '', false, ulPreviewTicket, '', ['ticket']);
            const newArticle = createElements('article', '', false, newLi);
            const h3Name = createElements('h3', `Name: ${firstName} ${lastName}`, false, newArticle);
            const fromDatePara = createElements('p', `From date: ${fromDate}`, false, newArticle);
            const daysCountPara = createElements('p', `For ${daysCount} days`, false, newArticle);
            const peopleCountPara = createElements('p', `For ${peopleCount} people`, false, newArticle);
            const editButton = createElements('button', 'Edit', false, newLi, '', ['edit-btn']);
            const continueButton = createElements('button', 'Continue', false, newLi, '', ['continue-btn']);
            btnNext.disabled = true;
            form.reset()

            editButton.addEventListener('click', () => {
                inputFirstName.value = firstName;
                inputLastName.value = lastName;
                inputPeopleCount.value = peopleCount;
                inputFromDate.value = fromDate;
                inputDaysCount.value = daysCount;
                newLi.remove();
                btnNext.disabled = false;

            })

            continueButton.addEventListener('click', () => {
                ulConfirmTicket.appendChild(newLi);
                editButton.remove();
                continueButton.remove();
                const confirmBtn = createElements('button', 'Confirm', false, newLi, '', ['confirm-btn']);
                const cancelBtn = createElements('button', 'Cancel', false, newLi, '', ['cancel-btn']);
                cancelBtn.addEventListener('click', () => {
                    newLi.remove();
                    btnNext.disabled = false;
                })

                confirmBtn.addEventListener('click', () => {
                    mainDiv.remove();
                    body.appendChild(createElements('h1', 'Thank you, have a nice day!', false, body, 'thank-you'));
                    const btnBack = createElements('button', 'Back', false, body, 'back-btn');
                    body.appendChild(btnBack);
                    btnBack.addEventListener('click', () => {
                        window.location.reload();
                    });

                })
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




