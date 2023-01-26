import { getColonies, setColony, getGovernorId, getGovernors } from "./database.js";
import { Orders } from "./SpaceCart.js";
const colonies = getColonies()
const governors = getGovernors()





export const Colonies = () => {

    const selectedGovernorId = getGovernorId()
    

    for (const governor of governors) {

        if (selectedGovernorId === governor.id) {

            for (const colony of colonies) {

                if (colony.id === governor.colonyId) {

                    setColony(colony.id)
                    return `<h2>${colony.name}</h2>
                    ${Orders()}` 
                }
            }
        }
    }
    
}

