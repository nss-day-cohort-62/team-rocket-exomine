/*
show 1 ton of selected mineral when clicked
    match mineral id with event lisetener when mineral is clicked (radio button)

decrement facilityMineral amount by 1 when purchase is made

show total amount of minerals purchased by colony under colony name
    increment amount purchased for every purchase made


*/

import { setMineral, purchaseMineral, getMinerals, getMineralId, getColonies, getFacilityMinerals } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === 'mineral') {
            setMineral(parseInt(event.target.value))
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === 'orderButton') {
            purchaseMineral()
        }
    }
)

export const MineralInSpaceCart = () => {
    const minerals = getMinerals()
    const foundMineralId = getMineralId()

    for (const mineral of minerals) {
        if (foundMineralId === mineral.id) {
            return `<li>1 ton of ${mineral.name}</li>`
        }
    }
}

export const MineralsMoved = (order) => {
    const minerals = getMinerals()
    const colonies = getColonies()
    const facilityMinerals = getFacilityMinerals()

    const foundMineral = minerals.find(
        (mineral) => {
            return mineral.id === order.mineralId
        }
    )

    const foundColony = colonies.find(
        (colony) => {
            return colony.id === order.colonyId
        }
    )

    for (const facilityMineral of facilityMinerals) {
        if (facilityMineral.mineralId === foundMineral.id) {
            facilityMineral.amount--
        }
    }

    order.amount++

    return `<li>
        ${order.amount} tons of ${foundMineral.name}
        </li>`
    
}

export const 