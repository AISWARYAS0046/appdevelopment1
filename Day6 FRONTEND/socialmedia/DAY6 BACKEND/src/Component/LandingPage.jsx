import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <main className="hi">
      <section className="hero">
       
        <div className="content">
          <h1>Welcome to FRIENDIFY!</h1>
          <p>Experience the magic of friendship at friendify!</p>
          {/* Link to the Signup page */}
          <Link to="/loginsignup" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
