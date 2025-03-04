import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Store.css';

// Импорт изображений
import logo from '../../Components/assets/img/LOGO.png';
import catAvatar from '../../Components/assets/img/cat avatar.jpg';
import TelegramIcon from '../../Components/assets/img/telegram.png';
import GithubIcon from '../../Components/assets/img/github.png';
import OP1_8k from '../../Components/assets/img/op1_8k.jpg';
import Lamzu_Maya from '../../Components/assets/img/Lamzu Maya.png';
import Lamzu_Thorn from '../../Components/assets/img/lamzu thorn.png';
import Aim_8K from '../../Components/assets/img/aim_8k.jpg';
import Razer_Deathadder from '../../Components/assets/img/razer deathadder v3.jpg';
import Pathfinder from '../../Components/assets/img/pathfinder.webp';
import Beast_X from '../../Components/assets/img/beast X.webp';
import G_PRO from '../../Components/assets/img/g_pro.png';
import Mad_r from '../../Components/assets/img/mad r major.jpg';
import Zowie from '../../Components/assets/img/zowie EC1-CW.jpg';
import Pulsar_x2 from '../../Components/assets/img/PulsarX2V2RedEdition.webp';
import Skyrox_v8 from '../../Components/assets/img/Scyrox-V8.webp';

// Массив с данными о мышках
export const miceData = [
    {
        id: 1,
        name: "EndGame Gear OP1 8K",
        price: "₴3,486.00",
        image: OP1_8k,
        description: "ORIGINAL ENDGAME SHAPE",
        details: "EndGame Gear OP1 8K — это высокопроизводительная игровая мышь с уникальным дизайном и передовыми технологиями.",
        specs: [
            "Сенсор: PixArt PMW 3389",
            "DPI: до 16000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 58 г"
        ]
    },
    {
        id: 2,
        name: "Lamzu Maya",
        price: "₴4,669.00",
        image: Lamzu_Maya,
        description: "ORIGINAL MAYA SHAPE",
        details: "Lamzu Maya — это легкая и эргономичная мышь, созданная для профессиональных игроков.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 19000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 55 г"
        ]
    },
    {
        id: 3,
        name: "Lamzu Thorn",
        price: "₴4,669.00",
        image: Lamzu_Thorn,
        description: "ORIGINAL THORN SHAPE",
        details: "Lamzu Thorn — это мышь с уникальным дизайном, подходящая для различных игровых стилей.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 19000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 57 г"
        ]
    },
    {
        id: 4,
        name: "AIM 8K",
        price: "₴3,106.35",
        image: Aim_8K,
        description: "Razer Viper V2 Pro (PPM EDITION)",
        details: "AIM 8K — это мышь с высокой точностью и отзывчивостью, созданная для профессиональных игроков.",
        specs: [
            "Сенсор: PixArt PMW 3399",
            "DPI: до 20000",
            "Частота опроса: 8000 Гц",
            "Количество кнопок: 8",
            "Вес: 62 г"
        ]
    },
    {
        id: 5,
        name: "Razer Deathadder V3 Pro",
        price: "₴7,999.00",
        image: Razer_Deathadder,
        description: "ORIGINAL RAZER SHAPE",
        details: "Razer Deathadder V3 Pro — это легкая и эргономичная мышь, разработанная для длительных игровых сессий.",
        specs: [
            "Сенсор: Focus Pro 30K",
            "DPI: до 30000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 5",
            "Вес: 63 г"
        ]
    },
    {
        id: 6,
        name: "PATHFINDER",
        price: "₴7,887.27",
        image: Pathfinder,
        description: "CUSTOM PATHFINDER SHAPE",
        details: "PATHFINDER — это мышь с уникальным дизайном, подходящая для игроков, которые ценят комфорт и точность.",
        specs: [
            "Сенсор: PixArt PMW 3389",
            "DPI: до 16000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 59 г"
        ]
    },
    {
        id: 7,
        name: "BEAST X",
        price: "₴6,051.00",
        image: Beast_X,
        description: "ORIGINAL BEAST_X SHAPE",
        details: "BEAST X — это мышь с уникальным дизайном и высокой производительностью.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 19000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 58 г"
        ]
    },
    {
        id: 8,
        name: "Logitech G PRO X Superlight 2",
        price: "₴6,299.00",
        image: G_PRO,
        description: "ORIGINAL LOGITECH SHAPE",
        details: "Logitech G PRO X Superlight 2 — это легкая и высокопроизводительная мышь для профессиональных игроков.",
        specs: [
            "Сенсор: HERO 25K",
            "DPI: до 25600",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 5",
            "Вес: 63 г"
        ]
    },
    {
        id: 9,
        name: "Mad R MAJOR+",
        price: "₴2,799.00",
        image: Mad_r,
        description: "MAJOR+ SHAPE",
        details: "Mad R MAJOR+ — это доступная и надежная мышь для игроков любого уровня.",
        specs: [
            "Сенсор: PixArt PMW 3325",
            "DPI: до 10000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 85 г"
        ]
    },
    {
        id: 10,
        name: "Zowie EC1-CW",
        price: "₴4,669.00",
        image: Zowie,
        description: "ZOWIE PRO SHAPE",
        details: "Zowie EC1-CW — это мышь с эргономичным дизайном, созданная для профессиональных игроков.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 3200",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 5",
            "Вес: 80 г"
        ]
    },
    {
        id: 11,
        name: "Pulsar X2 V2 (Red Edition)",
        price: "₴4,669.00",
        image: Pulsar_x2,
        description: "SPECIAL PULSAR SHAPE",
        details: "Pulsar X2 V2 — это легкая и стильная мышь с высокой производительностью.",
        specs: [
            "Сенсор: PixArt PMW 3395",
            "DPI: до 19000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 52 г"
        ]
    },
    {
        id: 12,
        name: "Skyrox V8",
        price: "₴4,669.00",
        image: Skyrox_v8,
        description: "ORIGINAL SKYROX SHAPE",
        details: "Skyrox V8 — это мышь с уникальным дизайном и высокой точностью.",
        specs: [
            "Сенсор: PixArt PMW 3389",
            "DPI: до 16000",
            "Частота опроса: 1000 Гц",
            "Количество кнопок: 6",
            "Вес: 60 г"
        ]
    }
];

const Store = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    // Эффект для добавления класса при скролле
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="store-page">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <nav className={`nav ${isMenuActive ? 'active' : ''}`}>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/store">MICE</Link></li>
                            <li><Link to="/aim-game">AIM GAME</Link></li>
                            <li><Link to="/support">SUPPORT</Link></li>
                        </ul>
                    </nav>
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white"/>
                        </svg>
                    </button>
                    <Link to="/"><img src={logo} alt="LOGO" /></Link>
                    <div className="but">
                        <Link to="/login">
                            <button className="login-btn">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-2 4-3.08 6-3.08s5.97 1.08 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <section>
                    <div className="container">
                        <div className="grid-cont">
                            {miceData.map((mouse) => (
                                <div className="grid-item" key={mouse.id}>
                                    <div className="image">
                                        <img src={mouse.image} alt={mouse.name} />
                                    </div>
                                    <span className="product-cad_title">
                                        <p>{mouse.description}</p>
                                        <Link to={`/mouse/${mouse.id}`} className="bold">
                                            {mouse.name}
                                        </Link>
                                    </span>
                                    <p>{mouse.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="foot">
                        <img src={catAvatar} alt="cat-avatar" />
                        <h2>YOBOSTORE</h2>
                        <nav>
                            <ul>
                                <li><a href="https://t.me/YoloNinjaSQ"><img src={TelegramIcon} alt="telegram" /></a></li>
                                <li><a href="https://github.com/YoloNinjaNN"><img src={GithubIcon} alt="github" /></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Store;