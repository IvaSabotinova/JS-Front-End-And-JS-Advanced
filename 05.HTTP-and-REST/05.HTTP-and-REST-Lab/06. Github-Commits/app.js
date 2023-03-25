async function loadCommits() {
   const BASE_URL = 'https://api.github.com/repos/';
   const username = document.getElementById('username');  
   const repo = document.getElementById('repo');
   const ul = document.getElementById('commits');

   try {
    const allCommits = await fetch(`${BASE_URL}${username.value}/${repo.value}/commits`);
    const allCommitsAsJson = await allCommits.json();
    allCommitsAsJson.forEach(x=> {
        const newLi = document.createElement('li');
        newLi.textContent = `${x.commit.author.name}: ${x.commit.message}`;
        ul.appendChild(newLi);
    })
   }catch (error) {
    const newLi = document.createElement('li');
    newLi.textContent = `Error: ${error.message} (Not found)`
    ul.appendChild(newLi);  

   }
}

// function loadCommits() {
//     const BASE_URL = 'https://api.github.com/repos/';
//     const username = document.getElementById('username');
//     const repo = document.getElementById('repo');
//     const ul = document.getElementById('commits');

//     fetch(`${BASE_URL}${username.value}/${repo.value}/commits`)
//         .then((response) => response.json())
//         .then((result) => {
//             result.forEach(result => {
//                 const newLi = document.createElement('li');
//                 newLi.textContent = `${result.commit.author.name}: ${result.commit.message}`;
//                 ul.appendChild(newLi);
//             })
//         })
//         .catch((error)=> {           
//             const newLi = document.createElement('li');
//             newLi.textContent = `Error: ${error.message} (Not found)`
//             ul.appendChild(newLi);
//         })
//     }
