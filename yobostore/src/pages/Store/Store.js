import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Store.css'; // Подключаем стили

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

const Store = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Функция для переключения мобильного меню
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    // Эффект для изменения фона
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "url('../main-store/assets/img/first-img.jpg')",
        "url('../main-store/assets/img/second-img.jpg')",
        "url('../main-store/assets/img/third-img.jpg')",
        "url('../main-store/assets/img/four-img.jpg')",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);

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

                            <div className="grid-item">
                                <div className="image">
                                    <img src={OP1_8k} alt="OP1" />
                                </div>
                                <span className="product-cad_title">
                                    <p>ORIGINAL ENDGAME SHAPE</p>
                                    <Link to="#" className="bold" data-istant>EndGame Gear OP1 8K</Link>
                                </span>
                                <p>₴3,486.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Lamzu_Maya} alt="Lamzu Maya" />
                                </div>
                                <span className="product-cad_title">
                                    <p>ORIGINAL MAYA SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Lamzu Maya</Link>
                                </span>
                                <p>₴4,669.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Lamzu_Thorn} alt="Lamzu Thorn" />
                                </div>
                                <span className="product-cad_title">
                                <p>ORIGINAL MAYA SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Lamzu Thorn</Link>
                                </span>
                                <p>₴4,669.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Aim_8K} alt="aim 8k" />
                                </div>
                                <span className="product-cad_title">
                                <p>Razer Viper V2 Pro (PPM EDITION)</p>
                                    <Link to="#" className="bold" data-istant>AIM 8K</Link>
                                </span>
                                <p>₴3,106.35</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Razer_Deathadder} alt="razer" />
                                </div>
                                <span className="product-cad_title">
                                <p>ORIGINAL RAZER SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Razer deathadder v3 pro</Link>
                                </span>
                                <p>₴7,999.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Pathfinder} alt="PATHFINDER" />
                                </div>
                                <span className="product-cad_title">
                                <p>CUSTOM PATHFINDER SHAPE</p>
                                    <Link to="#" className="bold" data-istant>PATHFINDER</Link>
                                </span>
                                <p>₴7,887.27</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Beast_X} alt="BEAST X" />
                                </div>
                                <span className="product-cad_title">
                                <p>ORIGINAL BEAST_X SHAPE</p>
                                    <Link to="#" className="bold" data-istant>BEAST X</Link>
                                </span>
                                <p>₴6,051.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={G_PRO} alt="G_Pro" />
                                </div>
                                <span className="product-cad_title">
                                <p>ORIGINAL LOGITECH SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Logitech G PRO SUPERLIGHT 2</Link>
                                </span>
                                <p>₴6,299.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Mad_r} alt="mad r" />
                                </div>
                                <span className="product-cad_title">
                                <p>MAJOR+ SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Mad R MAJOR+</Link>
                                </span>
                                <p>₴2,799.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Zowie} alt="zowie" />
                                </div>
                                <span className="product-cad_title">
                                <p>ZOWIE PRO SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Zowe EC1-CW</Link>
                                </span>
                                <p>₴4,669.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Pulsar_x2} alt="pulasr" />
                                </div>
                                <span className="product-cad_title">
                                <p>SPECIAL PULSAR SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Pulsar X2 V2 (Red Edition)</Link>
                                </span>
                                <p>₴4,669.00</p>
                            </div>

                            <div className="grid-item">
                                <div className="image">
                                    <img src={Skyrox_v8} alt="skyrox" />
                                </div>
                                <span className="product-cad_title">
                                <p>ORIGINAL SKYROX SHAPE</p>
                                    <Link to="#" className="bold" data-istant>Skyrox V8</Link>
                                </span>
                                <p>₴4,669.00</p>
                            </div>

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