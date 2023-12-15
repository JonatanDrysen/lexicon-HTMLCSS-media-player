export function createPlayButton() {
    const container = document.createElement("div")
    const button = document.createElement("span")

    container.setAttribute("class", "playButtonContainer")
    button.setAttribute("class", "material-icons")

    button.innerText = "play_circle"
    container.appendChild(button)
    return container
}

export function createPlusbutton() {
    const container = document.createElement("div")
    const button = document.createElement("span")

    container.setAttribute("class", "plusButtonContainer")
    button.setAttribute("class", "material-icons")

    button.innerText = "add_circle"
    container.appendChild(button)
    return container
}

export function createFavoritebutton() {
    const container = document.createElement("div")
    const button = document.createElement("span")

    container.setAttribute("class", "favoriteButtonContainer")
    button.setAttribute("class", "material-icons")

    button.innerText  = "favorite"
    container.appendChild(button)
    return container
}