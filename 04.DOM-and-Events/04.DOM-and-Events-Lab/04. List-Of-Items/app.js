function addItem() {
    const newLi = document.createElement('li');
    const ulItems = document.getElementById('items');
    const newText = document.getElementById('newItemText');
    newLi.textContent = newText.value;
    ulItems.appendChild(newLi);
    newText.value = '';
}

