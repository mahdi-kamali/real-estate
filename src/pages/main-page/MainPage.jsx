import Header from "src/Header";
import Agents from "./components/agents/Agents";
import NewEstates from "./components/new-estates/NewEstates";
import Intro from './components/intro/Intro';
import SearchAndExplore from './components/search-explore/SearchAndExplore';
import Categories from './components/categories/Categories';
import Search from './components/search/Search';
import ByCategory from './components/by-category/ByCategory';
import Footer from './components/outro/Footer';




const MainPage = () => {



    return (
        <div className="main-page">
            <Header />
            <Intro />
            <Categories />
            <NewEstates />
            <Search />
            <ByCategory />
            <SearchAndExplore />
            <Agents />
            <Footer />
        </div>
    )
}

export default MainPage
