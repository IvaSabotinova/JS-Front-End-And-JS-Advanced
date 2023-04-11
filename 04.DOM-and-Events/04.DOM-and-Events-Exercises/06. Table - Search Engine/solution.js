function solve() {

   const inputSelectors = {
      searchField: document.getElementById('searchField'),
   }

   const otherSelectors = {
      searchBtn: document.getElementById('searchBtn'),
      allTableRows: document.getElementsByTagName('tr'),
      allTableCells: document.querySelectorAll('tbody > tr >td'),

   }
   otherSelectors.searchBtn.addEventListener('click', searchWord);

   function searchWord() {
      const searchedWord = inputSelectors.searchField.value;
      if (searchedWord) {
         Array.from(otherSelectors.allTableRows).forEach(x => x.classList.remove('select'));
         for (const tableCell of Array.from(otherSelectors.allTableCells)) {
            const currentRow = tableCell.parentElement;
            if (tableCell.textContent.toLocaleLowerCase().includes(searchedWord.toLowerCase())) {
               currentRow.classList.add('select');

            }
         }
      }
      inputSelectors.searchField.value = '';
   }

   //Another solution

   // document.querySelector('#searchBtn').addEventListener('click', onClick);  

   // function onClick() {
   //    const rows = Array.from(document.querySelectorAll('tbody tr'));
   //    const searchField = document.getElementById('searchField');

   //    for (const row of rows) {
   //       const trimmedRow = row.textContent.trim();
   //       if (row.classList.contains('select')) {
   //          row.classList.remove('select')
   //       }
   //       if (trimmedRow.includes(searchField.value) && searchField.value !== '') {
   //          row.classList.add('select')
   //       }

   //    }
   //    searchField.value = '';
   // }
}
