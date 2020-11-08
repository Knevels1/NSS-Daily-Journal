const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const entryStateChangeEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangeEvent)
}
let allEntries = []

export const useEntries = () => allEntries.slice()


export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        // What should happen when we finally have the array?
        .then(parsedEntries => {
            allEntries = parsedEntries
        })
}
export const saveEntry = (entry) => {
    return fetch ('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}