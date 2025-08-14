import React from 'react';
import PropTypes from 'prop-types';
import { generateNoteId } from '../utils';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        const newNote = {
            id: generateNoteId(),
            title: this.state.title,
            body: this.state.body,
            archived: false,
            createdAt: new Date().toISOString(),
        };

        this.props.addNotes(newNote);
    }

    render() {
        return (
            <form className='notes-input' onSubmit={this.onSubmitEventHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeHandler} />
                </div>
                <div>
                    <label>Body</label>
                    <textarea placeholder="Description" value={this.state.body} onChange={this.onBodyChangeHandler} ></textarea>
                </div>
                <button className='btn-edit' type="submit">Create Note</button>
            </form>
        )
    }
}
NotesInput.propTypes = {
    addNotes: PropTypes.func.isRequired,
};

export default NotesInput;
