const doggyDatabase = {
    andysDogs: [{
        id: 1,
        name: "Shady",
        breed: "Chihauhau",
        age: 5
    }, {
        id: 2,
        name: "Patches",
        breed: "Corgi",
        age: 7
    }, {
        id: 3,
        name: "Barley",
        breed: "Border Collie",
        age: 9
    }],
    feedingSchedule: [{
        id: 1,
        dogId: 3,
        time: "12:00pm"
    }, {
        id: 1,
        dogId: 1,
        time: "2:00pm"
    }, {
        id: 1,
        dogId: 2,
        time: "5:30pm"
    },
    ]
}



export const getDogs = () => {
    return doggyDatabase.andysDogs.map(dog => ({ ...dog }))
}

export const getSchedule = () => {
    return doggyDatabase.feedingSchedule.map(feeding => ({ ...feeding }))
}