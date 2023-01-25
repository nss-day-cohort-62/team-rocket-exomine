const database = {
    colonies: [
        {id: 1, name: 'Halo'},
        {id: 2, name: 'Earth'},
        {id: 3, name: 'Mars'},
        {id: 4, name: 'Pluto'},
    ],
    governors: [
        {id: 1, name: 'Jackson Henderson', status: 'Active', colonyId: 1},
        {id: 2, name: 'Hannah Collins', status: 'Active', colonyId: 3},
        {id: 3, name: 'Vision Filler', status: "Inactive", colonyId: 4},
        {id: 4, name: 'Dolly Parton', status: 'Active', colonyId: 2},
        {id: 5, name: 'Master Chief', status: 'Active', colonyId: 1},
        {id: 6, name: 'Triston Blaney', status: 'Active', colonyId: 3},
        {id: 7, name: 'David Allen Coe', status: 'Inactive', colonyId: 2},
        {id: 8, name: 'Wesley Hughes', status: 'Active', colonyId: 4},
        
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
        {id: 1, name: "Nashville", status: "Active", governorId: 4, mineralsId: [1]},
        {id: 2, name: "Bowling Green", status: "Active", governorId: 1, mineralsId: [5] },
        {id: 3, name: "Denver", status: "Inactive", governorId: 3, mineralsId: [2, 7] },
        {id: 4, name: "Boulder", status: "Active", governorId: 4, mineralsId: [2] },
        {id: 5, name: "Chattanooga", status: "Inactive", governorId: 7, mineralsId: [10, 5] },
        {id: 6, name: "Hell", status: "Inactive", governorId: 3, mineralsId: [4] },
        {id: 7, name: "Knoxville", status: "Active", governorId: 2, mineralsId: [7] },
        {id: 8, name: "Chicago", status: "Active", governorId: 2, mineralsId: [2] },
        {id: 9, name: "Clarkson", status: "Active", governorId: 8, mineralsId: [4] },
        {id: 10, name: "Seattle", status: "Active", governorId: 6, mineralsId: [8] },
        {id: 11, name: "New York City", status: "Active", governorId: 6, mineralsId: [8] },
        {id: 12, name: "Khazad-Dum", status: "Active", governorId: 1, mineralsId: [1] },
        {id: 13, name: "Pandora", status: "Active", governorId: 5, mineralsId: [3, 9] },
        {id: 14, name: "Memphis", status: "Inactive", governorId: 7, mineralsId: [9] },
        {id: 15, name: "Cairo", status: "Active", governorId: 8, mineralsId: [5, 6] },
        {id: 16, name: "King's Landing", status: "Active", governorId: 5, mineralsId: [5, 6] }
    ],


    customOrders: [],
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

