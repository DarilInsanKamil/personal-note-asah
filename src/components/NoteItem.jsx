import PropTypes from "prop-types"
import { Link } from "react-router"
import { showFormattedDate } from "../utils"

export const NoteItem = ({ id, title, body, archived, createdAt }) => {
    return (
        <Link to={`/detail/${id}`} className="note-link">
            <div className="note-item-container">
                <div className="note-item-header">
                    <h3>{title}</h3>
                    <p>{showFormattedDate(createdAt)}</p>
                </div>
                <p>{body}</p>
            </div>
        </Link>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
}