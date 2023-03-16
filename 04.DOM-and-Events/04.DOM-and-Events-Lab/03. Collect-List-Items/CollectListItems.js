function extractText() {
    const items = Array.from(document.querySelectorAll('li'));
    const textarea = document.getElementById('result');
    //items.forEach(x => textarea.value += x.textContent + '\n'); not supported in Judge

    for (const item of items) {
        textarea.textContent += item.textContent + '\n';
    }
}

