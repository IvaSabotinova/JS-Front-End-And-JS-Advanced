window.addEventListener('load', solve);

function solve() {

    const genreInput = document.getElementById('genre');
    const songNameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const btnAdd = document.getElementById('add-btn');
    const allHitsContainer = document.querySelector('#all-hits > .all-hits-container');
    const paraTotalLikes = document.querySelector('#total-likes > .likes > p');
    const savedContainer = document.querySelector('#saved-hits > .saved-container');
    const form = document.querySelector('form');
    let likes = 0;
    btnAdd.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();
        const genre = genreInput.value;
        const songName = songNameInput.value;
        const authorName = authorInput.value;
        const date = dateInput.value;
        if (genre && songName && authorName && date) {
            const hitsInfoContainer = createElements('div', '', false, allHitsContainer, '', ['hits-info']);
            const image = createElements('img', '', false, hitsInfoContainer, '', '', { src: './static/img/img.png' });
            const h2Genre = createElements('h2', `Genre: ${genre}`, false, hitsInfoContainer);
            const h2Name = createElements('h2', `Name: ${songName}`, false, hitsInfoContainer);
            const h2Author = createElements('h2', `Author: ${authorName}`, false, hitsInfoContainer);
            const h2Date = createElements('h3', `Date: ${date}`, false, hitsInfoContainer);
            const saveBtn = createElements('button', 'Save song', false, hitsInfoContainer, null, ['save-btn']);
            const likeBtn = createElements('button', 'Like song', false, hitsInfoContainer, null, ['like-btn']);
            const deleteBtn = createElements('button', 'Delete', false, hitsInfoContainer, null, ['delete-btn']);
            form.reset();

            likeBtn.addEventListener('click', () => {
                likes++;
                paraTotalLikes.textContent = `Total Likes: ${likes}`;
                likeBtn.disabled = true;
            });

            saveBtn.addEventListener('click', () => {
                const songInfoDiv = saveBtn.parentNode;
                const divHitsInfo = savedContainer.appendChild(songInfoDiv);
                const buttonSave = divHitsInfo.querySelector('.save-btn');
                const buttonLike = divHitsInfo.querySelector('.like-btn');
                buttonSave.remove();
                buttonLike.remove();

            });

            deleteBtn.addEventListener('click', () => {
                const containerToDelete = deleteBtn.parentNode;
                containerToDelete.remove();
            });
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
    };
}