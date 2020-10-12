/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


export const EntryListComponent = () => {
    const entryLog = document.querySelector(".entryLog")
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    let entryHTMLRepresentations = ""

    for (const entry of entries) {
        entryHTMLRepresentations += JournalEntryComponent(entry)
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        
    }
        entryLog.innerHTML +=`
       <div class= "singleEntry">
       <div class="eachEntry">${entryHTMLRepresentations}</div>
       </div>
       `
}