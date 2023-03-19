function solve() {
  const textArea = document.getElementById('input');
  const output = document.getElementById('output');

  const sentences = textArea.value.toString().split('.').filter(x => x !== '');

  while (sentences.length > 0) {
    let threeParas = sentences.splice(0, 3).map(x => x.trimStart());
    let threeParasAsString = threeParas.join('. ') + '.';
    let newHTMLPara = document.createElement('p');
    newHTMLPara.textContent = threeParasAsString;
    output.appendChild(newHTMLPara);

  }

}



