let span = document.getElementsByTagName('span')

// function randomColor() {
//     let random1 = Math.floor(Math.random() * 255)
//     let random2 = Math.floor(Math.random() * 255)
//     let random3 = Math.floor(Math.random() * 255)

//     let color = `rgb(${random1},${random2},${random3})`
//     return color
// }


function randomColor() {
    let hashColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    let color = "#"

    for (let index = 0; index < 6; index++) {
        let random = Math.floor(Math.random() * 16)
        color = color + hashColor[random]

    }

    return color
}


Array.from(span).forEach((e) => {
    e.style.backgroundColor = `${randomColor()}`
    e.innerText = randomColor()
})
