import './css/App/App.css';
import Header from './Header';
import Background from "./js/background/Background"
import SectionOne from "./js/section-one/SectionOne"
import Agents from "./js/agents/Agents"
import NewEstates from "./js/new-estates/NewEstates"
import Intro from './js/intro/Intro';
import Category from './js/category/Category';
import SearchAndExplore from './js/search-explore/SearchAndExplore';
import ParralaxCard from './js/parralax-card/ParralaxCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Category />
      <NewEstates />
      <SearchAndExplore />
    </div>
  );
}

export default App;
