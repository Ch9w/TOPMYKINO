let favourites = [
    { id: 2, name: 'Главный герой', populars: 3, views: 2800000, rating: 8, src: 'maingeroi(600-800).jpg' },
    { id: 3, name: 'Angry Birds 2', populars: 4, views: 4000000, rating: 7.4, src: 'angrybirds2(3_4).png' },
    { id: 4, name: 'Ёлки 5', populars: 6, views: 1500000, rating: 6, src: 'elki5.png' },
    { id: 6, name: 'Зверопой 2', populars: 7, views: 850000, rating: 8.3, src: 'sing2.jpg' },
    { id: 7, name: 'Я Легенда', populars: 8, views: 950000, rating: 7.9, src: 'IAmLegend.jpg' },
    { id: 8, name: 'Кунг Фу Панда 4', populars: 9, views: 2000000, rating: 6.7, src: 'KyngFuPanda4(3_4).jpg' },
    { id: 10, name: 'Чебурашка', populars: 11, views: 5000000, rating: 7.3, src: 'Cheburaska.jpg' },
    { id: 11, srcfull: 'kitchenfull.jpg', name: 'Кухня', populars: 1, views: 10000000, rating: 8.6, src: 'kitchen.jpg' },
    { id: 13, srcfull: "Boy'sWordFull.jpg", name: 'Слово пацана. Кровь на асфальте', populars: 3, views: 7000000, rating: 8.3, src: `Boy'sWord.jpg` },
    { id: 15, srcfull: 'MandalorianFull.jpg', name: 'Мандалорец', populars: 5, views: 5000000, rating: 3.2, src: 'Mandalorian.jpg' },
    { id: 19, srcfull: 'GravityFallsFull.jpg', name: 'Гравити Фолз', populars: 9, views: 0, rating: 9.0, src: 'GravityFalls.jpg' },
    { id: 20, srcfull: 'ChernobylFull.jpg', name: 'Чернобыль', populars: 10, views: 0, rating: 8.8, src: 'Chernobyl.jpg' },]
function searchFavourites() {
    let searchFavouritesArray = []
    let numberResult = 1
    let numberArticle = 1
    let colorRating

    for (let i = 0; i < favourites.length; i++) {
        if (favourites[i].rating >= 6.66) {
            colorRating = 'green'
        }
        else if (favourites[i].rating >= 3.33) {
            colorRating = '#FF8C20'
        }
        else {
            colorRating = 'red'
        }
        searchFavouritesArray[i] = `<div class="article article${numberArticle} res${numberResult}"><a href='./thismovie.html'><span style=background-color:${colorRating}>${favourites[i].rating}</span> <img src="../assets/img/${favourites[i].src}" title="${favourites[i].name}" alt="${favourites[i].name}"></a></div>`
        numberResult++
        numberArticle++
        if (numberArticle == 5) numberArticle = 1
    }
    if (searchFavouritesArray.length != 0) {
        document.getElementById('archive').innerHTML = searchFavouritesArray.join('')
        document.getElementById('notFound').innerHTML = ''
    }
    else {
        document.getElementById('archive').innerHTML = ""
        document.getElementById('notFound').innerHTML = 'Странно, но здесь ничего нет'
    }
}