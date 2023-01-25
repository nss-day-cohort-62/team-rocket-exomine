
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
            {id: 6, name: 'Seargent Johnson', status: 'Inactive', colonyId: 1},
            {id: 7, name: 'Triston Blaney', status: 'Active', colonyId: 3},
            {id: 8, name: 'Ada Collins', status: 'Active', colonyId: 3},
            {id: 9, name: 'David Allen Coe', status: 'Inactive', colonyId: 2},
            {id: 10, name: 'Taylor Swift', status: 'Active', colonyId: 2},
            {id: 11, name: 'Wesley Hughes', status: 'Active', colonyId: 4},
            {id: 12, name: 'Poppy Filler Hughes'
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}
