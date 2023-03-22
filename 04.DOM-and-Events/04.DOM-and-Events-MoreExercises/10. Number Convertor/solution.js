function solve() {
    const select = document.getElementById('selectMenuTo');
    const optionOne = document.createElement('option');
    const optionTwo = document.createElement('option');
    optionOne.value = 'binary';
    optionTwo.value = 'hexadecimal';
    optionOne.textContent = 'Binary';
    optionTwo.textContent = 'Hexadecimal';
    select.appendChild(optionOne);
    select.appendChild(optionTwo);
    const button = document.querySelector('#container > button');
    button.addEventListener('click', convert);

    function convert() {      
        const input = document.getElementById('input');
        const footerOutput = document.getElementById('result');
        let result = Number(input.value);
        if (select.value === 'binary') {
            result = Number(input.value).toString(2);
        }
        else if (select.value === 'hexadecimal') {
            result = Number(input.value).toString(16).toUpperCase();
        }       
        footerOutput.value = result;       
    }
}
