var names = ["Сыр", "Молоко", "Кетчуп", "Хлеб", "Миксер"]
var count = [20, 3, 1, 2, 1]
var price = [400, 100, 150, 40, 3000]

var totalPrice = 0
// var totalPrice = count[0] * price[0] + count[1] * price[1] + count[2] * price[2] + count[3] * price[3] + price[4]*count[4]
for (i = 0; i < count.length; i++) {
    totalPrice = totalPrice + count[i] * price[i]
}
var spisok = "Вы купили"
for (i = 0; i < price.length; i++) {
    if (i == price.length - 1) {
        spisok = spisok + `${count[i]} ${names[i]}.`
    } else
        spisok = spisok + ` ${count[i]} ${names[i]},`

}
console.log(spisok)

let buttonPoisk = document.querySelector(".logo_text h2")
buttonPoisk.addEventListener("mousedown", () => {
    document.querySelector(".site_content.first").style.display = "none"
    document.querySelector(".site_content.second").style.display = "block"
})

function показатьИндикаторЗагрузкиНенадолго() {
    let loading = document.querySelector(".loading_animation")

    // показываем индиктор загрузки
    loading.style.opacity = 1

    // убираем индикатор загрузки через 700 мс
    setTimeout(() => {
        loading.style.opacity = 0
    }, 700)
}

let menuState = "открыто"

// вешаем событие . при клике по иконке меню происходит все то что внутри
$(".menu_img").on("click", () => {
    // если состояние сайдбара == блок
    if (menuState == "открыто") {

        // скрываем сайдбар
        показатьИндикаторЗагрузкиНенадолго()
        setTimeout(() => {
            // Закрываю меню
            $(".sidebar").addClass("hidden")
        }, 300)
        menuState = "Закрыто"

    } else {

        // показываем сайдбар
        показатьИндикаторЗагрузкиНенадолго()
        setTimeout(() => {
            $(".sidebar").removeClass("hidden")
        }, 300)
        menuState = "открыто"
    }
})


let film = document.querySelector(".content h1")
let filmState = "фильмы на месте"



// модель системы 
let pervoe = ""
let vtoroye = ""
let znak = ""
let etap = 1


// при клике по цифрам
$(`.num`).on("click", function () {

    // получили цифру в которую кликнули
    let buttonNum = $(this).text()
    // если текст в первой ячейке равен == "пустоте"
    // то пишем в первую
    if (etap == 1) {
        // $(".result").css("gap", "0.2em")
        // записали первую цифру в модель
        pervoe = pervoe + buttonNum
        // поменяли текст цифры
        $(".pervoe").text(pervoe)
    }
    // иначе пишем во вторую
    if (etap == 2) {
        // записали вторую цифру в модель
        vtoroye = vtoroye + buttonNum
        // поменяли текст второй цифры
        $(".vtoroye").text(vtoroye)
    }

})

// при клике по знакам
$(`.signs > .sign`).on("click", function () {

    // получили знак в который кликнули
    znak = $(this).text()

    //поменяли текст знака на экране калькулятора
    $(".znak").text(znak)
    etap = 2
})

$(`.erase`).on("click", function () {
    resetCalc()
})

function resetCalc() {
    $(".pervoe").text("")
    $(".vtoroye").text("")
    $(".znak").text("")  
    vtoroye = ""
    pervoe = ""
    znak = ""
    etap = 1
}

$(".sign_res").on("click", function () {

    let resultat

    if (pervoe != "" && vtoroye != "" && znak != "") {
        if (znak == "+") {
            resultat = Number(pervoe) + Number(vtoroye)
        }
        if (znak == "-") {
            resultat = Number(pervoe) - Number(vtoroye)
        }
        if (znak == "*") {
            resultat = Number(pervoe) * Number(vtoroye)
        }
        if (znak == "/") {
            resultat = Number(pervoe) / Number(vtoroye)
        }

        //  Работает с "Представлением" системы
        //  После запяятой остаются две цифры и число записываеться на экран калькулятора
        $(".pervoe").text(parseInt(resultat * 100) / 100)
        $(".vtoroye").text("")
        $(".znak").text("")

        // Работаем с "Моделью" системы
        // меняем модель ( какую то внутренню логику системы)
        pervoe = resultat
        vtoroye = ""
        znak = ""
        etap = 1
    } else {
        alert("Введите число или знак")
    }

})

function calcHide() {
    $(".calc").css("display", "none")
    resetCalc()
}

function showCalc() {
    $(".calc").css("display", "block")
}

$(".toggle_calc").on("click", () => {
    let calcDisplay = $(".calc").css("display")
    if (calcDisplay == "none") {
        showCalc()
    } else {
        calcHide()
    }
})

// let neo = ".films_block:nth-child(2) > a:nth-child(1) > img"

function setAllImagesSmall() {
    $(".films_block img").removeClass("big_image")
}


$(".films_block img").on("click", function (event) {
    // Убираем все стандартные события
    event.preventDefault()
    let modalWindow = $(".modal_content .matrix_img")

    let src = $(this).attr("big_version") //$(this).clone()
    console.log("ссылка на большую картинку = ", src)

    // если большая картинка есть -- вставляем большую
    // иначе -- вставляем малньнкую
    let img
    if (src != undefined) {
        img = `<img src="${src}">`
    } else {
        img = $(this).clone()
    }

    modalWindow.html(img)
    openModal()
})

// скрываем модальное окно при нажатии на Х
$(".x").on("click", () => {
    closeModal()
})

// делаем модальное окно видимым
$(".content h1:nth-child(1)").on("click", () => {
    openModal()
})

$(".modal_window").on("click", (event) => {
    if (event.target == $(".modal_window")[0]) {
        closeModal()
    } else {

    }

    // console.log(event)
})

function addPost(post) {
    let newPost = $(`
    <div class="post">                          
        <hr>
        <h2><a href="#">${post.heading}</a></h2>
        <div class="posts_content">
            <p>
                ${post.text}
            </p>
        </div>
        <div class="film_wrap">
            <div class="read">
                <p><a href="#">читать</a></p>
            </div>
            <div class="like_film">
                <div class="rating">${post.likes}</div>
                <div class="button_like"><button class="like">Нравится</button></div>
            </div>
        </div>
    </div> `)

    let likeButton = newPost.find(".button_like")

    $(likeButton).on("click", function () {
        like(this)
    })

    $(".posts").append(newPost)
}



function like(likeButt) {
    // сюда будем писать что лайки лайкаються
    // нашли контейнер с лайками
    let likeContainer = $(likeButt).prev()
    // прочти сколько у нас лайков???
    let likesCount = likeContainer.text()
    // преобразуй количество лайков в число, добавь 1
    likesCount = Number(likesCount) + 1
    // запиши лайки+1 в контейнер с лайком
    likeContainer.text(likesCount)

    var postsRaiting = []
    // для каждого элемента выполни: (4 раза)
    $(".rating").each(function (index, item) {
        //записываем одну из цифр в postsRaiting
        postsRaiting.push(Number(item.innerText))
    })

    // записываем в хранилище
    localStorage.setItem("Лайков", postsRaiting)
    console.log("Записываем в хранилище", postsRaiting)
}

function closeModal() {
    $("body").removeClass("site_overflow_hidden")
    $(".modal_window").removeClass("visible")
}

function openModal() {
    $("body").addClass("site_overflow_hidden")
    $(".modal_window").addClass("visible")
}

// при загрузке страницы
$(document).ready(() => {

    document.querySelector(".loading").style.width = "100%"
    document.querySelector(".loading_wrap").style.opacity = 1

    // загрузка исчезает
    setTimeout(() => {
        document.querySelector(".loading_wrap").style.opacity = 0
    }, 2000)

    // страница появляется
    setTimeout(() => {
        $(".main").css("opacity", 1)
        $(".loading_wrap").css("display", "none")
    }, 2300)

    // читаем лайки с хранилища
    let likes = localStorage.getItem("Лайков")
    likes = likes.split(",")
    console.log("Прочитали лайки из хранилища", likes)

    // Получили новый пост из хранилища    
    let newPost = localStorage.getItem("Новый пост")
    newPost = JSON.parse(newPost)

    // добавляем пост
    addPost(newPost)

    // записываем лайки из массива в каждый пост
    $(".rating").each(function (index, item) {
        $(item).text(likes[index])
    })

    // читает количество лайков из интерфейса
    var postsRaiting = []
    $(".rating").each(function (index, item) {
        postsRaiting.push(Number(item.innerText))
    })
})

// Линия сверху при пролистывании страницы
$(window).on("scroll", () => {
    let nowScroll = $("html").scrollTop()
    let docHeight = $("html").height()
    let poleZrenia = $(window).height()

    // на сколько мы в принципе можем пкселей прокрутить страницу
    let maxScroll = docHeight - poleZrenia

    // на сколько процентов мы прокрутили страницу??
    let percentScroll = nowScroll / maxScroll * 100

    $(".load_wrap").css("width", `${percentScroll}%`)
})




$(".button_like").on("click", function () {
    like(this)
})


var allposts = $(".post")
var infoPosts = []
var postsKol = $(".post").length

for (i = 0; i < postsKol; i++) {
    var postObject = $(allposts[i])
    //   console.log(postObject)

    var text = postObject.find(".posts_content > p")[0].innerText
    //text().replace(/\t/g, "").replace(/\n/g, " ") 
    var heading = postObject.find("h2").text()
    var likes = Number(postObject.find(".rating").text())

    var post = {
        heading: heading,
        text: text,
        likes: likes,
    }
    infoPosts.push(post)
}

infoPosts.sort((a, b) => a.likes < b.likes ? 1 : -1);

console.log(infoPosts)

// Добавляем новый пост на сайт
$(".add").on("click", function () {
    let title = $(this).prev().prev().val()
    let textOfPosts = $(this).prev().val()
    let post = {
        heading: title,
        likes: 0,
        text: textOfPosts,
    }
    //console.log(post)
    let post2 = JSON.stringify(post)
    localStorage.setItem("Новый пост", post2)

    addPost(post)

})

