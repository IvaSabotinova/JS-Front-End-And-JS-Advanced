window.addEventListener("load", solve);

function solve() {
  const tableBody = document.getElementById('table-body');
  const makeInput = document.getElementById('make');
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');
  const fuelTypeSelect = document.getElementById('fuel');
  const originalCostInput = document.getElementById('original-cost');
  const sellingPriceInput = document.getElementById('selling-price');
  const publishBtn = document.getElementById('publish');
  const form = document.querySelector('form');
  let profit = 0;

  publishBtn.addEventListener('click', publish);

  function publish(event) {
    if (event) {
      event.preventDefault();
    }
    const make = makeInput.value;
    const model = modelInput.value;
    const year = yearInput.value;
    const fuelType = fuelTypeSelect.value;
    const originalCost = originalCostInput.value;
    const sellingPrice = sellingPriceInput.value;

    if (make && model && year && fuelType && originalCost && sellingPrice && Number(sellingPrice) > Number(originalCost)) {
      const newRow = createElements('tr', '', false, tableBody, '', ['row']);
      const makeTd = createElements('td', make, false, newRow);
      const modelTd = createElements('td', model, false, newRow);
      const yearTd = createElements('td', year, false, newRow);
      const fuelTypeTd = createElements('td', fuelType, false, newRow);
      const originalCostTd = createElements('td', originalCost, false, newRow);
      const sellingPriceTd = createElements('td', sellingPrice, false, newRow);
      const buttonsTd = createElements('td', '', false, newRow);
      const editBtn = createElements('button', 'Edit', false, buttonsTd, '', ['action-btn', 'edit']);
      const sellBtn = createElements('button', 'Sell', false, buttonsTd, '', ['action-btn', 'sell']);
      form.reset();
      yearInput.value = '';
      fuelTypeSelect.value = '';

      editBtn.addEventListener('click', () => {
        makeInput.value = make;
        modelInput.value = model;
        yearInput.value = year;
        fuelTypeSelect.value = fuelType;
        originalCostInput.value = originalCost;
        sellingPriceInput.value = sellingPrice;
        newRow.remove();

      });

      sellBtn.addEventListener('click', () => {
        const ulCarList = document.getElementById('cars-list');
        const profitInfoStrong = document.getElementById('profit');
        const newLi = createElements('li', '', false, ulCarList, '', ['each-list']);
        const makeModelSpan = createElements('span', `${make} ${model}`, false, newLi);
        const yearSpan = createElements('span', year, false, newLi);
        const priceDifference = Number(sellingPrice) - Number(originalCost);
        const priceDiffSpan = createElements('span', priceDifference, false, newLi);
        profit += priceDifference;
        profitInfoStrong.textContent = profit.toFixed(2);
        newRow.remove();
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
