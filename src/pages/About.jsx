import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section>
        <h2>Personal Information</h2>
        <div className="personal-info">
          <div className="personal-info-item">
            <h3>Name:</h3>
            <p>Jannatul Ferdoush Jannati</p>
          </div>
          <div className="personal-info-item">
            <h3>Date of Birth:</h3>
            <p>February 18, 2000</p>
          </div>
          <div className="personal-info-item">
            <h3>Father's Name:</h3>
            <p>Md. Ali Akbar</p>
          </div>
          <div className="personal-info-item">
            <h3>Mother's Name:</h3>
            <p>Tahmina Akter</p>
          </div>
          <div className="personal-info-item">
            <h3>Age:</h3>
            <p>24</p>
          </div>
          <div className="personal-info-item">
            <h3>Gender:</h3>
            <p>Female</p>
          </div>
          <div className="personal-info-item">
            <h3>Nationality:</h3>
            <p>Bangladeshi</p>
          </div>
          <div className="personal-info-item">
            <h3>Religion:</h3>
            <p>Islam</p>
          </div>
          <div className="personal-info-item">
            <h3>Hobbies:</h3>
            <p>Coding, Reading, Traveling</p>
          </div>
          <div className="personal-info-item">
            <h3>Skills:</h3>
            <p>React, JavaScript, CSS, SQA</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3>
              Junior SQA Engineer
            </h3>
            <p className="duration">April 2024 -- Present</p>
          </div>
          <a href="https://www.dsinnovators.com/" target="_blank" rel="noopener noreferrer">
            <p>Dynamic Solution Innovators Ltd.</p></a>
          <ul>
            <li>Ensured quality of a Bangladeshi government project named IPEMIS under DPE, Bangladesh.</li>
            <li>Completed training on Software Quality Assurance organized by the company.</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <h3>
              MERN Development Intern
            </h3>
            <p className="duration">March 2023 -- September 2023</p>
          </div>
          <a href="https://bongodev.com/" target="_blank" rel="noopener noreferrer">
            <p>bongoDev</p></a>
          <ul>
            <li>Developed Employee Management, Pagination, E-commerce projects.</li>
            <li>Reviewed codebase and tasks of students at bongoDev.</li>
            <li>Explored ways to visualize GitHub collaboration and code review in the software industry.</li>
            <li>Attended some mock interviews as an interviewer.</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <h3>
              Executive Member
            </h3>
            <p className="duration">Jan 2023 - April 2024</p>
          </div>
          <a href="https://jurc.org/" target="_blank" rel="noopener noreferrer">
            <p>Jahangirnagar University Robotics Club</p></a>
          <ul>
            <li>Implemented Line Following Robot, Wirebuzz Game.</li>
            <li>Participated in Robotics competitions held at IUBAT and CU.</li>
            <li>Took some managerial responsibilities: Notion maintenance, member recruitment.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>
              <a href="https://www.juniv.edu" target="_blank" rel="noopener noreferrer">
                Jahangirnagar University
              </a>
            </h3>
            <p className="duration">Feb. 2019 -- Apr. 2024</p>
          </div>
          <p>Bachelor of Science in Computer Science and Engineering (CGPA: 3.84, Position: 3/59)</p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>
              <a href="https://www.hcc.edu.bd/" target="_blank" rel="noopener noreferrer">
                Holy Cross College
              </a>
            </h3>
            <p className="duration">2016 -- 2018</p>
          </div>
          <p>Science (GPA: 5.00/5.00)</p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>
              <a href="https://www.facebook.com/bbahschool/" target="_blank" rel="noopener noreferrer">
                Bangladesh Bank Adarsha High School
              </a>
            </h3>
            <p className="duration">2006 -- 2016</p>
          </div>
          <p>Science (GPA: 5.00/5.00)</p>
        </div>
      </section>
    </div>
  );
};

export default About;