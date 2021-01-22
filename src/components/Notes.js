import React, { useState } from "react";

import "../styles/Note.css";

export default function Notes(props) {
    const localNotes = localStorage.getItem("notes");
    const [notes, setNotes] = useState(localNotes);

    const handleChange = e => {
        localStorage.setItem("notes", e.target.value);
        setNotes(e.target.value);
    };

    return (
        <form>
            <label for="pad">

                <span>Journal</span>
                <br />
                <textarea
                    placeholder="Add notes here"
                    value={notes}
                    onChange={handleChange}
                />
            </label>
        </form>
    );
}
