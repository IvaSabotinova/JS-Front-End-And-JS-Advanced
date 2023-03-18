function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(x => x.addEventListener('click', toggleInfo));

    function toggleInfo(e) {
        const btn = e.currentTarget;
        const divProfile = btn.parentElement;
        const unlockRadio = divProfile.querySelector('input[value="unlock"]');
        const divInfoToShow = divProfile.getElementsByTagName('div')[0];

        if (unlockRadio.checked) {

            if (btn.textContent === 'Show more') {
                divInfoToShow.style.display = 'block'
                btn.textContent = 'Hide it';

            }
            else {
                btn.textContent = 'Show more';
                divInfoToShow.style.display = 'none'
            }
        }
    }
}