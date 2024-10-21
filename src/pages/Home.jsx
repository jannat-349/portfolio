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
                        I am Jannatul, a dedicated and driven professional with a strong focus on technology and continuous learning. Currently, I am employed as an SQA Engineer at <a href="https://www.dsinnovators.com" target="_blank" rel="noopener noreferrer">Dynamic Solution Innovators Ltd.</a>, where I contribute to enhancing software quality and ensuring the delivery of efficient and reliable systems.
                        <br></br>
                        <br></br>
                        I hold a undergraduate degree from Jahangirnagar University, where I cultivated my expertise in computer science and engineering. My academic background has provided me with a solid foundation in areas such as data analysis, problem-solving, and innovative research approaches.
                        <br></br>
                        <br></br>
                        My research interests span a range of cutting-edge technologies, including Artificial Intelligence (AI), Machine Learning (ML), Graph Neural Networks (GNN), and Robotics. I am deeply passionate about exploring these fields and their potential to drive innovation and solve real-world challenges.
                    </h1>

                    <div className="button-container">
                        <Link to="/projects" className="btn btn-primary">My Projects</Link>
                        <Link to="/researches" className="btn btn-secondary">My Research Works</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
