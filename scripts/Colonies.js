import { getColonies, setColony, getGovernorId, getGovernors } from "./database.js";

const colonies = getColonies()
const governors = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            const selectedGovernorId = getGovernorId()

            for (const governor of governors) {

                if (selectedGovernorId === governor.id) {

                    for (const colony of colonies) {

                        if (colony.id === governor.colonyId){
                            setColony(colony.id)
                            Colonies(colony)
                        }
                    }
                }
            }
        }
    }
)

export const Colonies = (colony) => {
    if (colony){
        return `<h2>${colony.name}</h2>`
    }
}