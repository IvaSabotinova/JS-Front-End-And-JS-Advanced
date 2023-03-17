function addItem() {
    const newLi = document.createElement('li');
    const ulItems = document.getElementById('items');
    const newText = document.getElementById('newItemText');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.textContent = '[Delete]';
    anchor.addEventListener('click', deleteItem);
    newLi.textContent = newText.value;
    newLi.appendChild(anchor);
    ulItems.appendChild(newLi);    
    newText.value = '';
   

    function deleteItem(e){
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}