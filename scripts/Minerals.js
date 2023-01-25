import { getMinerals, getFacilities, getFacilityId  } from "./database.js";

const minerals = getMinerals()

export const Minerals = () => {
    let html = 

    html += `<h2> Facility Minerals for ${facility.name}`

    const foundFacilityId = getFacilityId()
    if (foundFacilityId) {
        const arrayOfOptions = minerals.map( (mineral) => {
            if (foundFacilityId === mineral.miningFacilityId) {

         return `<li>
            <input type="radio" name="mineral" value="${mineral.id}">${mineral.name}</input>
        `
        }
    }
    )
    html += arrayOfOptions.join("")
    }
    

   
    html += "</select>"
    return html
}
