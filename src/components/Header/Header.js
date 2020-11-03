import React from 'react';
import logo from '../../amir-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="nav">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/chat">Chat</a>
                </nav>
            </div>
            
        </div>
    );
};

export default Header;