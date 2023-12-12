import { data } from "./data.js"

console.log(data)
let list = document.getElementById("songList")

data.forEach((item) => {
    let img = document.createElement("img")
    let song = document.createElement("p")
    let band = document.createElement("p")
    let li = document.createElement("li")
    
    img.setAttribute("src", item.img)
    song.innerText = item.song
    band.innerText = item.band

    li.appendChild(song)
    li.appendChild(band)
    li.appendChild(img)

    const documentFragment = document.createDocumentFragment()
    documentFragment.appendChild(li)
    
    list.appendChild(documentFragment)
})
