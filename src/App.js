import Recommended from "./Components/Recommended/Recommended";
import "./App.css";
import CardContainer from "./Components/CardWrapper/CardContainer";
import NavBar from "./Components/NavBar/NavBar";
import Filter from "./Components/Filters/Filter";
import Footer from "./Components/Footer/Footer";

function App() {
  const Main = () => (
    <div className="wholeContainer">
      <div className="filter">
        <Filter />
      </div>

      <CardContainer />
    </div>
  );

  return (
    <div className="App">





      
      <NavBar />
      <Recommended />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
