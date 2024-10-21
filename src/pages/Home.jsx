import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle, faOrcid } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/images/my image.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="content-container">
                <div className="left-section">
                    <img 
                        src={profileImage}  
                        alt="Jannatul's photo"
                        className="profile-photo" 
                    />
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/jannat349/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/jannat-349" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://scholar.google.com/citations?user=G_z0QKQAAAAJ&hl=en" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="https://orcid.org/0009-0002-0053-884X" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faOrcid} />
                        </a>
                    </div>
                    <div className="email-section">
                        <p><strong>Email: </strong>jannatul.stu2018@juniv.edu</p>
                    </div>
                </div>

                {/* Right Section: Bio */}
                <div className="right-section">
                    <h1 className="bio">
                        Hey! I'm Jannatul, a passionate learner and leader. I enjoy exploring diverse fields from crafting creative projects to programming. I also dream of traveling the world one day, just as I enjoy everyday adventures.
                    </h1>
                    <div className="button-container">
                        <Link to="/about" className="btn btn-primary">More About Me</Link>
                        <Link to="/researches" className="btn btn-secondary">My Research Works</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
