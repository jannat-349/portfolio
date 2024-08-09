import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <section>
                <h2>Projects</h2>
                <div className="project-grid">
                    <div className="project-item">
                        <div className="project-cover" style={{ backgroundImage: 'url(src/assets/images/optical_fiber.png)' }}></div>
                        <div className="project-content">
                            <div className="project-summary">
                                <h3>Extracting Mode of Optical Fiber</h3>
                                <p className="duration">Jan 2023 -- May 2024</p>
                                <p><em>Matlab, Computational Intelligence</em></p>
                            </div>
                            <div className="project-details">
                                <ul>
                                    <li>Research project to solve the modal equation of optical fiber that ensures maximum light passing using two evolutionary algorithms: PSO and GA.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-cover" style={{ backgroundImage: 'url(src/assets/images/stroke.jpeg)' }}></div>
                        <div className="project-content">
                            <div className="project-summary">
                                <h3>Stroke Prediction using ML</h3>
                                <p className="duration">Dec 2023 -- April 2024</p>
                                <p><em>Python, XGBoost, SMOTE, Overleaf</em> | <a href="https://github.com/jannat-349/ML-Lab-codes/tree/stroke-prediction-project-XGBoost" target="_blank" rel="noopener noreferrer">Code</a></p>
                            </div>
                            <div className="project-details">
                                <ul>
                                    <li>Implemented XGBoost algorithm for stroke prediction with accuracy 95% and processed dataset with SMOTE algorithm.</li>
                                    <li>Applied cross-validation and confusion matrix analysis for better performance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-cover" style={{ backgroundImage: 'url(src/assets/images/dhar_hobe.png)' }}></div>
                        <div className="project-content">
                            <div className="project-summary">
                                <h3>Product Renting System</h3>
                                <p className="duration">Nov 2023 -- March 2024</p>
                                <p><em>Python, Agile SDLC, Testing</em> | <a href="https://github.com/JU-High-Fives/Dhar-Hobe/tree/rent_jannat" target="_blank" rel="noopener noreferrer">Code</a></p>
                            </div>
                            <div className="project-details">
                                <ul>
                                    <li>In this system, people can rent products or upload products for rent. Delivery will be handled by the system.</li>
                                    <li>Working on Payment feature development: Advance payment, Monthly payment, EMI payment.</li>
                                    <li>Collaborating with team members in GitHub, Discord, Trello, Notion.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-cover" style={{ backgroundImage: 'url(src/assets/images/ems.png)' }}></div>
                        <div className="project-content">
                            <div className="project-summary">
                                <h3>Employee Management System</h3>
                                <p className="duration">Completed</p>
                                <p><em>JS, Express, React, MongoDB, Docker</em> | <a href="https://github.com/jannat-349/MERN-Final-Project" target="_blank" rel="noopener noreferrer">Code</a></p>
                            </div>
                            <div className="project-details">
                                <ul>
                                    <li>In the admin panel, users can log in/register, view employee list, perform CRUD on employees, see charts (Line chart, Bar chart), search by different categories.</li>
                                    <li>Applied authentication using JWToken library.</li>
                                    <li>Used Material-UI library and implemented dockerization.</li>
                                </ul>
                            </div>
                        </div>
                    </div><div className="project-item">
                        <div className="project-cover" style={{ backgroundImage: 'url(src/assets/images/portfolio.png)' }}></div>
                        <div className="project-content">
                            <div className="project-summary">
                                <h3>Jannatul's Portfolio</h3>
                                <p className="duration">Ongoing</p>
                                <p><em>React, CSS, JavaScript</em> | <a href="https://jannat-349.github.io/portfolio" target="_blank" rel="noopener noreferrer">Visit</a></p>
                            </div>
                            <div className="project-details">
                                <ul>
                                    <li>Created a personal portfolio website to showcase projects, skills, researches, achievements, and contact information.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-cover" style={{ backgroundImage: 'url(src/assets/images/homepage_bg5.jpeg)' }}></div>
                        <div className="project-content">
                            <div className="project-summary">
                                <h3>TapLock: Fingerprint Based
                                    Locker System</h3>
                                <p className="duration">Completed</p>
                                <p><em>IoT, Arduino, Android Studio, Fingerprint Recognition</em> | <a href="https://github.com/jannat-349/Fingerprint-Based-Locker-System-IoT-Project-" target="_blank" rel="noopener noreferrer">Code</a></p>
                            </div>
                            <div className="project-details">
                                <ul>
                                    <li>It allows users to unlock the lock using their fingerprints, enhancing security.</li>
                                    <li>Users can pay through the Android app, TapLock, to retrieve their belongings.</li>
                                    <li>It ensures that only authorized individuals can access the lock and pay for item retrieval.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
