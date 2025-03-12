import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../Components/assets/img/LOGO.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const allowedDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
      'ukr.net',
      'i.ua',
      'meta.ua',
      'email.ua',
      'icloud.com',
      'protonmail.com',
    ];

    const domain = email.split('@')[1];

    if (!email) {
      setError('Поле email обов\'язкове для заповнення.');
    } else if (!domain || !allowedDomains.includes(domain)) {
      setError('Будь ласка, використовуйте один з основних доменів (наприклад, @gmail.com, @ukr.net).');
    } else {
      setError(''); 
      console.log('Email submitted:', email);
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Введіть ваш email, і ми надішлемо код для входу.</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button type="submit">Продовжити</button>
      </form>
      <p className="privacy-notice">Конфіденційність</p>
    </div>
  );
};

export default Login;