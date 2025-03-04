import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Импортируем страницу Home
import Store from './pages/Store/Store'; // Импортируем страницу Store
import AimGame from './pages/AimGame/AimGame'; // Импортируем страницу AimGame
import Support from './pages/Support/Support'; // Импортируем страницу Support
import Login from './pages/Login/Login'; // Импортируем страницу Login
import MouseDetails from './pages/MouseDetails/MouseDetails';
import './App.css'; // Импортируем глобальные стили

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Главная страница */}
                <Route path="/store" element={<Store />} /> {/* Страница магазина */}
                <Route path="/aim-game" element={<AimGame />} /> {/* Страница игры */}
                <Route path="/support" element={<Support />} /> {/* Страница поддержки */}
                <Route path="/login" element={<Login />} /> {/* Страница входа */}
                <Route path="/mouse/:id" element={<MouseDetails />} />

            </Routes>
        </Router>
    );
}

export default App;