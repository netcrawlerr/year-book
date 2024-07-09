import "./App.css";
import Landing from "./Landing";
import EmptySpace from "./EmptySpace";
import Cards from "./Cards";
import Footer from "./Footer";
import SearchBar from "./FilterButtons";

function App() {
  return (
    <>
      <Landing />
      <EmptySpace />
      <SearchBar />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
