let movies = [
	{ id: 1, name: 'BEEKEEPER', populars: 1, views: 1000000, rating: 7, src: 'beekeeper.png' },
	{ id: 2, name: 'Главный герой', populars: 3, views: 2800000, rating: 8, src: 'maingeroi(600-800).jpg' },
	{ id: 3, name: 'Angry Birds 2', populars: 4, views: 4000000, rating: 7.4, src: 'angrybirds2(3_4).png' },
	{ id: 4, name: 'Ёлки 5', populars: 6, views: 1500000, rating: 6, src: 'elki5.png' },
	{ id: 5, name: 'GEMINI', populars: 5, views: 700000, rating: 2.8, src: 'gemini.jpg' },
	{ id: 6, name: 'Зверопой 2', populars: 7, views: 850000, rating: 8.3, src: 'sing2.jpg' },
	{ id: 7, name: 'Я Легенда', populars: 8, views: 950000, rating: 7.9, src: 'IAmLegend.jpg' },
	{ id: 8, name: 'Кунг Фу Панда 4', populars: 9, views: 2000000, rating: 6.7, src: 'KyngFuPanda4(3_4).jpg' },
	{ id: 9, name: 'Барби', populars: 10, views: 7000000, rating: 6.6, src: 'Barbie.jpg' },
	{ id: 10, name: 'Чебурашка', populars: 11, views: 5000000, rating: 7.3, src: 'Cheburaska.jpg' }]


function searchMovie() {
	let sortMovies = document.getElementById('sortMovies').selectedIndex
	switch (sortMovies) {
		case 0:
			movies = movies.sort(function (moviesI, moviesJ) {
				if (moviesI.populars > moviesJ.populars) return 1
				if (moviesI.populars < moviesJ.populars) return -1
				return 0
			})
			break
		case 1:
			movies = movies.sort(function (moviesI, moviesJ) {
				if (moviesI.views > moviesJ.views) return 1
				if (moviesI.views < moviesJ.views) return -1
				return 0
			}).reverse()
			break
		case 2:
			movies = movies.sort(function (moviesI, moviesJ) {
				if (moviesI.rating > moviesJ.rating) return 1
				if (moviesI.rating < moviesJ.rating) return -1
				return 0
			}).reverse()
			break
	}
	const searchMovie = document.getElementById('inputSearchMovie')
	let searchMovies = []
	let numberResult = 1
	let numberArticle = 1
	let colorRating

	for (let i = 0; i < movies.length; i++) {
		let str = movies[i].name.toLowerCase()
		if (str.includes(searchMovie.value.toLowerCase())) {
			if (movies[i].rating >= 6.66) {
                colorRating = 'green'
            }
            else if (movies[i].rating >= 3.33) {
                colorRating = '#FF8C20'
            }
            else {
                colorRating = 'red'
            }

			searchMovies[i] = `<div class="article article${numberArticle} res${numberResult}"><span style=background-color:${colorRating}>${movies[i].rating}</span> <img src="../assets/img/${movies[i].src}" title="${movies[i].name}" alt="${movies[i].name}">  </div>`
			numberResult++
			numberArticle++
		}
		if (numberArticle == 5) numberArticle = 1
	}
	if (searchMovies.length != 0) {
		document.getElementById('archive').innerHTML = searchMovies.join('')
		document.getElementById('notFound').innerHTML = ''
	}
	else {
		document.getElementById('archive').innerHTML = ""
		document.getElementById('notFound').innerHTML = 'Странно, но здесь ничего нет'
	}
}