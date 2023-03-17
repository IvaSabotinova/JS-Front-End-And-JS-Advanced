function deleteByEmail() {
    const inputEmail = document.querySelector('input[name="email"]');
    const allEmails = document.querySelectorAll('td:nth-child(even)');
    const result = document.getElementById('result');
    for (const email of allEmails) {
        if (inputEmail.value === email.textContent) {
            email.parentNode.remove();
            result.textContent = 'Deleted';
            break;
        }
        else {
            result.textContent = 'Not found.';
        }
    }
}