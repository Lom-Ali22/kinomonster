

// var maxLikes = -1
// var maxLikesPost
// infoPosts.forEach((post)=>{
//   if(post.likes > maxLikes)
//     {
//       maxLikes = post.likes
//       maxLikesPost = post      
//     }  
// })
// console.log(maxLikesPost)

// var post1 = {
//     raiting:29,
//     html:"<div post....>.....</div>"
//   }
//   var post2 = {
//     raiting:24,
//     html:"<div post....>.....</div>"
//   }
//   var post3 = {
//     raiting:31,
//     html:"<div post....>.....</div>"
//   }
//   var posts = [post1, post2, post3]

//   var htmlPost = []
//   $(".post").each(function(index, item){
//     let post = $(item).prop('outerHTML')
//     htmlPost.push(post)
//   })
//   console.log(htmlPost)                

//   var postsRaiting = []
//   // для каждого элемента выполни: (4 раза)
//   $(".rating").each(function(index, item){  
//       //записываем одну из цифр в postsRaiting
//       postsRaiting.push(Number(item.innerText))   
//   })
//   console.log(postsRaiting) 
// нужно сделать вот такой массив
//likes = [3 ,8 ,11, 9]


/*
  var postsRaiting = []
  $(".rating").each(function( index, item ) {
    //console.log("Индекс нашего элемента =", index)
    postsRaiting.push(item.innerText)
    console.log( "Текущий элемент =", item.innerText );
  });
  
  console.log("массив с лайками после цикла", postsRaiting)
  localStorage.setItem("ЛайкиМассивом", postsRaiting)
  var likesFromStore = localStorage.getItem("ЛайкиМассивом")
  
  console.log("а такие лайки мы получили из хранилища", likesFromStore.split(","))
*/






// пример структуры данных "Объект"
// var obj = {
//   name: "Vasya",
//   age: 20,
//   raiting: 90
// }
// obj.name


// Собрал все лайки в один массив который могу сохранить 
// var postsRaiting = []

// вариант на .each
// $(".rating").each(function(index, item){
//   postsRaiting.push(item.innerText)
// })

// вариант на for (класика)
// for (i = 0; i < $(".rating").length; i++){
//   postsRaiting.push($(".rating")[i].innerText)
// }

// console.log(postsRaiting)



// Посчитать сумму всех лайокв на странице
// var postsRaiting = []

// на цикле .each
// var sum = 0;
// $(".rating").each(function(index, item){
//   sum += Number(item.innerText)    
// })

// console.log("всего лайков =", sum)

// на цикле .reduce
// var sum = $(".rating").toArray().reduce(function(sum, item) {
//   return sum + Number(item.innerText)
// }, 0)

// for (i = 0; i < $(".rating").length; i++) 
// {
//   postsRaiting.push($(".rating")[i].innerText)
// }

//console.log(postsRaiting)

















//   var likes = $(".rating")
// //console.log( likes.length )

// for(i = 0; i < likes.length; i++){
//   //let test = 0

//   let like = $(likes[i])
//   console.log( like.text() )
//   console.log()

// }

// var fruits = []
// console.log(fruits)
// fruits.push("Kiwi")
// fruits.push("asdasdasd")
// console.log(fruits)



/*
$(".button_like").on("click", ()=>{ 
    // прочти сколько у нас лайков???
    let likesCount = $(".rating").text()
    // преобразуй в число, добавь 1
    likesCount = Number( likesCount ) + 1  
    // запиши новый результат
    $(".rating").text(likesCount)   
    localStorage.setItem("Лайков", likesCount); 
})
*/


//localStorage
//localStorage.setItem("мой возраст", "30");
//localStorage.getItem("мой возраст"); 


// прочитать сколько у нас там сейчас лаков и вывести в консоль
// прибавить к этому числу 1
// записать результат в блок
// likesCount = Number(likesCount) + 1 
//console.log(number + 1)

//let a = 100 - (maxScroll-nowScroll)*0.1
// console.log("max scrl = ", maxScroll);
// console.log("now scrl = ", nowScroll);


// $(this).css("transform", "scale(1.5)")
// $(this).css("z-index", 3)
// $(this).css("position", "relative")

// $(this).css("transform", "scale(1)")
// $(this).css("z-index", 0)
// $(this).css("position", "initial")
//console.log(event)

//let imgScale = $(this).css("transform")
//console.log(imgScale)
//console.log(this.className)
//if( у блока нет класса "big_image")
//if(     imgScale == "matrix(1, 0, 0, 1, 0, 0)")
//console.log(imageBig )

// $(".num").on("mouseenter", function() {
//     let number = Math.floor((Math.random() * 10) + 1)
//     $(this).html(number)  
//   })

//   $(".num").on("mouseleave", function() {
//     let number = Math.floor((Math.random() * 10) + 1)
//     $(this).html(number)  
//   })


// Те же ИФЫ снизу, но через СВИТЧЬ      
// switch(znak) 
// {        
//     case "+":
//         resultat = pervoe + vtoroye
//     break; 

//     case "-":
//         resultat = pervoe - vtoroye
//     break; 

//     case "*":
//         resultat = pervoe * vtoroye
//     break;

//     case "/":
//         resultat = pervoe / vtoroye
//     break;  
// } 
/*
function myFunction() {
    var text;
    
    document.getElementById("demo").innerHTML = text;


}*/
//  for(i=1;i<11;i++){

//     $(`.num:nth-child(${i})`).on("click", function(){
//         console.log($(this).text())
//     })

//  }
//  $(`.num:nth-child(1)`).on("click", function(){
//     console.log($(this).text())
// })

// $(`.num:nth-child(2)`).on("click", function(){
//     console.log($(this).text())
// })

// $(`.num:nth-child(3)`).on("click", function(){
//     console.log($(this).text())
// })

// for(i=1;i<10;i++){

//     setButtonEvent(i)

// }

// function setButtonEvent(i){
//     $(`.num:nth-child(${i})`).on("click", ()=>{

//         console.log($(`.num:nth-child(${i})`).text())
//     })
// }

// $(".num:nth-child(2)").on("click", ()=>{

//     console.log($(".num:nth-child(2)").text())
// })
// $(".num:nth-child(3)").on("click", ()=>{

//     console.log($(".num:nth-child(3)").text())
// })


// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"

// команды для заливки новых правок в систему гита
// git add *
// git commit -m "Суть новой правки"
// git push


// $(".films_block img").on("click", function(event){

//     // Убираем все стандартные события
//     event.preventDefault() 

//     console.log(this)

//     // проверяем наличие класса БигИмейдж
//     let imageBig = $(this).hasClass("big_image")  

//     if(imageBig == true)    
//     {
//         // делаем нашу картинку маленькой
//         $(this).removeClass("big_image")
//     }
//     else 
//     {      
//         // делаем все картинки маленькими
//         setAllImagesSmall()
//         // делаем нашу картинку большой
//         $(this).addClass("big_image")         
//     }  

// })


    //let img = $(this.nextElementSibling).clone()  
    //$(img).removeClass("full_size_img")
    //let img = this.outerHTML
    //let img = `<img src="${this.src}">`

    //console.log("ссылка на картинку", this.src)
    //http://127.0.0.1:5501/assets/img/matrix.png


        // тернарный оператор (замен некоторым if)
    // let img2 = (src != undefined)? `<img src="${src}">`:$(this).clone()


    // film.addEventListener("click", () => {
//     if (filmState == "фильмы на месте") {
//         document.querySelector(".films_block").style.transform = "translatex(-700px)"

//         document.querySelector(".films_block").style.transition = "1s"
//         filmState = "фильмы ушли"
//     } else {
//         document.querySelector(".films_block").style.transform = "translate(0px)"
//         document.querySelector(".films_block").style.transform = "translate(0px)"
//         document.querySelector(".films_block").style.transform = "translate(0px)"
//         document.querySelector(".films_block").style.transform = "translate(0px)"

//         document.querySelector(".films_block").style.transition = "1s"
//         filmState = "фильмы на месте"
//     }
// })


// let start = document.querySelector(".start")
// start.addEventListener("click", () => {

//     document.querySelector(".loading").style.width = "300px"

//     setTimeout(() => {
//         document.querySelector(".finish").style.opacity = 1
//     }, 2225)
// })

let sliderPosition = 0 // храним тут на сколько сдвинут слайдер
let arrow_right = document.querySelector(".arrow_right") //целимся в правую кнопку
let arrow_left = document.querySelector(".arrow_left") //целимся в левую кнопку

arrow_right.addEventListener("click", () => { //вешаем собыите при клике
    if (sliderPosition < 510) { // если слайдер сдвинут на 510 и менее
        sliderPosition = sliderPosition + 170
        document.querySelector(".slider").style.transform = "translateX(" + (-sliderPosition) + "px)" //сдвиг по оси Х
    } else {}
})

arrow_left.addEventListener("click", () => { //вешаем событие при клике
    if (sliderPosition > -170) { // если слайдер сдвинут на -170 и более
        sliderPosition = sliderPosition - 170
        document.querySelector(".slider").style.transform = "translateX(" + (-sliderPosition) + "px)" //сдвиг по оси Х  
    } else {}
})



// alert()
// prompt()
// confirm()

// console.log()


// var test = 20
// let test = 20

// let test  = "20"
// let test  = 20.5555

// let test = true

//let test = [1, 2, 5, 222, 3, 56]



// let test  = 300
// console.log("Вася живет" + test + " лет")

// let sliderPosition = -120
// console.log("translateX(-120px)" + sliderPosition)



// // "translateX(sliderPosition px)"
// var sliderPPPosition = -90
// console.log("translateX(" + sliderPPPosition + "px)")





// }
// var sorted = []
// for (j = 0; j <  nums.length; j++) {
//   var min = 9999999999999
// 	var minPos = -1
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] <= min) {
//       min = nums[i]
//       minPos = i
//     }
//   }
//   nums[minPos] = 9999999999999
//   sorted[j] = min
//   console.log(nums)
//   console.log("найменьшее число массива =", min)
//   console.log("Сортированный массив", sorted)
// }

// let trueLogin = "Login_22"
// let truePassword = "12345"

// $(".sidebar:nth-child(5) > h2").on("click", ()=>{  
//     // узнали ширину блока с паддингом
//     var blockWidth = $(".sidebar:nth-child(5)").outerWidth()  
//     // уводим блок вправо на всю его ширину
//     $(".sidebar:nth-child(5)").css("transform", `translateX(${blockWidth}px)`)
//   })


// $(".sidebar_news > h2").on("click", ()=>{
//     $(".sidebar_news").addClass("invisible")
// })

// $(".sidebar_news").removeClass("invisible")

// $(".btn").on("click", ()=> {
//     let login = $("input[type*='text']").val()
//     let password = $("input[type*='password']").val()
//     if(login == trueLogin && password == truePassword)
//     {
//         console.log("Верно")
//     }
//     else 
//     {
//         console.log("Неверный логин или пароль")
//     }
// })


// получаем иконку меню в переменную menu
//let menu = document.querySelector(".menu_img")


// // вешаем событие . при клике по иконке меню происходит все то что внутри
// $(".menu_img").on("click", () => {
//     // если состояние сайдбара == блок
//     if (menuState == "открыто") {

//         // скрываем сайдбар
//         показатьИндикаторЗагрузкиНенадолго()
//         setTimeout(() => {  
//             // Закрываю меню
//             $(".sidebar").css("transform", "translatex(222px)")
//             $(".sidebar").css("opacity", "0")
//             $(".sidebar").css("visibility", "hidden")  
//         }, 300)
//         menuState = "Закрыто"

//     } else {

//         // показываем сайдбар
//         показатьИндикаторЗагрузкиНенадолго()
//         setTimeout(() => {
//             $(".sidebar").css("transform", "translatex(0px)")
//             $(".sidebar").css("opacity", "1")
//             $(".sidebar").css("visibility", "visible")           
//         }, 300)
//         menuState = "открыто"
//     }
// })



// let buttonPois = $(".logo_text h2")
// buttonPois.on("mousedown", () => {
//     $(".site_content.first").css("display" , "none")
//     $(".site_content.second").css("display" , "block")
// })



// let buttonPoisk = $(".logo_text h2")
// buttonPoisk.on("click", () => {
//     $(".site_content.first").css("display", "none")
//     $(".site_content.second").css("display", "block")
// })

// получаем иконку меню в переменную menu
// let menu = document.querySelector(".menu_img")

// // вешаем событие . при клике по иконке меню происходит все то что внутри
// menu.addEventListener("click" , () => {

//     // получаем сайдбар в переменную сайдбар
//     let sidebar = document.querySelector(".sidebar_container")
//     // делаем запрос на то какой у нас дисплей у сайдбара
//     let состояниеСайдбара = window.getComputedStyle(sidebar, null).getPropertyValue("display")    

//     // если состояние сайдбара == блок
//     if(состояниеСайдбара == "block") 
//         // скрываем сайдбар
//         document.querySelector(".sidebar_container").style.display = "none"
//     else    
//         // показываем сайдбар
//         document.querySelector(".sidebar_container").style.display = "block"

// })



// // получаем иконку меню в переменную menu
// let menu = document.querySelector(".menu_img")
// let menuState = "открыто"

// // вешаем событие . при клике по иконке меню происходит все то что внутри
// menu.addEventListener("click", () => {
//     // если состояние сайдбара == блок
//     if (menuState == "открыто") 
//     {
//         // скрываем сайдбар
//         document.querySelector(".sidebar_container").style.display = "none"
//         menuState = "Закрыто"
//     } 
//     else 
//     {
//         // показываем сайдбар
//         document.querySelector(".sidebar_container").style.display = "block"
//         menuState = "открыто"
//     }
// })

// Вы купили 20 Сыр, 3 Молоко, 1 Кетчуп, 2 Хлеб, 1 Миксер. 


//console.log(`Вы куили ${count[0]} ${names[0]}, ${count[1]} ${names[1]}, ${count[2]} ${names[2]} и ${count[3]} ${names[3]}, ${count[4]} ${names[4]}`)

// var card = confirm("У вас есть скидочная карта?")

// if(card == true)
// {    
//   totalPrice = totalPrice - totalPrice * 0.2   
// }

// console.log(`Все вместе вышло на ${totalPrice}р`)

// var nums = [1, 2, 4444, 90, 12, 22, 15, 10, 28]
// var result = 0;

// for (i = 0; i < nums.length; i++) {
//    result = result + nums[i]  
// }

// // result = result + nums[0]
// // result = result + nums[1]
// // result = result + nums[2]
// // result = result + nums[3]

// console.log("Всего получилось ", result)

// let hobbits = ["Добби", "Гарри"]
// let countCheese = 20
// let test = true
// let salaryWorker = 3000


//alert("hello world")

// let name1 = "Ali"
// let number1 = 25
// let a = 10

// console.log(name1 + " живет в Турции " + a)

// a = 400 
// a = number1 + 5000

// a = a + 100

// let b = 132
// let c = 12

// let d = (a * 4 + b / 6 - 58) / 672

// console.log(name1 + " живет в Турции " + a)

/// 123456 ? 18

// let d  = 16%5   --> 1
// 17%5 ---> 2
// 20%5 ---> 0

// let m = 123462%18

// let dela = prompt("Как дела?")

// console.log(dela)

// let name1 = prompt("как тебя зовут?")

// console.log(name1)

// let age = prompt("Сколько тебе лет?")
//  console.log(age)

// // МЕНЯ ЗОВУТ .... МНЕ .... ЛЕТ

// console.log('Меня зовут ' + name1 + ' Мне ' + age + ' лет')
// console.log(`Меня зовут ${name1} Мне ${age} ле`)

// bolean 
// let zdalZachet = true
// zdalZachet = false

// let name = "Vasya"
// let num = 200

// console.log(5000/0)

// let test = null

// console.log(test3333)
// undefined -- неопределенность 
// NaN  -- сломалась математика

// if(test > 333)
// if(test <= 20)
// if(test != 500)

// if(name == "Ali")
//     console.log("Привет Али");
// else
//     console.log("Привет кто то другой");


// let age = prompt("Сколько тебе лет?")
// if(age > 18)
//     console.log("Здравствуйте")
// else
//     console.log("Привет")

// if(test > 0 , test < 100)
//if( 0 < test < 100)


// if(test > 0 && test < 100)


// let username = prompt("Как тебя зовут?")
// if (username == "Иван")
//     console.log("Ваш ранг - бриллиантовый")
// else {
//     let coumments = prompt("Сколько коментариев написано?")
//     if (coumments > 0 && coumments <= 100)
//         console.log("Ваш ранг - бронза")
//     if (coumments > 100 && coumments <= 300)
//         console.log("Ваш ранг - серебро")
//     if (coumments > 300 && coumments <= 500)
//         console.log("Ваш ранг - золото")
//     if (coumments > 500)
//         console.log("Ваш ранг - бриллиантовый")
// }


// if(список открыт)
// закрыть список
// иначе 
// открыть
// document.querySelector()

// document.querySelector(".content").style.backgroundColor = "black"
// document.querySelector(".btn").style.color = "red"
// document.querySelector(".logo_text").style.marginTop = "100px"

// .sidebar_container > .sidebar:nth-child(3) > h2

// var film1 = "asdasd"
// var film2 = "dddddd"

// var films = ["Гарри потер", "Форсаж 2", "Крепкий орешик"]


// var test = [1, 2, 5, 222, 3, 56]

// console.log(test[4])
// test[2] = 99999
// console.log(test)


// делаем модальное окно видимым
// $(".content h1:nth-child(1)").on("click", () => {
//     openModal()
// })