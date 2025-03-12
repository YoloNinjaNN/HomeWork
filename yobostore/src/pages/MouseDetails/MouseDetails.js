import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { miceData } from '../Store/Store';
import './MouseDetails.css';

import logo from '../../Components/assets/img/LOGO.png';
import catAvatar from '../../Components/assets/img/cat avatar.jpg';
import TelegramIcon from '../../Components/assets/img/telegram.png';
import GithubIcon from '../../Components/assets/img/github.png';

const MouseDetails = () => {
    const { id } = useParams();
    const mouse = miceData.find((m) => m.id === parseInt(id));

    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };


    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
                setIsScrolled(true);
            } else {
                header.classList.remove('scrolled');
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mouse) {
        return <div>Мышь не найдена</div>;
    }

    return (
        <div className="mouse-details-page">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <nav className={`nav ${isMenuActive ? 'active' : ''}`}>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/store">MICE</Link></li>
                            <li><Link to="/aim-game">AIM GAME</Link></li>
                        </ul>
                    </nav>
                    <button 
                        className={`mobile-menu-btn ${isScrolled ? 'hidden' : ''}`} 
                        onClick={toggleMenu}
                    >
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
                <div className="mouse-details-container">
                    <div className="mouse-image">
                        <img src={mouse.image} alt={mouse.name} />
                    </div>
                    <div className="mouse-info">
                        <h1>{mouse.name}</h1>
                        <div className="rating">
                            ★★★★★ <span>(0 Reviews)</span>
                        </div>
                        <div className="price">
                            {mouse.price}
                        </div>
                        <button className="add-to-cart">Add to cart</button>
                        <div className="payment-options">
                            <p>Pay with <strong>PayPal</strong></p>
                        </div>
                    </div>
                </div>

                <div className="mouse-specs-container">
                    <h2>Характеристики</h2>
                    <ul>
                        {mouse.specs.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                </div>
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

export default MouseDetails;