import { getFacilities, setFacility, getGovernorId, getTransientState } from "./database.js";

const facilities = getFacilities()

document.addEventListener("change", (event) => {
    if (event.target.id === "facility") {
        setFacility(parseInt(event.target.value))
    }
})

export const Facilities = () => {
    let html = "<label>Choose a facility</label>"
    const transientState = getTransientState()
    html += `<select id="facility">
    <option value="0"> Choose a Facility...</option>`

    const foundGovernorId = getGovernorId()
    if (foundGovernorId) {
        const arrayOfOptions = facilities.map( (facility) => {
            let selected = ""
            if(transientState.facilityId === facility.id) {
                selected = "selected"
            }
            if (foundGovernorId === facility.governorId && facility.status === 'Active') {
            return `<option value="${facility.id}" ${selected}>${facility.location}</option>`
        }
    }
    )
    html += arrayOfOptions.join("")
    }
    

   
    html += "</select>"
    return html
}