function generateReport() {
  let inputs = Array.from(document.getElementsByTagName('input'));
  let dataRows = Array.from(document.querySelectorAll('tbody > tr'));
  let output = document.getElementById('output');
  let result = [];

  for (let index = 0; index < dataRows.length; index++) {
    const cells = dataRows[index].children;
    let obj = {};
    for (let j = 0; j < cells.length; j++) {
      let key = inputs[j].name;
      if (inputs[j].checked) {

        const cellContent = cells[j].textContent;
        obj[key] = cellContent;

      }
    }
    result.push(obj)
  }
  output.textContent = JSON.stringify(result);
}

