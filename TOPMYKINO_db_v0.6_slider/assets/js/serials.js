let serials = [
    { id: 1, name: 'Кухня', populars: 1, views: 10000000, rating: 8.6, src: 'kitchen.jpg' },
    { id: 2, name: 'Рик и Морти', populars: 2, views: 12000000, rating: 9, src: 'RickAndMorty(3_4).jpg' },
    { id: 3, name: 'Слово пацана. Кровь на асфальте', populars: 3, views: 7000000, rating: 8.3, src: `Boy'sWord.jpg` },
    { id: 4, name: 'Хороший доктор', populars: 4, views: 6000000, rating: 6.6, src: 'GoodDoctor.jpg' },
    { id: 5, name: 'Мандалорец', populars: 5, views: 5000000, rating: 3.2, src: 'Mandalorian.jpg' },
    { id: 6, name: 'Локи', populars: 6, views: 5500000, rating: 7.7, src: 'Loki.jpg' },
    { id: 7, name: 'Вампиры средней полосы', populars: 7, views: 7000000, rating: 8.3, src: 'Vampire.jpg' },
    { id: 8, name: 'Пищеблок', populars: 8, views: 7700000, rating: 7.4, src: 'NutritionUnit.jpg' },]
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
            searchSerials[i] = `<div class="article article${numberArticle} res${numberResult}"><span style='background-color:${colorRating}'>${serials[i].rating}</span> <img src="../assets/img/${serials[i].src}" title="${serials[i].name}" alt="${serials[i].name}">  </div>`
            numberResult++
            numberArticle++
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