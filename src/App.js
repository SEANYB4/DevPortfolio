import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className='mainPage'>
        <div className='nav'>
          <nav className='menu'>
              <h1>Hello</h1>


              <ul className='navOpts'>
                <li>
                  
                  Map
                </li>
                <li>
                  Gallery
                </li>
                <li>
                  Statistics
                </li>
              </ul>

          </nav>
        </div>

    </div>

     

  );
}

export default App;
