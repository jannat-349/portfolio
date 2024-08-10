import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <Carousel />
            <div className="overlay">
                <main className="main-content">
                    <h1 className="bio">
                        <span className="bold-white">
                            Hey!! I'm Jannatul, a passionate learner who enjoys leading in various tasks,
                            from crafting paper planes 
                            <i className="fas fa-paper-plane fly-icon"></i>
                            to programming computers
                            <i className="fas fa-desktop typing-icon"></i>. <br />  
                        </span>
                        <span className="border-white">
                            I also dream of flying on a plane one day,
                            just as I enjoy riding my bicycle 
                            <i className="fas fa-bicycle move-icon"></i>
                        </span>
                    </h1>
                    <div className="button-container">
                        <Link to="/about" className="btn btn-primary">More About Me</Link>
                        <Link to="/researches" className="btn btn-secondary">My Research Works</Link>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
