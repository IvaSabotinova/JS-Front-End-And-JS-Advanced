function solve() {
    const inputs = Array.from(document.querySelectorAll('input'));
    const btnQuickCheck = Array.from(document.querySelectorAll('button'))[0];
    const btnClear = Array.from(document.querySelectorAll('button'))[1];

    const table = document.querySelector('table');
    const outputPara = document.getElementById('check').children[0];

    btnQuickCheck.addEventListener('click', sudomuCheck);
    btnClear.addEventListener('click', clear);

    function sudomuCheck() {

        let board = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]];

        let isSudomu = true;

        for (let index = 0; index < board.length; index++) {
            let currentRow = board[index];
            let currentCol = board.map(x => x[index]);

            if (currentRow.length !== new Set(currentRow).size || currentCol.length !== new Set(currentCol).size) {
                isSudomu = false;
                break;
            }
        }
        if (isSudomu) {
            table.style.border = '2px solid green';
            outputPara.textContent = 'You solve it! Congratulations!';
            outputPara.style.color = 'green'
        }
        else {
            table.style.border = '2px solid red';
            outputPara.textContent = 'NOP! You are not done yet...';
            outputPara.style.color = 'red'
        }
    }

    function clear() {
        inputs.forEach(x => x.value = '');
        table.style.border = 'none';
        outputPara.textContent = '';
    }
}
