const upEl = document.getElementById('up')
const downEl = document.getElementById('down')
let mainImg = document.querySelector('.container_main_img')
let imgEL = [
    'url(../img/01.webp)',
    'url(../img/02.webp)',
    'url(../img/03.webp)',
    'url(../img/04.webp)',
    'url(../img/05.webp)',
]


upEl.addEventListener('click', function() {

    for(let i = 0; i < imgEL.length; i++) {
        
    }
})

mainImg.style.backgroundImage = imgEL[0]
console.log(imgEL[0])
console.log(mainImg.style.backgroundImage)