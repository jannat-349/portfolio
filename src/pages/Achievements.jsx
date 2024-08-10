import React from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
    return (
        <div className="achievements-container">
            <section>
                <h2>My Achievements</h2>
                <div className="achievements-list">
                    <div className="achievement-item">
                        <h3>Leetcode Solutions</h3>
                        <p>Completed 30 days streak challenge</p>
                    </div>
                    <div className="achievement-item">
                        <h3>Yearly Merit Stipend from University</h3>
                        <p>Received every year</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Achievements;
