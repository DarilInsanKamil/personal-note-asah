
import React from "react";
import { useNavigate, useParams } from "react-router";
import { editNote, getNote } from "../utils/local-data";
import { Button } from "../components/Button";

const EditNotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    return <EditNotePageComponents id={id} navigate={navigate} />;

}

class EditNotePageComponents extends React.Component {
    constructor(props) {
        super(props);
        
        const note = getNote(props.id)
        this.state = {
            note: note
        }

        this.titleRef = React.createRef();
        this.bodyRef = React.createRef();

        this.onEditNoteHandler = this.onEditNoteHandler.bind(this)
    }

    onEditNoteHandler(id, title, body) {
        if (id !== '' && title !== '' && body !== '') {
            editNote({ id, title, body })
            this.setState(() => {
                note: getNote(id)
            })
            this.props.navigate('/')
        }
    }

    render() {
        const { note } = this.state
        if (!note) {
            return <p>Note not found</p>;
        }
        return (
            <section>
                <form className='notes-input'  onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label>Title</label>
                        <br />
                        <input defaultValue={this.state.note.title} ref={this.titleRef} />
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <textarea defaultValue={this.state.note.body} ref={this.bodyRef}>
                        </textarea>
                    </div>
                    <Button title={'Edit Note'} className="btn-edit" onClick={() => this.onEditNoteHandler(this.state.note.id, this.titleRef.current.value, this.bodyRef.current.value)} />
                </form>
            </section>
        )
    }
}


export default EditNotePage