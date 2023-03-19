function solve() {
  const [textAreaInput, textAreaOutput] = Array.from(document.getElementsByTagName('textarea'));
  const [buttonGenerate, buttonBuy] = Array.from(document.getElementsByTagName('button'));
  const tBody = document.getElementsByTagName('tbody')[0];

  buttonGenerate.addEventListener('click', generateRows);
  buttonBuy.addEventListener('click', generateOutput);

  function generateOutput() {
    const inputs = Array.from(document.querySelectorAll('input:checked'));
    let names = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;
    for (const input of inputs) {
      const currentRow = input.parentElement.parentElement;
      const [_img, name, price, decFactor, _mark] = Array.from(currentRow.children);
      names.push(name.children[0].textContent);
      totalPrice += Number(price.children[0].textContent);
      totalDecorationFactor += Number(decFactor.children[0].textContent);
    }
    textAreaOutput.value += `Bought furniture: ${names.join(', ')}\n`;
    textAreaOutput.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textAreaOutput.value += `Average decoration factor: ${(totalDecorationFactor / inputs.length)}`;


  }

  function generateRows() {
    const inputContent = JSON.parse(textAreaInput.value);

    for (const { img, name, price, decFactor } of inputContent) {
      const newTr = createElements('tr', '', tBody);

      const tdImg = createElements('td', '', newTr);
      createElements('img', '', tdImg, '', '', { src: img });

      const tdName = createElements('td', '', newTr);
      createElements('p', name, tdName);

      const tdPrice = createElements('td', '', newTr);
      createElements('p', price, tdPrice);

      const tdDecFactor = createElements('td', '', newTr);
      createElements('p', decFactor, tdDecFactor);

      const tdMark = createElements('td', '', newTr);
      createElements('input', '', tdMark, '', '', { type: 'checkbox' });
    }
  }

  function createElements(type, contentOrValue, parentNode, id, classes, attributes) {
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

