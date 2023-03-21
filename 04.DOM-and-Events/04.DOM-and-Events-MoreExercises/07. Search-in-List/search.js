function search() {
   
   const liItems = Array.from(document.getElementById('towns').children);
   const searchInput = document.getElementById('searchText').value;
   const result = document.getElementById('result');  
   let matches = 0;
   let output = '';
   for (const liItem of liItems) {
      if (liItem.textContent.includes(searchInput)) {
         liItem.style.textDecoration = 'underline';
         liItem.style.textDecoration = 'bold';
         matches++;
      }
   }

   output = `${matches} matches found`;
   result.textContent += output;
}
