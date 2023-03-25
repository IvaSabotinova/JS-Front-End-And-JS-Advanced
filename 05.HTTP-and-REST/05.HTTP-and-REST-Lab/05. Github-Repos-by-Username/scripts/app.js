async function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/';
	const inputUsername = document.getElementById('username').value;

	const ul = document.getElementById('repos');	

	try {
		const allUserRepos = await fetch(`${BASE_URL}${inputUsername}/repos`);
		const allData = await allUserRepos.json();		
		allData.forEach(x=>{			
			const newLi = document.createElement('li');
			const anchor = document.createElement('a');
			let link = document.createTextNode(`${x.full_name}`);			
			anchor.appendChild(link);
			anchor.href = x.html_url;			
			newLi.appendChild(anchor);
			ul.appendChild(newLi);
		});
		ul.removeChild(ul.firstElementChild)
		
	} catch (error) {
		const newLi = document.createElement('li');
		newLi.textContent = `${error.message}`;
		ul.appendChild(newLi);
		ul.removeChild(ul.firstElementChild);
	}
}





