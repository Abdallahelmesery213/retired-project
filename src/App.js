import HeaderMain from "./Components/HeaderMain/HeaderMain";
import OurServices from "./Components/OurServices/OurServices";
import Gallerys from './Components/Gallery/Gallery';
import Questions from "./Components/Questions/Questions";
import './App.css'

function App() {
  return (
    <div className="App">
        <HeaderMain />
        <OurServices />
        <Gallerys />
        <Questions />
    </div>
  );
}

export default App;
