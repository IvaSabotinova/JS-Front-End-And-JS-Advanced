function lockedProfile() {
    const profile = document.querySelector('.profile');
    const main = document.querySelector('#main');
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
            main.innerHTML = '';
            for (const { _id, username, email, age } of Object.values(data)) {
                const copyHTML = profile.cloneNode(true);
                const inputs = Array.from(copyHTML.querySelectorAll('input'));
                const button = copyHTML.querySelector('button');
                inputs[2].value = username;
                inputs[3].value = email;
                inputs[4].value = age;
                inputs[4].setAttribute('type', 'email');
                main.appendChild(copyHTML);
                const divToHideAndShow = copyHTML.querySelector('.user1Username');
                divToHideAndShow.style.display = 'none';

                button.addEventListener('click', ShowMoreOrLess);
            }
        }).catch((err) => console.error(err));

    function ShowMoreOrLess(e) {
        const currentDivProfile = e.currentTarget.parentNode;
        const divToHide = currentDivProfile.querySelector('div');
        const inputUnlock = currentDivProfile.querySelector('input[value="unlock"]');

        if (inputUnlock.checked) {
            if (this.textContent === 'Show more') {
                divToHide.style.display = 'block';
                this.textContent = 'Hide it';
            }
            else if (this.textContent === 'Hide it') {
                divToHide.style.display = 'none';
                this.textContent = 'Show more';
            }
        }
    }
}

