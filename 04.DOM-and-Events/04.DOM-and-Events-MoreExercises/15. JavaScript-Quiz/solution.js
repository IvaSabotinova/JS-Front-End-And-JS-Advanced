function solve() {
  let rightAnswersContent = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let sections = Array.from(document.getElementsByTagName('section'));
  let rightAnswers = 0;

  let result = document.getElementById('results');
  let outputElement = document.querySelector('#results > li > h1');

  let index = 0;
  Array.from(document.querySelectorAll('p')).map(x => x.addEventListener('click', check));

  function check(e) {
    if (rightAnswersContent.includes(e.currentTarget.textContent)) {
      rightAnswers++;

    }
    sections[index].style.display = 'none';
    if (index === 2) {
      if (rightAnswers === 3) {
        result.style.display = 'block';
        outputElement.textContent = "You are recognized as top JavaScript fan!";

      }
      else {
        result.style.display = 'block';
        outputElement.textContent = `You have ${rightAnswers} right answers`;

      }
    }
    else{
      index++;   
      sections[index].style.display = 'block'
    } 
  }
}




