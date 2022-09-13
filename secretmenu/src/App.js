import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js'
import Login from "./Pages/Login"
import NavBar from './Components/NavBar.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHjP5d4x2gO5rvPcsDsYgU74r4tWOKge0",
  authDomain: "secret-menu-de760.firebaseapp.com",
  projectId: "secret-menu-de760",
  storageBucket: "secret-menu-de760.appspot.com",
  messagingSenderId: "576421348127",
  appId: "1:576421348127:web:aea5d911679311ad96262a",
  measurementId: "G-8HWMJHNW5N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

library.add(faHeart);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
