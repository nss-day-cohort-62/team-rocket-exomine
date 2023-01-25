import { getGovernors, setGovernor, getColonies } from "./database.js";
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

    html += '<select id="governor">'

    const arrayOfOptions = governors.map( (governor) => {
            return `<option value="${governor.id}">${governor.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



// if (governor.colonyId === colony.id) {
//     display the colony name
// }