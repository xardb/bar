// const menu = document.querySelector(".menu-mobile")
// const button = document.querySelector(".menu-button")
// button.addEventListener("click", () => {
//     menu.classList.toggle('active')
// })

// const menuLinks = document.querySelectorAll(".menu-mobile-content a");

// menuLinks.forEach((link, index) => {
//     link.addEventListener('click', () => {
//         console.log('123')
//         menuLinks.forEach(link => {
//             link.classList.remove('active')
//         })
//         link.classList.add('active')
//         menu.classList.remove('active')
//     })
// })

// const menuMainLinks = document.querySelectorAll(".menu-items a")

// window.addEventListener('scroll', () => {
//     console.log('1');
//     let scrollDist = window.scrollY;
//     let linksArr = document.querySelectorAll('.menu-item');
//     let tagsArray = Array.from(document.getElementsByTagName('section'));
//     tagsArray.forEach((el, i) => {
//         console.log('2')
//         if (el.offsetTop - 150 <= scrollDist) {
//             console.log('3')
//             linksArr.forEach(link => {
//                 console.log('4')
//                 if (link.classList.contains('active')) {
//                     console.log('5')
//                     link.classList.remove('active')
//                 }
//             })
//             linksArr[i].classList.add('active')
//         }
           

//     })
// })