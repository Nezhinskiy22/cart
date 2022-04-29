import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import Routes from "./components/front/Routes/Routes";

function App() {
  const { productItems } = data;

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes productItems={productItems} />
      </Router>
    </div>
  );
}

export default App;
