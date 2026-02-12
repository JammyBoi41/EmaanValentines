import React, { useState, useEffect } from "react";
import getNotes from "../hooks/getNotes";
import Note from "./note";

interface NoteI {
    _id: string;
    text: string;
}

export function Notes() {
    const [notes, setNotes] = useState<NoteI[]>([]);
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
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10">
            {notes.map((note, i) => (
                <div style={{ transform: `rotate(${Math.floor(Math.random() * 5) - 2}deg)`}}>
                    <Note key={i} text={note.text} id={note._id}/>
                </div>
            ))}
        </div>
    );
}

export default Notes;