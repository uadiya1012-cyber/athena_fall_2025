import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content-left">
                <h2 className="hero-top">Listen to audiobooks for <span>14 days for free</span></h2>
                <p className="hero-middle">Enjoy over <span>900,000</span> audiobooks and e-books on BookBeat.
                    During the trial period, you get access to <span>20 hours</span> of listening and reading.
                    After the trial period, BookByte costs from <span>$7.99/month. You can cancel the subscription at any time.</span>
                </p>
                <div className="hero-buttons">
                    <button className="auth-button3">Try For Free</button>
                    <button className="auth-button4">View Categories</button>
                </div>
            </div>
            <div className="hero-content-right">
                <div className="blue-ellipse"></div>

                <div className="pink-ellipse"></div>
                <img src="images/12.svg" alt="books" className="book-image" />
            </div>
        </section>
    );
};

export default HeroSection;
