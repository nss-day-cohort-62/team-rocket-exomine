import { getFacilities, setFacility, getGovernorId } from "./database.js";

const facilities = getFacilities()

document.addEventListener("change", (event) => {
    if (event.target.id === "facility") {
        setFacility(parseInt(event.target.value))
    }
})

export const Facilities = () => {
    let html = "<label>Choose a facility</label>"

    html += `<select id="facility">
    <option value="0"> Choose a Facility</option>`

    const foundGovernorId = getGovernorId()
    if (foundGovernorId) {
        const arrayOfOptions = facilities.map( (facility) => {
            if (foundGovernorId === facility.governorId) {
            return `<option value="${facility.id}">${facility.location}</option>`
        }
    }
    )
    html += arrayOfOptions.join("")
    }
    

   
    html += "</select>"
    return html
}