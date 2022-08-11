import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js'
import NavBar from './Components/NavBar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
