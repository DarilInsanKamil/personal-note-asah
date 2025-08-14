import { Link } from "react-router"

export const Navigation = () => {
    return (
        <ul className="navigation-container">
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
        </ul>
    )
}