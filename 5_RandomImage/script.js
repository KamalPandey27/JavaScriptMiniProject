let ImageContainer = document.querySelector('.imageContainer')

let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click', () => {
    addImage()
})

function addImage() {
    for (let index = 0; index < 6; index++) {
        let img = document.createElement('img')
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        ImageContainer.append(img)
    }
}