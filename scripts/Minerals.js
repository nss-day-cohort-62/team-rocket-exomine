import { getMinerals, getFacilities, getFacilityId, getFacilityMinerals, getTransientState  } from "./database.js";

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()
export const Minerals = () => {
    let html = ""
    const transientState = getTransientState()
   
html += `<h2> Facility Minerals</h2>`
    const foundFacilityId = getFacilityId()
    if (foundFacilityId) {
        for (const facility of facilities) {
            if (foundFacilityId === facility.id) {
                html += ` <h2>for ${facility.location}</h2>`
            }
        }
        html += "<ul>"
        const arrayOfOptions = minerals.map((mineral) => {
            let checked = " "
            if(transientState.mineralId === mineral.id) {
                checked = "checked"
            }
            for (const facilityMineral of facilityMinerals) {
                if (foundFacilityId === facilityMineral.miningFacilityId) {
                    if (facilityMineral.mineralId === mineral.id) {
                        html += `<li>
                       <input type="radio" name="mineral" value="${mineral.id}"${checked}>${facilityMineral.amount} tons of ${mineral.name}</li>
                   `
                    }
                    
                   }
            }
           
    }
    )
    html += arrayOfOptions.join("")
    html += `</ul>`
    }
   

    return html
}
