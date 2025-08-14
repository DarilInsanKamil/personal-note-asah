import React from "react"
import { getActiveNotes, getAllNotes } from "../utils/local-data"
import { NoteLists } from "../components/NoteLists"
import { SearchBar } from "../components/SearchBar"
import { useSearchParams } from "react-router"
import { CreateButton } from "../components/CreateButton"

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('title')
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }
    return <HomePageComponent defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getActiveNotes(),
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
            <section className="homepage-container">
                <h1>Home Page</h1>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <div className="note-list-container">
                    <NoteLists notes={notes} />
                </div>
                <div className="button-position">
                    <CreateButton />
                </div>
            </section>
        )
    }
}

export default HomePage