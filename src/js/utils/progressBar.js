export function createProgressBar() {
    const progressBarContainer = document.createElement("div")
    const progressBar = document.createElement("div")
    const progress = document.createElement("div")
    const timestampStart = document.createElement("span")
    const timestampEnd = document.createElement("span")

    progressBarContainer.setAttribute("class", "progressBarContainer")
    progressBar.setAttribute("class", "progressBar")
    progress.setAttribute("class", "progress")
    timestampStart.setAttribute("class", "timestampStart")
    timestampEnd.setAttribute("class", "timestampEnd")

    timestampStart.innerText = "--:--"
    timestampEnd.innerText = "--:--"

    progressBar.appendChild(progress)
    progressBarContainer.append(timestampStart, progressBar, timestampEnd)

    return progressBarContainer
}

