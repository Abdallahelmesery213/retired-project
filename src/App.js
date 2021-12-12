import './App.css';
// import MainPage from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
        {/* <MainPage /> */}
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
