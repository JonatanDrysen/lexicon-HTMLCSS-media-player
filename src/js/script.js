import { data } from "./data.js"

function renderList() {
    let list = document.getElementById("songList")
    
    data.map((item) => {
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
    
        let documentFragment = document.createDocumentFragment()
        documentFragment.appendChild(li)
    
        list.appendChild(documentFragment)
    })
}

renderList()
