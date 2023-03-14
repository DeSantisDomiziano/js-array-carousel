const upEl = document.getElementById('up')
const downEl = document.getElementById('down')
let mainImg = document.querySelector('.container_main_img')
let imgEL = [
    'url(./assets/img/01.webp)',
    'url(./assets/img/02.webp)',
    'url(./assets/img/03.webp)',
    'url(./assets/img/04.webp)',
    'url(./assets/img/05.webp)',
]

let i = 0;
upEl.addEventListener('click', function() {
    
    i = i - 1   
    if (i < 0) {
        i = 4
    }
    mainImg.style.backgroundImage = imgEL[i]
    console.log(imgEL[i])
})

downEl.addEventListener('click', function() {
    
    i = i + 1   
    if (i > 4) {
        i = 0
    }
    mainImg.style.backgroundImage = imgEL[i]
    console.log(imgEL[i])
})
    



