import { data } from "./data.js"
import { createPlayButton, createPlusbutton, createFavoritebutton } from "./utils/buttons.js"
import { createProgressBar } from "./utils/progressBar.js"


function renderList() {
    let list = document.getElementById("songList")
    
    data.map((item) => {
        const playButton = createPlayButton()
        let div = document.createElement("div")
        let li = document.createElement("li")
        let img = document.createElement("img")
        let song = document.createElement("p")
        let band = document.createElement("p")

        song.innerText = item.song
        band.innerText = item.band

        div.setAttribute("class", "info")
        img.setAttribute("src", item.img)
        song.setAttribute("class", "infoSong")
        band.setAttribute("class", "infoBand")
        playButton.addEventListener("click", () => renderDetail(item))

        div.append(song, band)
        li.append(img, div, playButton)
        let documentFragment = document.createDocumentFragment()
        documentFragment.appendChild(li)

        list.appendChild(documentFragment)
    })
}

function renderDetail(item) {
    if (!item) {
        return null
    }

    let detailContainer = document.getElementById("detailView")
    const plusButton = createPlusbutton()
    const favoriteButton = createFavoritebutton()
    const progressBar  = createProgressBar()

    let imgContainer = document.createElement("div")
    let infoContainer = document.createElement("div")
    let textContainer = document.createElement("div")

    let img = document.createElement("img")
    let song = document.createElement("p")
    let band = document.createElement("p")

    img.setAttribute("src", item.img)
    song.innerText = item.song
    band.innerText = item.band

    imgContainer.setAttribute("class", "imgContainer")
    infoContainer.setAttribute("class", "infoContainer")
    song.setAttribute("class", "textSong")
    band.setAttribute("class", "textBand")
    
    imgContainer.appendChild(img)
    textContainer.append(song, band)
    infoContainer.append(plusButton, textContainer, favoriteButton)

    detailContainer.innerHTML = ""
    detailContainer.append(imgContainer, infoContainer, progressBar)
}

renderList()
renderDetail()
