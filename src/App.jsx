import './App.css';
import {AllRoutes} from './Routes/AllRoutes';
import {Header} from './Components/Header';
function App(){
  return (
    <div className="App">
      <Header/>
        <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;