l
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1976eb204mshed531a01eb0e2ddp195ff9jsn46d950e134a3',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/title/find?q=game', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
