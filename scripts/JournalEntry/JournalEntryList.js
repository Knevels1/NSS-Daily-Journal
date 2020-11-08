/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, getEntries} from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryContainer = document.querySelector(".entryLog")


export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entrieArray = useEntries()
        render(entrieArray)
    })

const render = (entrieArray) => {
    let entryHTMLRepresentations = ""
        
        for (const entry of entrieArray) {
            
            entryHTMLRepresentations = JournalEntryComponent(entry)
            entryContainer.innerHTML +=`
            <div class= "singleEntry">
            ${entryHTMLRepresentations}
            </div>
            `
     }

    }
}