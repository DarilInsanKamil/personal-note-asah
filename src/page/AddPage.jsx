import React from 'react';
import { useNavigate } from 'react-router';
import NotesInput from '../components/NoteInput';
import { addNote } from '../utils/local-data';

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(notes) {
        addNote(notes);
        navigate('/');
    }

    return (
        <section>
            <h2>Tambah Note</h2>
            <NotesInput addNotes={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;