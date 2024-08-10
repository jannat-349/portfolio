import React from 'react';
import '../styles/Projects.css';
import TaplockVideo from '../assets/videos/Taplock.MOV';
import EMSVideo from '../assets/videos/MERN project.mp4';

import ReactPlayer from 'react-player';

const projects = [
    {
        title: "Extracting Mode of Optical Fiber",
        duration: "Jan 2023 -- May 2024",
        technologies: "Matlab, Computational Intelligence",
        description: [
            "Research project to solve the modal equation of optical fiber that ensures maximum light passing using two evolutionary algorithms: PSO and GA."
        ],
        imageUrl: 'images/optical_fiber.png',
        codeLink: null,
        visitLink: null,
        pdfLink: "https://drive.google.com/file/d/1WL2EM3N4rOqaXmVLx9OHvAZ0Aehn4oh1/view"
    },
    {
        title: "Stroke Prediction using ML",
        duration: "Dec 2023 -- April 2024",
        technologies: "Python, XGBoost, SMOTE, Overleaf",
        description: [
            "Implemented XGBoost algorithm for stroke prediction with accuracy 95% and processed dataset with SMOTE algorithm.",
            "Applied cross-validation and confusion matrix analysis for better performance."
        ],
        imageUrl: 'images/stroke.jpeg',
        codeLink: "https://github.com/jannat-349/ML-Lab-codes/tree/stroke-prediction-project-XGBoost",
        visitLink: null,
        pdfLink: "https://drive.google.com/file/d/1M3GqiRSR0SFCsx-g119tbdh_uODJr4CV/view"
    },
    {
        title: "Product Renting System",
        duration: "Nov 2023 -- March 2024",
        technologies: "Python, Agile SDLC, Testing",
        description: [
            "In this system, people can rent products or upload products for rent. Delivery will be handled by the system.",
            "Working on Payment feature development: Advance payment, Monthly payment, EMI payment.",
            "Collaborating with team members in GitHub, Discord, Trello, Notion."
        ],
        imageUrl: 'images/dhar_hobe.png',
        codeLink: "https://github.com/JU-High-Fives/Dhar-Hobe/tree/rent_jannat",
        visitLink: null,
        pdfLink: "https://drive.google.com/file/d/1QU38x3WOQgVEv8AWe-R_dqjrQBgHxLBo/view"
    },
    {
        title: "Employee Management System",
        duration: "Completed",
        technologies: "JS, Express, React, MongoDB, Docker",
        description: [
            "In the admin panel, users can log in/register, view employee list, perform CRUD on employees, see charts (Line chart, Bar chart), search by different categories.",
            "Applied authentication using JWToken library.",
            "Used Material-UI library and implemented dockerization."
        ],
        imageUrl: 'images/ems.png',
        codeLink: "https://github.com/jannat-349/MERN-Final-Project",
        visitLink: null,
        pdfLink: "https://docs.google.com/presentation/d/1tvv7ZV6h-eAEFIdW2e3szmZmb5UfQHVip8hw0vZLIwg/edit?usp=sharing",
        videoUrl: EMSVideo
    },
    {
        title: "Jannatul's Portfolio",
        duration: "Ongoing",
        technologies: "React, CSS, JavaScript",
        description: [
            "Created a personal portfolio website to showcase projects, skills, researches, achievements, and contact information.",
            "Published in github pages.",
            "Implemented CICD through Github Actions."
        ],
        imageUrl: 'images/portfolio.png',
        codeLink: "https://github.com/jannat-349/portfolio",
        visitLink: "https://jannat-349.github.io/portfolio",
        pdfLink: null
    },
    {
        title: "TapLock: Fingerprint Based Locker System",
        duration: "Completed",
        technologies: "IoT, Arduino, Android Studio, Fingerprint Recognition",
        description: [
            "It allows users to unlock the lock using their fingerprints, enhancing security.",
            "Users can pay through the Android app, TapLock, to retrieve their belongings.",
            "It ensures that only authorized individuals can access the lock and pay for item retrieval."
        ],
        imageUrl: 'images/homepage_bg5.jpeg',
        codeLink: "https://github.com/jannat-349/Fingerprint-Based-Locker-System-IoT-Project-",
        visitLink: null,
        pdfLink: "https://drive.google.com/file/d/1ED54y4eRorjCLL9B63Aut2yWwG0Iu37B/view",
        videoUrl: TaplockVideo
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <section>
                <h2>Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <img src={project.imageUrl} alt={project.title} className="project-cover" />
                            <div className="project-content">
                                <div className="project-summary">
                                    <h3>{project.title}</h3>
                                    <p className="duration">{project.duration}</p>
                                    <p>
                                        <em>{project.technologies}</em>
                                        {project.codeLink && (
                                            <>
                                                {' | '}
                                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
                                            </>
                                        )}
                                        {project.visitLink && (
                                            <>
                                                {' | '}
                                                <a href={project.visitLink} target="_blank" rel="noopener noreferrer">Visit</a>
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div className="project-details">
                                    <ul>
                                        {project.description.map((desc, idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))}
                                    </ul>
                                    {project.videoUrl && (
                                        <div className="video-container">
                                            <ReactPlayer
                                                url={project.videoUrl}
                                                controls
                                                width="100%"
                                                height="100%"
                                                style={{ marginTop: '10px' }}
                                            />
                                        </div>
                                    )}
                                    {project.pdfLink && (
                                        <div className="additional-links">
                                            <p><a href={project.pdfLink} target="_blank" rel="noopener noreferrer">Know More →</a></p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
