const database = {
    colonies: [
        {id: 1, name: 'Halo'},
        {id: 2, name: 'Earth'},
        {id: 3, name: 'Mars'},
        {id: 4, name: 'Pluto'},
    ],
    governors: [
        {id: 1, name: 'Jackson Henderson',  colonyId: 1},
        {id: 2, name: 'Hannah Collins',  colonyId: 3},
        {id: 3, name: 'Vision Filler',  colonyId: 4},
        {id: 4, name: 'Dolly Parton',  colonyId: 2},
        {id: 5, name: 'Master Chief',  colonyId: 1},
        {id: 6, name: 'Triston Blaney',  colonyId: 3},
        {id: 7, name: 'David Allen Coe', colonyId: 2},
        {id: 8, name: 'Wesley Hughes',  colonyId: 4},
        
    ],
    minerals: [
        {id: 1, name: 'Mithril'},
        {id: 2, name: 'Adamantiam'},
        {id: 3, name: 'Unobtainium'},
        {id: 4, name: 'Human Souls'},
        {id: 5, name: 'Copper'},
        {id: 6, name: 'Gold'},
        {id: 7, name: 'Iron'},
        {id: 8, name: 'Tritium'},
        {id: 9, name: 'Cobalt'},
        {id: 10, name: 'Platinum'}
    ],
    facilities: [
        {id: 1, location: "Nashville", status: "Active"},
        {id: 2, location: "Bowling Green", status: "Active"}, 
        {id: 3, location: "Denver", status: "Inactive"},
        {id: 4, location: "Boulder", status: "Active"},
        {id: 5, location: "Chattanooga", status: "Inactive"},
        {id: 6, location: "Hell", status: "Inactive"},
        {id: 7, location: "Knoxville", status: "Active"},
        {id: 8, location: "Chicago", status: "Active"},
        {id: 9, location: "Clarkson", status: "Active"},
        {id: 10, location: "Seattle", status: "Active"},
        {id: 11, location: "New York City", status: "Active"},
        {id: 12, location: "Khazad-Dum", status: "Active"},
        {id: 13, location: "Pandora", status: "Active"},
        {id: 14, location: "Memphis", status: "Inactive"},
        {id: 15, location: "Cairo", status: "Active"},
        {id: 16, location: "King's Landing", status: "Active"}
    ],
    facilityMinerals: [
        {id: 1, miningFacilityId: 1, mineralId: 6, amount: 53},
        {id: 2, miningFacilityId: 1, mineralId: 9, amount: 13},
        {id: 3, miningFacilityId: 2, mineralId: 5, amount: 47},
        {id: 4, miningFacilityId: 3, mineralId: 10, amount: 25},
        {id: 5, miningFacilityId: 4, mineralId: 7, amount: 15},
        {id: 6, miningFacilityId: 5, mineralId: 8, amount: 119},
        {id: 7, miningFacilityId: 6, mineralId: 4, amount: 666},
        {id: 8, miningFacilityId: 7, mineralId: 6, amount: 22},
        {id: 9, miningFacilityId: 8, mineralId: 10, amount: 7},
        {id: 10, miningFacilityId: 9, mineralId: 4, amount: 10},
        {id: 11, miningFacilityId: 10, mineralId: 2, amount: 87},
        {id: 12, miningFacilityId: 11, mineralId: 3, amount: 24},
        {id: 13, miningFacilityId: 12, mineralId: 1, amount: 500},
        {id: 14, miningFacilityId: 13, mineralId: 8, amount: 96},
        {id: 15, miningFacilityId: 14, mineralId: 5, amount: 94},
        {id: 16, miningFacilityId: 15, mineralId: 6, amount: 714},
        {id: 17, miningFacilityId: 16, mineralId: 10, amount: 46},

    ],

    purchasedResources: [{id: 1, colonyId: 1, mineralId: 6}],
    transientState: {}
}
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}
export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getGovernorId = () => {
    return database.transientState.governorId
}

export const setColony = (id) => {
    database.transientState.colonyId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setGovernor = (id) => {
    database.transientState.governorId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setMineral = (id) => {
    database.transientState.mineralsId = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}



export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

