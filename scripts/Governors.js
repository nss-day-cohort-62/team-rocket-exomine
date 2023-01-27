import { getGovernors, setGovernor, getTransientState } from "./database.js";
// import { Colonies } from "./Colonies.js"

const governors = getGovernors()
// const colonies = getColonies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)

export const Governors = () => {
    let html = "<label>Choose a governor</label>"
    const transientState = getTransientState()
    html += `<select id="governor">
    <option value="0"> Choose a Governor...</option>`

    const arrayOfOptions = governors.map( (governor) => {
        let selected = ""
        if(transientState.governorId === governor.id) {
            selected = "selected"
        }
        return `<option value="${governor.id}" ${selected}>${governor.name}</option>`
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



// if (governor.colonyId === colony.id) {
//     display the colony name
// }