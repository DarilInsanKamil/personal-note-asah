import { Link } from "react-router"

export const CreateButton = () => {
    return(
        <Link to="/add-note" className="btn-create">+</Link>
    )
}