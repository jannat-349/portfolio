import React from 'react';
import '../styles/ErrorPage.css';

const ErrorPage = () => (
    <div className="not-found-container">
        <h1>404</h1>
        <p>Sorry, but the page you are looking for does not exist.</p>
        <a href="/portfolio/">Go to Home</a>
    </div>
);

export default ErrorPage;
