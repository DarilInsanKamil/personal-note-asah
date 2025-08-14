import PropTypes from "prop-types"

export const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <section className="search-bar-container">
            <input
                type="text"
                // name="search-bar"
                placeholder="Cari berdasarkan judul"
                value={keyword}
                className="search-bar"
                onChange={(e) => keywordChange(e.target.value)}
            />
        </section>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}