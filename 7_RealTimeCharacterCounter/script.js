let char = document.getElementById('char')
let totalchar = document.querySelector('.totalchar')
let remaining = document.querySelector('.remaining')

function UpdateCount() {
    let length = char.value.length
    totalchar.innerHTML = length
    remaining.innerHTML = `Remaining : ${char.getAttribute('maxlength') - length}`
}

document.addEventListener('keyup', (e) => {
    UpdateCount()
    console.log(e)
})

