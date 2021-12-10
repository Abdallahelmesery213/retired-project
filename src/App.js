import HeaderMain from "./Components/HeaderMain/HeaderMain";
import OurServices from "./Components/OurServices/OurServices";
import Gallerys from './Components/Gallery/Gallery';
import Questions from "./Components/Questions/Questions";
import './App.css';
import Mail from "./Components/Mail/Mail";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <HeaderMain />
        <OurServices />
        <Gallerys />
        <Questions />
        <Mail />
        <Footer />
    </div>
  );
}

export default App;
