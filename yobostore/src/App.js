import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import AimGame from './pages/AimGame/AimGame';
import Login from './pages/Login/Login';
import MouseDetails from './pages/MouseDetails/MouseDetails';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/aim-game" element={<AimGame />} />
                <Route path="/login" element={<Login />} />
                
                <Route path="/mouse/:id" element={<MouseDetails />} />

            </Routes>
        </Router>
    );
}

export default App;