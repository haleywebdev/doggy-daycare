import { getDogs } from "./database.js"

const storeDoggyData = getDogs()
console.log(storeDoggyData)

const dogToFind = 3

export const getDoggies = () => {
    for (const dogObject of doggyDatabase) {
        if (dogObject.id === dogToFind) {
            return dogObject.name
        }
    }
}