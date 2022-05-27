import './css/App/App.css';
import Header from './Header';
import Agents from "./js/agents/Agents"
import NewEstates from "./js/new-estates/NewEstates"
import Intro from './js/intro/Intro';
import SearchAndExplore from './js/search-explore/SearchAndExplore';
import QuickHistroy from './js/quick-history/QuickHistroy';
import Categories from './js/categories/Categories';
import Search from './js/search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Categories />
      <NewEstates />
      <Search />
      <Agents />
      <QuickHistroy />
      <SearchAndExplore />
    </div>
  );
}

export default App;
