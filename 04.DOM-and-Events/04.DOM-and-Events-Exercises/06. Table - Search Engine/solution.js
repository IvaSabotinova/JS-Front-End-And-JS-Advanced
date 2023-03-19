function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);  

   function onClick() {
      const rows = Array.from(document.querySelectorAll('tbody tr'));
      const searchField = document.getElementById('searchField');
     
      for (const row of rows) {
         const trimmedRow = row.textContent.trim();
         if (row.classList.contains('select')) {
            row.classList.remove('select')
         }
         if (trimmedRow.includes(searchField.value) && searchField.value !== '') {
            row.classList.add('select')
         }
         
      }
      searchField.value = '';
   }
}
