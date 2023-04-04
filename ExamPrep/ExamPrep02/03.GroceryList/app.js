function groceryList() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    const inputProduct = document.getElementById('product');
    const inputCount = document.getElementById('count');
    const inputPrice = document.getElementById('price');
    const tableBody = document.getElementById('tbody');
    const addBtn = document.getElementById('add-product');
    const updateBtn = document.getElementById('update-product');
    const loadBtn = document.getElementById('load-product');

    const form = document.querySelector('#addForm .list');

    loadBtn.addEventListener('click', loadAllProducts);
    addBtn.addEventListener('click', addProduct);

    function loadAllProducts(event) {
        if (event) {
            event.preventDefault();
        }
        tableBody.innerHTML = '';
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                for (const { product, count, price, _id } of Object.values(data)) {

                    const newRow = createElements('tr', '', false, tableBody, _id);
                    const nameTd = createElements('td', product, false, newRow, '', ['name']);
                    const countTd = createElements('td', count, false, newRow, '', ['count-product']);
                    const priceTd = createElements('td', price, false, newRow, '', ['product-price']);
                    const buttonTd = createElements('td', '', false, newRow, '', ['btn']);
                    const btnUpdate = createElements('button', 'Update', false, buttonTd, '', ['update']);
                    const btnDelete = createElements('button', 'Delete', false, buttonTd, '', ['delete']);

                    btnDelete.addEventListener('click', () => {

                        const id = btnDelete.parentNode.parentNode.id;

                        httpHeaders = {
                            method: 'DELETE'
                        }
                        fetch(`${BASE_URL}${id}`, httpHeaders)
                            .then(() => loadAllProducts())
                            .catch((err) => console.error(err));
                        btnDelete.parentNode.parentNode.remove();
                    })

                    btnUpdate.addEventListener('click', () => {
                        inputProduct.value = product;
                        inputCount.value = count;
                        inputPrice.value = price;
                        const id = btnUpdate.parentNode.parentNode.id;
                        addBtn.disabled = true;
                        updateBtn.disabled = false;
                        updateBtn.addEventListener('click', (event) => {
                            event.preventDefault();
                            httpHeaders = {
                                method: 'PATCH',
                                body: JSON.stringify({
                                    product: inputProduct.value,
                                    count: inputCount.value,
                                    price: inputPrice.value
                                })
                            }
                            fetch(`${BASE_URL}${id}`, httpHeaders)
                                .then(() => loadAllProducts())
                                .catch((err) => console.error(err));
                            form.reset();
                        })

                    })
                }
            })
            .catch((err) => console.error(err));

    }

    function addProduct(event) {
        event.preventDefault();
        const newProduct = inputProduct.value;
        const count = inputCount.value;
        const price = inputPrice.value;
        if (newProduct && count && price) {
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({
                    product: newProduct,
                    count: count,
                    price: price
                }),
            }
            fetch(BASE_URL, httpHeaders)
                .then(() => {
                    loadAllProducts();
                    form.reset();
                })
                .catch((err) => console.error(err));
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

groceryList();

