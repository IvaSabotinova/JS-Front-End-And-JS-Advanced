function solve() {
   const buttonsAdd = Array.from(document.querySelectorAll('.product-add > .add-product'));
   const textArea = Array.from(document.getElementsByTagName('textarea'))[0];
   const buttonCalculate = document.querySelector('.shopping-cart > .checkout');  
   let allProducts = new Set();
   let totalPrice = 0;
   let output = '';

   for (const button of buttonsAdd) {
      button.addEventListener('click', addToCart)
   }

   buttonCalculate.addEventListener('click', calculate);

   function addToCart(e) {
      const btn = e.currentTarget;
      const mainProductDiv = btn.parentElement.parentElement;
      const productName = mainProductDiv.children[1].children[0].textContent;
      const productPrice = Number(mainProductDiv.children[3].textContent);
      output += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      allProducts.add(productName);
      totalPrice += productPrice;
      textArea.value = output;

   }

   function calculate() {
      output += `You bought ${new Array(...allProducts).join(', ')} for ${totalPrice.toFixed(2)}.`;
      textArea.value = output;

      buttonsAdd.forEach(x => x.disabled = true);
      buttonCalculate.disabled = true;
   }
}

