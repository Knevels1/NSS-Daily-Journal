/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h4><B>Journal Entry #${entry.id}<B><h4>
        <div>${entry.date}</div>
        <div>${entry.concept}</div>
        <div>${entry.entry}</div>
        <div>${entry.mood}</div>
        <button class="button" type="button">edit</button>
          <button class="button" type="button">delete</button>
        </section>
    `
}