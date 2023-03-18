function create(words) {
   const div = document.getElementById('content');
   for (const word of words) {
      const newPara = document.createElement('p');
      newPara.textContent = word;
      newPara.style.display = 'none';
      const newDiv = document.createElement('div');
      newDiv.appendChild(newPara);
      newDiv.addEventListener('click', showPara);  
      div.appendChild(newDiv)
   }
   function showPara(e) {
      const p = e.currentTarget.children[0];
      p.style.display = 'block';
   }

}
