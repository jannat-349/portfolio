import React from 'react';
import '../styles/Footer.css'; // Ensure this CSS file is created

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/jannat349/" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="social-icon linkedin-icon" />
                </a>
                <a href="https://github.com/jannat-349" target="_blank" rel="noopener noreferrer" className="github">
                    <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="social-icon github-icon" />
                </a>
                <a href="https://www.facebook.com/jannatul.ferdoush.1217" target="_blank" rel="noopener noreferrer" className="facebook">
                    <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" className="social-icon facebook-icon" />
                </a>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Jannatul. All rights reserved.</p>
            </div>
            <div className="contact-info">
                <p>
                    <a href="tel:+8801795794850" className="contact-link">
                        <i className="fas fa-phone contact-icon phone-icon"></i> Phone: +8801795794850
                    </a>
                </p>
                <p>
                    <a href="mailto:jannatul.6249@gmail.com" className="contact-link">
                        <i className="fas fa-envelope contact-icon email-icon"></i> Email: jannatul.6249@gmail.com
                    </a>
                </p>
                <p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Dhaka%2C%20Bangladesh" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="fas fa-map-marker-alt contact-icon address-icon"></i> Address: Dhaka, Bangladesh
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
