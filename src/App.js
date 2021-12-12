import './App.css';
import MainPage from './Pages/MainPage';
// import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import Test1 from './Components/test1';
function App() {
  return (
    <div className="App">
        <MainPage />
        {/* <BrowserRouter>
            <Switch>
                <Route path='/' component={MainPage} />
                <Route path='/test1' component={Test1}/>
            </Switch>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
