

window.addEventListener('mousemove', (e) => {
    let positionX = e.offsetX
    let positionY = e.offsetY
    let randome = Math.random() * 100

    let div = document.createElement('div')
    div.setAttribute('id', 'heart')
    div.style.left = positionX + "px"
    div.style.top = positionY + "px"
    div.style.width = randome + "px"
    div.style.height = randome + "px"
    document.body.appendChild(div)

    setTimeout(() => {
        div.remove()
    }, 3000);



})