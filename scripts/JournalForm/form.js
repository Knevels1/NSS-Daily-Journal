

const contentTarget = document.querySelector(".forms_list")

export const JournalFormComponent = () => {
    contentTarget.innerHTML = `
    <div class="form card">
        <form action="">
            <fieldset>
                <label for="journalDate"><B>Date of entry</B></label>
                <input class="formInfo" type="date" name="journalDate" id="journalDate">
            </fieldset>
        </form>
    </div>
    <div class="form card">
        <form action="">
            <fieldset>
                <label for="conceptsCovered"><B>Concepts covered</B></label>
                <input class="formInfo" input="text" name="conceptsCovered" id="conceptsCovered">
            </fieldset>
        </form>
    </div>
    <div class="form card">
        <form action="">
            <fieldset>
                <label for="journalEntry"><B>Journal Entry</B></label>
                <textarea class="formInfo" id="journalEntry" name="journalEntry" rows="2" cols="23">
                </textarea>
            </fieldset>
        </form>
    </div>
    <div class="form card">
        <form action="">
            <fieldset>
                <label for="mood"><B>Mood for the day</B></label>
                <select class="formInfo" name="moods" id="moods">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <option value="confused">Confused</option>
                    <option value="calm">Calm</option>
                </select>
            </fieldset>
            <input class="submit" type="submit" value="Record Journal Entry">
        </form>
    </div>
    `
}