import { Exomining } from "./Exomining.js"
import { database } from "./database.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Exomining()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

document.addEventListener("transientReset", event => {
    console.log("The transient state has been cleared")
    database.transientState = {}
})

document.addEventListener("HTMLReset", event => {
    let html = ''
    return html
})