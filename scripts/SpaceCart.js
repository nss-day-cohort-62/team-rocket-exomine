/*
show 1 ton of selected mineral when clicked
    match mineral id with event lisetener when mineral is clicked (radio button)

decrement facilityMineral amount by 1 when purchase is made

show total amount of minerals purchased by colony under colony name
    increment amount purchased for every purchase made


*/

import {
  setMineral,
  purchaseMineral,
  getMinerals,
  getMineralId,
  getTransientState,
  getColonies,
  getFacilityMinerals,
  getPurchaseResources,} from "./database.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "mineral") {
    setMineral(parseInt(event.target.value));
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    purchaseMineral();
      
    }

});

export const MineralInSpaceCart = () => {
  const minerals = getMinerals();
  const foundMineralId = getMineralId();
 
  for (const mineral of minerals) {
    if (foundMineralId === mineral.id) {
      return `<li>1 ton of ${mineral.name}</li>`;
    }
  }
};

export const MineralsMoved = (order) => {
  const minerals = getMinerals();
  const transientState = getTransientState()

  const foundMineral = minerals.find((mineral) => {
    return mineral.id === order.mineralId;
  });
  if (transientState.colonyId === order.colonyId) {
      let html = `<li>
            ${order.amount} tons of ${foundMineral.name}
            </li>`;
    // document.dispatchEvent( new CustomEvent("HTMLReset"))
    return html
  }


};

/*
const MineralAmounts = (purchasedResource) => {
  const minerals = getMinerals();
  const colonies = getColonies();
  const facilityMinerals = getFacilityMinerals();
    purchasedResource.amount = 0
  
  for (const facilityMineral of facilityMinerals) {
    if (facilityMineral.mineralId === purchasedResource.mineralId) {
        facilityMineral.amount--;
    }
  }
  for (const colony of colonies) {
    for (const mineral of minerals) {
      if (purchasedResource.mineralId === mineral.id && purchasedResource.colonyId === colony.id) {
        purchasedResource.amount++;
      }
    }
  }
};
*/

export const Orders = () => {
    const purchasedResources = getPurchaseResources()
    //const transientState = getTransientState()
    let html = "<ul>"
        
    const listItems = purchasedResources.map(MineralsMoved)

        
    html+= listItems.join("")

    // const listItems = purchasedResources.map(MineralsMoved)

    // html+= listItems.join("")
    html+= "</ul>"
    return html

}