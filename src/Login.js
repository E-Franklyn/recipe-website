import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const ADMIN_CREDENTIALS = {
    email: 'admin@example.com',
    password: 'admin123',
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const savedEmail = localStorage.getItem('userEmail');
        const savedPassword = localStorage.getItem('userPassword');

        // Sign in Check
        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            alert('Welcome Admin!');
            navigate('/home'); 
        } else if (email === savedEmail && password === savedPassword) {
            alert('Login successful! Welcome back.');
            navigate('/home');
        } else {
            alert('Invalid credentials! Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
