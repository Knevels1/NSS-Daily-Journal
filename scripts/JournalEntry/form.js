import {saveEntry} from "../JournalEntry/JournalDataProvider.js"


const eventHub = document.querySelector("#container")

const contentTarget = document.querySelector(".forms_list")

export const JournalFormComponent = () => {
    contentTarget.innerHTML = `
    <div class="form card">
        <form action="">
        
                <label for="journalDate"><B>Date of entry</B></label>
                <input class="formInfo" type="date" name="journalDate" id="journal--date"/>
           
                <label for="conceptsCovered"><B>Concepts covered</B></label>
                <input class="formInfo" type="text" name="conceptsCovered" id="concepts--covered"/>
           
                <label for="journalEntry"><B>Journal Entry</B></label>
                <textarea id="entryText" class="formInfo" name="journalEntry" rows="2" cols="23">
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
eventHub.addEventListener("click", eventObj => {
    if(eventObj.target.id === "recordEntry"){
    const dateOfEntry = document.querySelector("#journal--date").value
    const conceptCovered = document.querySelector("#concepts--covered").value
    const entry = document.querySelector("#entryText").value 
    
    const newEntry = {
      dateOfEntry,
      conceptCovered,
      entry,
      mood
      }
    saveEntry(newEntry)
    }
  })