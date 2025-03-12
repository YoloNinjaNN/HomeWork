import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import logo from '../../Components/assets/img/LOGO.png';
import CatAvatar from '../../Components/assets/img/cat avatar.jpg';
import fingertip from '../../Components/assets/img/fingertip_v2.avif';
import claw from '../../Components/assets/img/claw_v2.avif';
import palm from '../../Components/assets/img/palm_v2.avif';
import TelegramIcon from '../../Components/assets/img/telegram.png';
import GithubIcon from '../../Components/assets/img/github.png';
import FirstIMG from '../../Components/assets/img/first-img.jpg';
import SecondIMG from '../../Components/assets/img/second-img.jpg';
import ThirdIMG from '../../Components/assets/img/third-img.jpg';
import FourIMG from '../../Components/assets/img/four-img.jpg';
import aim8k from '../../Components/assets/img/aim_8k.jpg';
import op1_8k from '../../Components/assets/img/op1_8k.jpg';
import G_PRO from '../../Components/assets/img/g_pro.png';
import Lamzu_Maya from '../../Components/assets/img/lamzu_maya.jpg';

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const images = [
        `url(${FirstIMG})`,
        `url(${SecondIMG})`,
        `url(${ThirdIMG})`,
        `url(${FourIMG})`,
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);


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


    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <div className="home-page">
            {/* HEADER */}
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

            {/* MAIN */}
            <main>
                <section className="first-section" style={{ backgroundImage: images[currentImageIndex] }}>
                    <div className="container">
                        <p>YOBOSTORE</p>
                        <h1>GAMING MICE</h1>
                    </div>
                </section>

                <section className="second-section">
                    <div className="container">
                        <h2>BEST SELLER</h2>
                        <div className="sec-bestseller">
                            <Link to="/store" className="button-a">
                                <p>VIEW ALL</p>
                                <button>
                                    <svg width="40" height="20" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </Link>

                            <div className="bestseller-cont">

                                <div className="product-cont">
                                    <div className="product">
                                        <Link to="#"><img src={aim8k} alt="AIM 8K" /></Link>
                                    </div>
                                    <div className="info">
                                        <span>Razer Viper V2 Pro (PPM EDITION)</span>
                                        <div className="v-stack gap-0.5 w-full">
                                            <span className="product-cad_title">
                                                <Link to="#" className="bold" data-istant>AIM 8K</Link>
                                            </span>
                                            <p>₴3,545.89</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-cont">
                                    <div className="product">
                                        <Link to="#"><img src={op1_8k} alt="OP1-8K" /></Link>
                                    </div>
                                    <div className="info">
                                        <span>ORIGINAL OP1 SHAPE</span>
                                        <div className="v-stack gap-0.5 w-full">
                                            <span className="product-cad_title">
                                                <Link to="#" className="bold" data-istant>OP1 8K</Link>
                                            </span>
                                            <p>₴3,124.67</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="product-cont">
                                    <div className="product">
                                        <Link to="#"><img src={Lamzu_Maya} alt="Lamzu Mayz" /></Link>
                                    </div>
                                    <div className="info">
                                        <span>ORIGINAL MAYA SHAPE</span>
                                        <div className="v-stack gap-0.5 w-full">
                                            <span className="product-cad_title">
                                                <Link to="#" className="bold" data-istant>Lamzu Mayz</Link>
                                            </span>
                                            <p>₴4,669.99</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="product-cont">
                                    <div className="product">
                                        <Link to="#"><img src={G_PRO} alt="G_PRO" /></Link>
                                    </div>
                                    <div className="info">
                                        <span>ORIGINAL LOGITECH SHAPE</span>
                                        <div className="v-stack gap-0.5 w-full">
                                            <span className="product-cad_title">
                                                <Link to="#" className="bold" data-istant>Logitech G-PRO Superlight 2</Link>
                                            </span>
                                            <p>₴6,229.00</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="grip">
                    <div className="container">
                        <div className="text">
                            <h2>BEST SELLER BY GRIP STYLE</h2>
                        </div>
                        <div className="grip-style-cont">
                            <div className="grip-style">
                                <div className="border">
                                    <img src={fingertip} alt="fingertip" />
                                </div>
                                <h2>FINGERTRIP</h2>
                                <p>
                                    кінчиками пальців, мінімальний контакт, максимальна маневреність. Дає найшвидшу реакцію, ідеальний для fast-paced FPS (Quake, Apex Legends).
                                </p>
                            </div>
                            <div className="grip-style">
                                <div className="border">
                                    <img src={claw} alt="claw" />
                                </div>
                                <h2>CLAW</h2>
                                <p>
                                    "кігтьовий" хват, пальці зігнуті, що дає швидкість і точність. Баланс між швидкістю та контролем, добре підходить для FPS і MOBA (CS2, Dota 2).   
                                </p>
                            </div>
                            <div className="grip-style">
                                <div className="border">
                                    <img src={palm} alt="palm" />
                                </div>
                                <h2>PALM GRIP</h2>
                                <p> 
                                    долонний хват, коли вся кисть лежить на миші, забезпечує комфорт і контроль. Ідеальний для тривалих ігор та стабільного прицілювання, підходить для тактичних FPS (CS2, Valorant).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

             {/* FOOTER */}
            <footer className="footer">
                <div className="container">
                    <div className="foot">
                        <img src={CatAvatar} alt="cat-avatar" />
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

export default Home;