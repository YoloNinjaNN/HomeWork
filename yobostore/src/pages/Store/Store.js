import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Store.css';

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


export const miceData = [
    {
        id: 1,
        name: "EndGame Gear OP1 8K",
        price: "₴3,486.00",
        image: OP1_8k,
        description: "ОРІГІНАЛЬНА ФОРМА ENDGAME",
        details: "EndGame Gear OP1 8K — це високопродуктивна ігрова миша з унікальним дизайном та передовими технологіями.",
        specs: [
            "Сенсор: PixArt PMW 3389",
            "DPI: до 16000",
            "Частота опитування: 1000 - 8000 Гц",
            "Кількість кнопок: 6",
            "Вага: 51 г"
        ]
    },
    {
        id: 2,
        name: "Lamzu Maya",
        price: "₴4,669.00",
        image: Lamzu_Maya,
        description: "ОРІГІНАЛЬНА ФОРМА MAYA",
        details: "Lamzu Maya — це легка та ергономічна миша, створена для професійних гравців.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 19000",
            "Частота опитування: 1000 - 4000 Гц",
            "Кількість кнопок: 6",
            "Вага: 50 г"
        ]
    },
    {
        id: 3,
        name: "Lamzu Thorn",
        price: "₴4,669.00",
        image: Lamzu_Thorn,
        description: "ОРІГІНАЛЬНА ФОРМА THORN",
        details: "Lamzu Thorn — це миша з унікальним дизайном, яка підходить для різних ігрових стилів.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 19000",
            "Частота опитування: 1000 - 4000 Гц",
            "Кількість кнопок: 6",
            "Вага: 47 г"
        ]
    },
    {
        id: 4,
        name: "AIM 8K",
        price: "₴3,106.35",
        image: Aim_8K,
        description: "Razer Viper V2 Pro (PPM EDITION)",
        details: "AIM 8K — це миша з високою точністю та швидкодією, створена для професійних гравців.",
        specs: [
            "Сенсор: PixArt PMW 3399",
            "DPI: до 20000",
            "Частота опитування: 8000 Гц",
            "Кількість кнопок: 8",
            "Вага: 17 г"
        ]
    },
    {
        id: 5,
        name: "Razer Deathadder V3 Pro",
        price: "₴7,999.00",
        image: Razer_Deathadder,
        description: "ОРІГІНАЛЬНА ФОРМА RAZER",
        details: "Razer Deathadder V3 Pro — це легка та ергономічна миша, розроблена для тривалих ігрових сесій.",
        specs: [
            "Сенсор: Focus Pro 30K",
            "DPI: до 30000",
            "Частота опитування: 1000 - 8000 Гц",
            "Кількість кнопок: 5",
            "Вага: 63 г"
        ]
    },
    {
        id: 6,
        name: "PATHFINDER",
        price: "₴7,887.27",
        image: Pathfinder,
        description: "КАСТОМНА ФОРМА PATHFINDER",
        details: "PATHFINDER — це миша з унікальним дизайном, яка підходить для гравців, які цінують комфорт і точність.",
        specs: [
            "Сенсор: PixArt PMW 3389",
            "DPI: до 16000",
            "Частота опитування: 1000 Гц",
            "Кількість кнопок: 6",
            "Вага: 59 г"
        ]
    },
    {
        id: 7,
        name: "BEAST X",
        price: "₴6,051.00",
        image: Beast_X,
        description: "ОРІГІНАЛЬНА ФОРМА BEAST_X",
        details: "BEAST X — це миша з унікальним дизайном та високою продуктивністю.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 19000",
            "Частота опитування: 1000 - 8000 Гц",
            "Кількість кнопок: 6",
            "Вага: 58 г"
        ]
    },
    {
        id: 8,
        name: "Logitech G PRO X Superlight 2",
        price: "₴6,299.00",
        image: G_PRO,
        description: "ОРІГІНАЛЬНА ФОРМА LOGITECH",
        details: "Logitech G PRO X Superlight 2 — це легка та високопродуктивна миша для професійних гравців.",
        specs: [
            "Сенсор: HERO 25K",
            "DPI: до 25600",
            "Частота опитування: 1000 - 2000 Гц",
            "Кількість кнопок: 5",
            "Вага: 63 г"
        ]
    },
    {
        id: 9,
        name: "Mad R MAJOR+",
        price: "₴2,799.00",
        image: Mad_r,
        description: "ФОРМА MAJOR+",
        details: "Mad R MAJOR+ — це доступна та надійна миша для гравців будь-якого рівня.",
        specs: [
            "Сенсор: PixArt PMW 3325",
            "DPI: до 10000",
            "Частота опитування: 8000 Гц",
            "Кількість кнопок: 6",
            "Вага: 35 г"
        ]
    },
    {
        id: 10,
        name: "Zowie EC1-CW",
        price: "₴4,669.00",
        image: Zowie,
        description: "ПРОФЕСІЙНА ФОРМА ZOWIE",
        details: "Zowie EC1-CW — це миша з ергономічним дизайном, створена для професійних гравців.",
        specs: [
            "Сенсор: PixArt PMW 3370",
            "DPI: до 3200",
            "Частота опитування: 1000 Гц",
            "Кількість кнопок: 5",
            "Вага: 70 г"
        ]
    },
    {
        id: 11,
        name: "Pulsar X2 V2 (Red Edition)",
        price: "₴4,669.00",
        image: Pulsar_x2,
        description: "СПЕЦІАЛЬНА ФОРМА PULSAR",
        details: "Pulsar X2 V2 — це легка та стильна миша з високою продуктивністю.",
        specs: [
            "Сенсор: PixArt PMW 3395",
            "DPI: до 19000",
            "Частота опитування: 4000 Гц",
            "Кількість кнопок: 6",
            "Вага: 52 г"
        ]
    },
    {
        id: 12,
        name: "Skyrox V8",
        price: "₴4,669.00",
        image: Skyrox_v8,
        description: "ОРІГІНАЛЬНА ФОРМА SKYROX",
        details: "Skyrox V8 — це миша з унікальним дизайном та високою точністю.",
        specs: [
            "Сенсор: PixArt PMW 3389",
            "DPI: до 16000",
            "Частота опитування: 1000 - 8000 Гц",
            "Кількість кнопок: 6",
            "Вага: 36 г"
        ]
    }
];

const Store = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

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
            <header className="header">
                <div className="container">
                    <nav className={`nav ${isMenuActive ? 'active' : ''}`}>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/store">MICE</Link></li>
                            <li><Link to="/aim-game">AIM GAME</Link></li>
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