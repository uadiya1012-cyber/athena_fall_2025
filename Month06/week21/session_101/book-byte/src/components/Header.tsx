import React from 'react';

type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <ul className='nav-links'>
                <li>E-books</li>
                <li>Audiobooks</li>
                <li>Apps & Readers</li>
                <li>Contact</li>
            </ul>
            <div className='auth-buttons'>
                <button className='auth-button1'>Sign in</button>
                <button className='auth-button2'>Try for Free</button>
            </div>

        </header>
    );
};

export default Header;
