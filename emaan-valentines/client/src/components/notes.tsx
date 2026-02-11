import React, { useState, useEffect } from "react";
import getNotes from "../hooks/getNotes";

interface Note {
    text: string;
    createdAt: string;
}

export function Notes() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadNotes() {
            try {
                const data = await getNotes();
                setNotes(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadNotes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {notes.map((note, i) => (
                <div key={i}>
                    {note.text}
                </div>
            ))}
        </div>
    );
}

export default Notes;