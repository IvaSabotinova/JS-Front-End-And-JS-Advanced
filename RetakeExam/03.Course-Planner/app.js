
const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

const inputSelectors = {
    titleInput: document.getElementById('course-name'),
    typeInput: document.getElementById('course-type'),
    descriptionInput: document.getElementById('description'),
    teacherNameInput: document.getElementById('teacher-name'),
}

const otherSelectors = {
    addCourseBtn: document.getElementById('add-course'),
    loadCoursesBtn: document.getElementById('load-course'),
    editCourseBtn: document.getElementById('edit-course'),
    listDiv: document.getElementById('list'),
    form: document.querySelector('#form form')
}

let courses = [];
let editCourseId = null;
otherSelectors.loadCoursesBtn.addEventListener('click', loadAllCourses);
otherSelectors.addCourseBtn.addEventListener('click', addCourse);
otherSelectors.editCourseBtn.addEventListener('click', editCourse)

function loadAllCourses(e) {
    if (e) {
        e.preventDefault();
    }
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
            otherSelectors.listDiv.innerHTML = '';
            courses = Object.values(data);
            for (const { description, teacher, title, type, _id } of Object.values(data)) {
                const containerDiv = createElements('div', '', false, otherSelectors.listDiv, _id, ['container']);
                const titleH2 = createElements('h2', title, false, containerDiv);
                const teacherH3 = createElements('h3', teacher, false, containerDiv);
                const typeH3 = createElements('h3', type, false, containerDiv);
                const descriptionH4 = createElements('h4', description, false, containerDiv);
                const editBtn = createElements('button', 'Edit Course', false, containerDiv, '', ['edit-btn']);
                const finishBtn = createElements('button', 'Finish Course', false, containerDiv, '', ['finish-btn']);

                editBtn.addEventListener('click', loadCourseForEdit);
                finishBtn.addEventListener('click', deleteCourse);
            }
        })
        .catch((err) => console.error(err))
}
function addCourse(e) {
    if (e) {
        e.preventDefault();
    }

    const title = inputSelectors.titleInput.value;
    const type = inputSelectors.typeInput.value;
    const description = inputSelectors.descriptionInput.value;
    const teacher = inputSelectors.teacherNameInput.value;
    if (title && type && description && teacher) {
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                type: type,
                description: description,
                teacher: teacher
            })
        }
        fetch(BASE_URL, httpHeaders)
            .then(() => loadAllCourses());
        otherSelectors.form.reset();
    }
}

function loadCourseForEdit(e) {
    if (e) {
        e.preventDefault();
    }

    const id = e.currentTarget.parentNode.id;
    editCourseId = id;
    const course = courses.find(x => x._id === id);
    inputSelectors.titleInput.value = course.title;
    inputSelectors.typeInput.value = course.type;
    inputSelectors.descriptionInput.value = course.description;
    inputSelectors.teacherNameInput.value = course.teacher;
    e.currentTarget.parentNode.remove();
    otherSelectors.editCourseBtn.disabled = false;
    otherSelectors.addCourseBtn.disabled = true;
}

function editCourse(e) {
    if (e) {
        e.preventDefault();
    }

    const httpHeaders = {
        method: 'PUT',
        body: JSON.stringify({
            title: inputSelectors.titleInput.value,
            type: inputSelectors.typeInput.value,
            description: inputSelectors.descriptionInput.value,
            teacher: inputSelectors.teacherNameInput.value,
            _id: editCourseId
        })
    }
    fetch(`${BASE_URL}${editCourseId}`, httpHeaders)
        .then(() => loadAllCourses());
    otherSelectors.editCourseBtn.disabled = true;
    otherSelectors.addCourseBtn.disabled = false;
    otherSelectors.form.reset();
}

function deleteCourse(e) {
    if (e) {
        e.preventDefault();
    }
    const httpHeaders = {
        method: 'DELETE'
    }
    const id = e.currentTarget.parentNode.id;
    fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadAllCourses())
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
}