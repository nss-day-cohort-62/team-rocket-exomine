import { getMinerals, getFacilities, getFacilityId, getFacilityMinerals  } from "./database.js";

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()
export const Minerals = () => {
    let html = ""

   

    const foundFacilityId = getFacilityId()
    if (foundFacilityId) {
        for (const facility of facilities) {
            if (foundFacilityId === facility.id) {
                html += `<h2>${facility.location}</h2>`
            }
        }
        html += "<ul>"
        const arrayOfOptions = minerals.map((mineral) => {
            for (const facilityMineral of facilityMinerals) {
                if (foundFacilityId === facilityMineral.miningFacilityId) {
                    if (facilityMineral.mineralId === mineral.id) {
                        html += `<li>
                       <input type="radio" name="mineral" value="${mineral.id}">${mineral.name}</li>
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
