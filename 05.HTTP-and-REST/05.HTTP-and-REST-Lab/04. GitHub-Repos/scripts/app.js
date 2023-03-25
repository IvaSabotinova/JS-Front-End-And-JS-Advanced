function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   fetch(BASE_URL, {method: 'GET'})
   .then((res) => res.text())
   .then((res)=>{
const divRes = document.getElementById('res');
divRes.textContent = res;
   })
   .catch((err)=> console.log(err));
}