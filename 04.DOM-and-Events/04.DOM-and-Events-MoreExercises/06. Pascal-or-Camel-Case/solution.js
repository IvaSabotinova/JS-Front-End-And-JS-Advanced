function solve() {
  const input = document.getElementById('text').value.split(' ');
  const namingConvention = document.getElementById('naming-convention').value;
  const span = document.getElementById('result');
  let firstWord = input.shift();
  let restText = '';
  for (const word of input) {
    restText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  let output = '';

  if (namingConvention === 'Camel Case') {
    output += firstWord.toLowerCase() + restText;
  }
  else if (namingConvention === 'Pascal Case') {

    output += firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase() + restText;
  }
  else {
    output = 'Error!';
  }

  span.textContent = output;

}