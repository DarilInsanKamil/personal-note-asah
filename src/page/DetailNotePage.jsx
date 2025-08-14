import React from "react"
import { useNavigate, useParams } from "react-router"
import { archiveNote, deleteNote, editNote, getAllNotes, getNote, unarchiveNote } from "../utils/local-data"
import { NoteItem } from "../components/NoteItem"
import { Button } from "../components/Button"

function DetailNote() {
    const { id } = useParams();
    const navigate = useNavigate()
    return <DetailNoteComponents id={id} navigate={navigate} />;
}

class DetailNoteComponents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            note: getNote(props.id)
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState({
            note: null
        });
        this.props.navigate('/')
    }

    onArchiveHandler(id) {
        archiveNote(id);
        this.setState({
            note: getNote(id)
        });
        this.props.navigate('/')
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.setState({
            note: getNote(id)
        });
        this.props.navigate('/archive')
    }

    render() {

        const { note } = this.state;
        if (!note) {
            return <p>Note not found</p>;
        }

        return (
            <section>
                <h1>Detail Notes</h1>
                <NoteItem
                    id={note.id}
                    title={note.title}
                    archived={note.archived}
                    body={note.body}
                    createdAt={note.createdAt}
                />
                <div className="btn-container">
                    <Button title={note.archived ? 'Unarchive' : 'Archive'}
                        className="btn-archive"
                        onClick={() => note.archived ? this.onUnarchiveHandler(note.id) : this.onArchiveHandler(note.id)}
                    />
                    <Button title="Delete"
                        className="btn-delete"
                        onClick={() => this.onDeleteHandler(note.id)}
                    />
                    <Button title="Edit"
                        className="btn-edit"
                        onClick={() => this.props.navigate(`/edit-note/${note.id}`)} />
                </div>
            </section>
        );
    }
}

export default DetailNote;