let div = document.getElementsByTagName('div')[0]

let arr = ['Web Developer', 'Freelancer', "Youtuber"]
let arrIndex = 0
let characterIndex = 0

function updateText() {
    characterIndex++
    div.innerHTML = `I am a ${arr[arrIndex].slice(0, characterIndex)}`
    if (characterIndex === arr[arrIndex].length) {
        arrIndex++
        characterIndex = 0
    }
    if (arrIndex === arr.length) {
        arrIndex = 0
    }
}

setInterval(() => {
    updateText()
}, 300);