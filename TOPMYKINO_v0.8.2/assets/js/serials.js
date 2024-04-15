let serials = [
    { id: 11, srcfull: 'kitchenfull.jpg', name: 'Кухня', populars: 1, views: 10000000, rating: 8.6, src: 'kitchen.jpg', genres: "Комедия" },
    { id: 12, srcfull: 'RickAndMortyFull.jpg', name: 'Рик и Морти', populars: 2, views: 12000000, rating: 9, src: 'RickAndMorty(3_4).jpg', genres: "Фантастика Комедия Мультфильм" },
    { id: 13, srcfull: "Boy'sWordFull.jpg", name: 'Слово пацана. Кровь на асфальте', populars: 3, views: 7000000, rating: 8.3, src: `Boy'sWord.jpg`, genres: "Драма" },
    { id: 14, srcfull: 'GoodDoctorFull.jpg', name: 'Хороший доктор', populars: 4, views: 6000000, rating: 6.6, src: 'GoodDoctor.jpg', genres: "Драма" },
    { id: 15, srcfull: 'MandalorianFull.jpg', name: 'Мандалорец', populars: 5, views: 5000000, rating: 3.2, src: 'Mandalorian.jpg', genres: "Фантастика" },
    { id: 16, srcfull: 'LokiFull.jpg', name: 'Локи', populars: 6, views: 5500000, rating: 7.7, src: 'Loki.jpg', genres: "Фантастика" },
    { id: 17, srcfull: 'VampireFull.jpg', name: 'Вампиры средней полосы', populars: 7, views: 7000000, rating: 8.3, src: 'Vampire.jpg', genres: "Фантастика Комедия" },
    { id: 18, srcfull: 'NutritionUnitFull.jpg', name: 'Пищеблок', populars: 8, views: 7700000, rating: 7.4, src: 'NutritionUnit.jpg', genres: "Фантастика" },
    { id: 19, srcfull: 'GravityFallsFull.jpg', name: 'Гравити Фолз', populars: 9, views: 0, rating: 9.0, src: 'GravityFalls.jpg', genres: "Фантастика Комедия Мультфильм" },
    { id: 20, srcfull: 'ChernobylFull.jpg', name: 'Чернобыль', populars: 10, views: 0, rating: 8.8, src: 'Chernobyl.jpg', genres: "Драма" },]

let checkboxFantasy = document.getElementById("thing1")
let checkboxCartoon = document.getElementById("thing2")
let checkboxComedy = document.getElementById("thing3")
let checkboxHorror = document.getElementById("thing4")
let checkboxDrama = document.getElementById("thing5")

function searchSerial() {
    let sortSerials = document.getElementById('sortSerials').selectedIndex
    switch (sortSerials) {
        case 0:
            serials = serials.sort(function (serialsI, serialsJ) {
                if (serialsI.populars > serialsJ.populars) return 1
                if (serialsI.populars < serialsJ.populars) return -1
                return 0
            })
            break
        case 1:
            serials = serials.sort(function (serialsI, serialsJ) {
                if (serialsI.views > serialsJ.views) return 1
                if (serialsI.views < serialsJ.views) return -1
                return 0
            }).reverse()
            break
        case 2:
            serials = serials.sort(function (serialsI, serialsJ) {
                if (serialsI.rating > serialsJ.rating) return 1
                if (serialsI.rating < serialsJ.rating) return -1
                return 0
            }).reverse()
            break
    }
    const searchSerial = document.getElementById('inputSearchSerial')
    let searchSerials = []
    let numberResult = 1
    let numberArticle = 1
    let colorRating
    for (let i = 0; i < serials.length; i++) {
        let str = serials[i].name.toLowerCase()
        if (str.includes(searchSerial.value.toLowerCase())) {
            if (serials[i].rating >= 6.66) {
                colorRating = 'green'
            }
            else if (serials[i].rating >= 3.33) {
                colorRating = '#FF8C20'
            }
            else {
                colorRating = 'red'
            }
			if (checkboxFantasy.checked == false && checkboxCartoon.checked == false && checkboxComedy.checked == false && checkboxHorror.checked == false && checkboxDrama.checked == false) {
                searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
				numberResult++
				numberArticle++
			}
			else if (checkboxFantasy.checked == true && checkboxCartoon.checked == true && checkboxComedy.checked == true && checkboxHorror.checked == true && checkboxDrama.checked == true) {
                searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
				numberResult++
				numberArticle++
			}
			else {
				genresArray = serials[i].genres.split(" ")
				for (let j = 0; j < genresArray.length; j++) {
					if (checkboxFantasy.checked) {
						if (checkboxFantasy.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxCartoon.checked) {
						if (checkboxCartoon.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxComedy.checked) {
						if (checkboxComedy.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
					if (checkboxHorror.checked) {
						if (checkboxHorror.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
                    if (checkboxDrama.checked) {
						if (checkboxDrama.value == genresArray[j]) {
							searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}"></a></div>`
							numberResult++
							numberArticle++
							break;
						}
					}
				}
			}
        }
        if (numberArticle == 5) numberArticle = 1
    }
    if (searchSerials.length != 0) {
        document.getElementById('archive').innerHTML = searchSerials.join('')
        document.getElementById('notFound').innerHTML = ''
    }
    else {
        document.getElementById('archive').innerHTML = ""
        document.getElementById('notFound').innerHTML = 'Странно, но здесь ничего нет'
    }

}
$(document).ready(function () {
	$(".selectGenres").click(function () {
		$(".listGenres").slideToggle("slow", function () {
		})
	})
})
document.querySelector("#thing1").addEventListener('change', () => searchSerial())
document.querySelector("#thing2").addEventListener('change', () => searchSerial())
document.querySelector("#thing3").addEventListener('change', () => searchSerial())
document.querySelector("#thing4").addEventListener('change', () => searchSerial())
document.querySelector("#thing5").addEventListener('change', () => searchSerial())