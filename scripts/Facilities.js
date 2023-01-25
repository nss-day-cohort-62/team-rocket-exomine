import { getFacilities, setFacility } from "./database.js";

const facilities = getFacilities()

document.addEventListener("change", (event) => {
    if (event.target.name === "facility") {
        setFacility(parseInt(event.target.value))
    }
})

export const Facilities = () => {
    let html = "<label>Choose a facility</label>"

    html += '<select id="facility">'

    const arrayOfOptions = facilities.map( (facility) => {
            return `<option value="${facility.id}">${facility.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}