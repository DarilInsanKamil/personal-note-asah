import React from "react"
import { getArchivedNotes } from "../utils/local-data"
import { NoteLists } from "../components/NoteLists"
import { SearchBar } from "../components/SearchBar"
import { useSearchParams } from "react-router"

const ArchivePage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('title')
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    return <ArchivePageComponent defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePageComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)

    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword
            }
        })

        this.props.keywordChange(keyword)
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });
        return (
            <section >
                <h1>Archive Page</h1>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteLists notes={notes} />
            </section>
        )
    }
}

export default ArchivePage