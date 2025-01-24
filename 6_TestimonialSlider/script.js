let img = document.getElementsByTagName("img")[0]
let content = document.querySelector('.content')
let myname = document.querySelector('.name')

let ImageUrl = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"]

let ContentValue = [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, pariatur! Lorem ipsum dolor sit amet.", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil praesentium, quidem asperiores odit eum ducimus similique? Doloremque, necessitatibus quibusdam!", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, porro, quibusdam aliquam ea nobis ducimus ipsa, molestias ex reiciendis libero sequi quas dicta. Dignissimos, quisquam."]

let NameValue = ["Kamal", "Anmol", "Ansh"]
index = 0

function updateslide() {
    img.src = ImageUrl[index]
    content.innerHTML = ContentValue[index]
    myname.innerHTML = NameValue[index]
    index++

    if (index >= ImageUrl.length) {
        index = 0
    }
}

setInterval(() => {
    updateslide()
}, 10000);
