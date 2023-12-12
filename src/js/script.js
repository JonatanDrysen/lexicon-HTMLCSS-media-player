import { data } from "./data.js"

function renderList() {
    let list = document.getElementById("songList")

    data.map((item) => {
        let li = document.createElement("li")
        let song = document.createElement("p")
        let img = document.createElement("img")
        let band = document.createElement("p")
        let btn = document.createElement("button")

        song.innerText = item.song
        img.setAttribute("src", item.img)
        band.innerText = item.band
        btn.innerText = "Details"
        btn.addEventListener("click", () => renderDetail(item))

        li.appendChild(song)
        li.appendChild(img)
        li.appendChild(band)
        li.appendChild(btn)

        let documentFragment = document.createDocumentFragment()
        documentFragment.appendChild(li)

        list.appendChild(documentFragment)
    })
}

function renderDetail(item) {
    if(!item) { 
        return null 
    }
    
    let detailContainer = document.getElementById("detailView")
    
    let itemContainer = document.createElement("div")
    let img = document.createElement("img")
    let song = document.createElement("p")
    let band = document.createElement("p")
    let album = document.createElement("p")

    img.setAttribute("src", item.img)
    song.innerText = item.song
    band.innerText = item.band
    album.innerText = item.album

    itemContainer.appendChild(img)
    itemContainer.appendChild(song)
    itemContainer.appendChild(band)
    itemContainer.appendChild(album)

    detailContainer.appendChild(itemContainer)

    console.log(detailContainer)
}

renderList()
renderDetail()
