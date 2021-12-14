import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ServiceName from './Pages/ServiceName'
function App() {
  return (
    <div className="App">
        
        
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route  path='about' element={<About />} />
                <Route  path='services' element={<Services />} />
                <Route  path='serviceName' element={<ServiceName />} />
                
            </Routes>
        
    </div>
  );
}

export default App;
