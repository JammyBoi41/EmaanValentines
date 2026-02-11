import React, {useState, useEffect} from 'react'
import getNotes from '../hooks/getNotes';

interface Note {
    text: string
    createdAt: string
};

export function Notes() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tryNotes = getNotes();
        if (!notes.error) {
            setNotes(tryNotes);
        }

        setLoading(false);
    })

    
}

export default Notes;