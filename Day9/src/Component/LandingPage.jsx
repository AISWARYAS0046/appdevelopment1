import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <main className="hi">
      <section className="hero">
        {/* <video autoPlay loop muted className="bg-video">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="content">
          <h1>Welcome to FRIENDIFY!</h1>
          <p>Experience the Magic of Friendship at Friendify</p>
          {/* Link to the Signup page */}
          <Link to="/signup" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
