function solve() {

  const inputSelectors = {
    input: document.getElementById('input')
  }

  const otherSelectors = {
    formatBtn: document.getElementById('formatItBtn'),
    output: document.getElementById('output'),
  }


  const text = inputSelectors.input.value;
  if (text) {

    const splittedText = text.split('.');
    const trimmedText = splittedText.map(x => x.trimStart()).filter(x => x !== '');

    while (trimmedText.length > 0) {

      const currentParaText = trimmedText.splice(0, 3).join('. ');
      otherSelectors.output.innerHTML += `<p>${currentParaText + '.'}</p>`;

    }
    inputSelectors.input.value = '';
  }

//Another solution

  // const textArea = document.getElementById('input');
  // const output = document.getElementById('output');

  // const sentences = textArea.value.toString().split('.').filter(x => x !== '');

  // while (sentences.length > 0) {
  //   let threeParas = sentences.splice(0, 3).map(x => x.trimStart());
  //   let threeParasAsString = threeParas.join('. ') + '.';
  //   let newHTMLPara = document.createElement('p');
  //   newHTMLPara.textContent = threeParasAsString;
  //   output.appendChild(newHTMLPara);

  // }

}



