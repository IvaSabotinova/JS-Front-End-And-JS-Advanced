function editElement(element, match, replacer) {
    const text = element.textContent;
    let output = text.replace(new RegExp(match, 'g' ), replacer);
    element.textContent = output;
}