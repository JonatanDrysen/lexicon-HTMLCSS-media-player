export function createSongControls() {
    const container = document.createElement("div")
    const mainControlsContainer = document.createElement("div")
    const repeat = document.createElement("span")
    const skipPrev = document.createElement("span")
    const play = document.createElement("span")
    const skipNext = document.createElement("span")
    const shuffle = document.createElement("span")

    container.setAttribute("class", "songControlsContainer")
    mainControlsContainer.setAttribute("class", "mainControlsContainer")
    repeat.setAttribute("class", "material-icons")
    skipPrev.setAttribute("class", "material-icons")
    play.setAttribute("class", "material-icons")
    skipNext.setAttribute("class", "material-icons")
    shuffle.setAttribute("class", "material-icons")

    repeat.innerText = "repeat"
    skipPrev.innerText = "skip_previous"
    play.innerText = "play_circle"
    skipNext.innerText = "skip_next"
    shuffle.innerText = "shuffle"

    mainControlsContainer.append(skipPrev, play, skipNext)
    container.append(repeat, mainControlsContainer, shuffle)
    
    return container
}