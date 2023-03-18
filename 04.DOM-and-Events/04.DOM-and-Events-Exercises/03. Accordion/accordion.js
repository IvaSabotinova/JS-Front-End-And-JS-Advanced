function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const divExtra = document.getElementById('extra');

    if (btn.textContent === 'More') {
        divExtra.style.display = 'block';
        btn.textContent = 'Less'
    }
    else if (btn.textContent == 'Less') {

        divExtra.style.display = 'none';
        btn.textContent = 'More'
    }
}