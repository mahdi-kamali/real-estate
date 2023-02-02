import { Icon } from "@iconify/react";
import { useState } from "react";

const SearchBar = () => {

    const [isFocosed,setIsFocused] = useState(false)

    const onSearchFormSubmit = (e) => {
        e.preventDefault();
    }

    const onSearchFocused = () => {
    }


    return (
        <form className="search-bar" action='#' onSubmit={onSearchFormSubmit}>
            <div className="intro-search-bar-header">
                <h1>
                    Need To Find Home ?
                </h1>
                <span>
                    Search From <small>1000</small> Properties
                </span>
            </div>
            <div className="intro-search-bar-body">
                <Icon icon="ep:search" />
                <input type="text" placeholder='Example : London' onFocus={onSearchFocused} />
            </div>
        </form>
    )
}

export default SearchBar
