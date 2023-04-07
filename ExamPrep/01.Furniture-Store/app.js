window.addEventListener('load', solve);

function solve() {
    const inputSelectors = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
    }
    const otherSelectors = {
        addBtn: document.getElementById('add'),
        form: document.getElementsByTagName('form')[0],
        tableBody: document.getElementById('furniture-list'),
        totalPriceTd: document.querySelector('#information tfoot .total-price'),
    }
    let totalProfit = 0.00;
    otherSelectors.addBtn.addEventListener('click', getFurnitureInfo);

    function getFurnitureInfo(event) {
        if (event) {
            event.preventDefault();
        }
        if (inputSelectors.model.value && inputSelectors.description.value && inputSelectors.year.value > 0 && inputSelectors.price.value > 0) {
            
            const model = inputSelectors.model.value;
            const year = inputSelectors.year.value;
            const description = inputSelectors.description.value;
            const price = parseFloat(inputSelectors.price.value).toFixed(2);
            const tableRowInfo = createElements('tr', '', false, otherSelectors.tableBody, '', ['info']);
            const modelTd = createElements('td', model, false, tableRowInfo);
            const priceTd = createElements('td', price, false, tableRowInfo);
            const actionsButtons = createElements('td', '', false, tableRowInfo);
            const moreBtn = createElements('button', 'More Info', false, actionsButtons, '', ['moreBtn']);
            const buyBtn = createElements('button', 'Buy it', false, actionsButtons, '', ['buyBtn']);
            const tableRowHide = createElements('tr', '', false, otherSelectors.tableBody, '', ['hide']);
            const yearTd = createElements('td', `Year: ${year}`, false, tableRowHide);
            const descriptionTd = createElements('td', `Description: ${description}`, false, tableRowHide, '', '', { colspan: "3" });
            otherSelectors.form.reset();
            moreBtn.addEventListener('click', () => {
                if (moreBtn.textContent === 'More Info') {
                    moreBtn.textContent = 'Less Info';
                    tableRowHide.style.display = 'contents';

                }
                else {
                    moreBtn.textContent = 'More Info';
                    tableRowHide.style.display = 'none';
                }
            });

            buyBtn.addEventListener('click', () => {              
                tableRowInfo.remove();
                tableRowHide.remove();
                totalProfit = (Number(totalProfit) + Number(price)).toFixed(2);
                otherSelectors.totalPriceTd.textContent = totalProfit;

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
