import { data } from "./data.js"
import { createPlayButton, createPlusbutton, createFavoritebutton } from "./utils/buttons.js"
import { createProgressBar } from "./utils/progressBar.js"
import { createSongControls } from "./utils/songControls.js"


function renderList() {
    let list = document.getElementById("songList")
    
    data.map((item) => {
        const playButton = createPlayButton()
        let titleBandContainer = document.createElement("div")
        let albumContainer = document.createElement("div")
        let li = document.createElement("li")
        let img = document.createElement("img")
        let title = document.createElement("p")
        let band = document.createElement("p")
        let album = document.createElement("p")

        title.innerText = item.title
        band.innerText = item.band
        album.innerText = item.album

        titleBandContainer.setAttribute("class", "titleBand")
        albumContainer.setAttribute("class", "albumContainer")
        img.setAttribute("src", item.img)
        title.setAttribute("class", "titleBandTitle")
        band.setAttribute("class", "titleBandBand")
        album.setAttribute("class", "album")
        playButton.addEventListener("click", () => renderDetail(item))

        titleBandContainer.append(title, band, album)
        albumContainer.appendChild(album)
        li.append(img, titleBandContainer, albumContainer, playButton)
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
    const songControls = createSongControls()

    let imgContainer = document.createElement("div")
    let infoContainer = document.createElement("div")
    let textContainer = document.createElement("div")

    let img = document.createElement("img")
    let title = document.createElement("p")
    let band = document.createElement("p")

    img.setAttribute("src", item.img)
    title.innerText = item.title
    band.innerText = item.band

    imgContainer.setAttribute("class", "imgContainer")
    infoContainer.setAttribute("class", "infoContainer")
    textContainer.setAttribute("class", "textContainer")
    title.setAttribute("class", "textTitle")
    band.setAttribute("class", "textBand")
    
    imgContainer.appendChild(img)
    textContainer.append(title, band)
    infoContainer.append(plusButton, textContainer, favoriteButton)

    detailContainer.innerHTML = ""
    detailContainer.append(imgContainer, infoContainer, progressBar, songControls)
}

renderList()
renderDetail()
