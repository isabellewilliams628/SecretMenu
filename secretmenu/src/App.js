import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js'
import NavBar from './Components/NavBar.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter, Routes, Route } from "react-router-dom";

library.add(faHeart);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
