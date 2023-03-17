function focused() {
   const inputs = document.querySelectorAll('input[type="text"]');
   for (let index = 0; index < inputs.length; index++) {
      inputs[index].addEventListener('focus', focus);
      inputs[index].addEventListener('blur', blur);
   }
   function focus(e) {
      e.currentTarget.parentElement.classList.add('focused');
   }

   function blur(e) {
      e.currentTarget.parentElement.classList.remove('focused');
   }
}

