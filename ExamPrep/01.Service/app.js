window.addEventListener('load', solve);

function solve() {
    const inputSelectors = {
        productType: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    }

    const otherSelectors = {
        sendBtn: document.querySelector('#right button[type="submit"]'),
        receivedOrdersSection: document.getElementById('received-orders'),
        form: document.querySelector('#right form'),
        completedOrdersSection: document.getElementById('completed-orders'),
        clearBtn: document.querySelector('#completed-orders .clear-btn')
    }

    otherSelectors.sendBtn.addEventListener('click', loadReceivedOrders);

    function loadReceivedOrders(event) {
        if (event) {
            event.preventDefault();
        }
        const productType = inputSelectors.productType.value;
        const description = inputSelectors.description.value;
        const clientName = inputSelectors.clientName.value;
        const clientPhone = inputSelectors.clientPhone.value;
        if (description && clientName && clientPhone) {

            const containerDiv = createElements('div', '', false, otherSelectors.receivedOrdersSection, '', ['container']);
            const productTypeH2 = createElements('h2', `Product type for repair: ${productType}`, false, containerDiv);
            const clientNamePhoneH3 = createElements('h3', `Client information: ${clientName}, ${clientPhone}`, false, containerDiv);
            const descriptionH4 = createElements('h4', `Description of the problem: ${description}`, false, containerDiv);
            const startBtn = createElements('button', `Start repair`, false, containerDiv, '', ['start-btn']);
            const finishBtn = createElements('button', `Finish repair`, false, containerDiv, '', ['finish-btn']);
            otherSelectors.form.reset();
            finishBtn.disabled = true;

            startBtn.addEventListener('click', () => {
                startBtn.disabled = true;
                finishBtn.disabled = false;
            });

            finishBtn.addEventListener('click', () => {
                otherSelectors.completedOrdersSection.appendChild(containerDiv);
                startBtn.remove();
                finishBtn.remove();
            })

        }

        otherSelectors.clearBtn.addEventListener('click', () => {
            const containerDivElements = Array.from(otherSelectors.completedOrdersSection.querySelectorAll('.container'));
            containerDivElements.forEach(x => x.remove());
        })


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