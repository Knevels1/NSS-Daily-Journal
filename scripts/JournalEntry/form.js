import {saveEntry} from "./JournalDataProvider.js"


const eventHub = document.querySelector("#container")

const contentTarget = document.querySelector(".forms_list")

export const JournalFormComponent = () => {
    contentTarget.innerHTML = `
    <div class="form card">
        <form action="">
        
                <label for="journalDate"><B>Date of entry</B></label>
                <input class="formInfo" type="date" name="journalDate" id="journalDate">
           
                <label for="conceptsCovered"><B>Concepts covered</B></label>
                <input class="formInfo" input="text" name="conceptsCovered" id="conceptsCovered">
           
                <label for="journalEntry"><B>Journal Entry</B></label>
                <textarea id="entryText" class="formInfo" id="journalEntry" name="journalEntry" rows="2" cols="23">
                </textarea>
           
                <label for="mood"><B>Mood for the day</B></label>
                <select class="formInfo" name="moods" id="moods">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <option value="confused">Confused</option>
                    <option value="calm">Calm</option>
                </select>
            </form>
            <button id="recordEntry" class="submit">Record Journal Entry</button>
    </div>
    `
}
eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent)
    if(clickEvent.target.id === "recordEntry"){
    const dateOfEntry = document.querySelector("#journalDate").value
    const conceptCovered = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#entryText").value
    const mood = parseInt(document.querySelector("#moods").value)
    
    const newEntry = {
      dateOfEntry,
      conceptCovered,
      entry,
      mood
      }
    saveEntry(newEntry)
    }
  })