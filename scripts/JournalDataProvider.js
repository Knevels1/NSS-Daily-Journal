/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2023",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok",
    },
    {
        id: 2,
        date: "08/26/2024",
        concept: "Complex Flexbox",
        entry: "Today we talked about how complex flexbox can be and to understand the fundamentals of using it.",
        mood: "Happy",
    },
    {
        id: 3,
        date: "09/28/2026",
        concept: "Array fundementals",
        entry: "Today we talked about how to put information with certain paramaters into complex arrays.",
        mood: "Calm"
    }
    
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}