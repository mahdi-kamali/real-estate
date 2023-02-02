import { Icon } from '@iconify/react'
import MostPopular from './components/MostPopular'
import RecentlyAdded from './components/RecentlyAdded'
import SearchBar from './components/SearchBar'

const IntroSearch = () => {



    return (
        <div className="intro-search">

            <SearchBar />
            <div className="search-items">
                <MostPopular />
                <RecentlyAdded />
            </div>

        </div>
    )
}

export default IntroSearch
