import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AimGame.module.css';
import logo from '../../Components/assets/img/LOGO.png';
import catAvatar from '../../Components/assets/img/cat avatar.jpg';
import TelegramIcon from '../../Components/assets/img/telegram.png';
import GithubIcon from '../../Components/assets/img/github.png';

const AimGame = () => {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [targets, setTargets] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  const [gameTime, setGameTime] = useState(10);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  const difficultySettings = {
    easy: { targetSpeed: 1000 },
    medium: { targetSpeed: 700 },
    hard: { targetSpeed: 500 },
  };


  useEffect(() => {
    if ((timeLeft === 0 || targets.length >= 7) && gameActive) {
      setGameActive(false);
      setGameOver(true);
      const newEntry = { name: playerName, score: score };


      const updatedLeaderboard = [...leaderboard, newEntry]
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
      setLeaderboard(updatedLeaderboard);
    }
  }, [timeLeft, targets, gameActive]);


  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [gameActive, timeLeft]);

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        const newTarget = {
          id: Date.now(),
          x: Math.random() * 80 + 5, 
          y: Math.random() * 80 + 5,
        };
        setTargets((prev) => [...prev, newTarget]);
      }, difficultySettings.easy.targetSpeed);

      return () => clearInterval(interval);
    }
  }, [gameActive]);

  const handleTargetClick = (id) => {
    setTargets((prev) => prev.filter((target) => target.id !== id));
    setScore((prev) => prev + 1);
  };

  const startGame = () => {
    if (!playerName) {
      alert('Будь ласка, введіть ваше ім\'я!');
      return;
    }
    setScore(0);
    setTimeLeft(gameTime);
    setTargets([]);
    setGameActive(true);
    setGameOver(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 0) {
        header.classList.add(styles.scrolled);
        setIsScrolled(true);
      } else {
        header.classList.remove(styles.scrolled);
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

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


      <main className={styles.aimGame}>
        <h1>Тренувальний ціль</h1>

        <div className={styles.timeSelector}>
          <h3>Оберіть час:</h3>
          <button onClick={() => setGameTime(10)} className={gameTime === 10 ? styles.active : ''}>
            10 сек
          </button>
          <button onClick={() => setGameTime(30)} className={gameTime === 30 ? styles.active : ''}>
            30 сек
          </button>
          <button onClick={() => setGameTime(60)} className={gameTime === 60 ? styles.active : ''}>
            60 сек
          </button>
        </div>

        <div className={styles.playerName}>
          <input
            type="text"
            placeholder="Введіть ваше ім'я"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            disabled={gameActive}
          />
        </div>

        <button onClick={startGame} disabled={gameActive} className={styles.startButton}>
          {gameActive ? 'Гра триває...' : 'Почати гру'}
        </button>


        {gameOver && (
          <div className={styles.gameOverMessage}>
            <h2>Гра закінчена!</h2>
            <p>Ваш результат: {score} очок</p>
          </div>
        )}

        <div className={styles.gameArea}>
          <div className={styles.gameInfo}>
            <p>Очки: {score}</p>
            <p>Час: {timeLeft} сек</p>
          </div>
          <div className={styles.targetsContainer}>
            {targets.map((target) => (
              <div
                key={target.id}
                className={styles.target}
                style={{ left: `${target.x}%`, top: `${target.y}%` }}
                onClick={() => handleTargetClick(target.id)}
              />
            ))}
          </div>
        </div>


        <div className={styles.leaderboard}>
          <h2>Таблиця лідерів</h2>
          <ol>
            {leaderboard.map((entry, index) => (
              <li key={index}>
                {entry.name}: {entry.score} очок
              </li>
            ))}
          </ol>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.foot}>
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

export default AimGame;