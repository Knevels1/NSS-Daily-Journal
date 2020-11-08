/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, getEntries} from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryContainer = document.querySelector(".entryLog")

const eventHub = document.querySelector("#container")

eventHub.addEventListener("entryStateChanged", ()=> entryListComponent())


export const entryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entryArray = useEntries()
        render(entryArray)
    })

const render = (entryArray) => {
    let entryHTMLRepresentations = ""
        
        for (const entry of entryArray) {
            
            entryHTMLRepresentations = JournalEntryComponent(entry)
            entryContainer.innerHTML +=`
            <div class= "singleEntry">
            ${entryHTMLRepresentations}
            </div>
            `
     }

    }
}