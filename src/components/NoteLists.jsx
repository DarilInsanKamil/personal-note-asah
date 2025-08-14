import PropTypes from "prop-types"
import { NoteItem } from "./NoteItem"

export const NoteLists = ({ notes }) => {

    return (
        <div className="note-list">
            {notes && notes.length > 0 ? (
                notes.map((res, idx) => (
                    <NoteItem
                        key={res.id || idx}
                        id={res.id}
                        title={res.title}
                        body={res.body}
                        archived={res.archived}
                        createdAt={res.createdAt}
                    />
                ))
            ) : (
                <p>Tidak ada catatan...</p>
            )}
        </div>
    )
}

NoteLists.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
