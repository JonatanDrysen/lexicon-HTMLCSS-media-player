export function createSongControls() {
    const container = document.createElement("div")
    const mainControlsContainer = document.createElement("div")
    const repeat = document.createElement("span")
    const skipPrev = document.createElement("span")
    const play = document.createElement("span")
    const skipNext = document.createElement("span")
    const shuffle = document.createElement("span")

    repeat.setAttribute("class", "material-icons")
    repeat.innerText = "repeat"

    skipPrev.setAttribute("class", "material-icons")
    skipPrev.innerText = "skip_previous"

    play.setAttribute("class", "material-icons")
    play.innerText = "play_circle"
    
    skipNext.setAttribute("class", "material-icons")
    skipNext.innerText = "skip_next"

    shuffle.setAttribute("class", "material-icons")
    shuffle.innerText = "shuffle"

    mainControlsContainer.append(skipPrev, play, skipNext)
    container.append(repeat, mainControlsContainer, shuffle)
    
    return container
}