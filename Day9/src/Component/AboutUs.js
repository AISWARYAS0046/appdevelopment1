import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

function AboutUs() {
  return (
    <div className="about-us-container">
      <header>
        <h1>About Us</h1>
      
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>Welcome to Friendify</h2>
          <p>
            Friendify is a social media platform that connects people from all around the world. Our mission is to bring people closer together, foster meaningful connections, and make the world a friendlier place.
          </p>
        </div>
      </section>
      <section className="about-section">
  <div className="about-content">
    <h2>Welcome to Friendify</h2>
    <p>
      Friendify is a social media platform designed to connect people from all over the world. Our goal is to create a friendly and inclusive online community where you can make new friends, share experiences, and stay connected with loved ones.
    </p>
    <p>
      We believe that meaningful connections enrich our lives. Whether you're looking to meet new people, stay in touch with old friends, or engage in interesting conversations, Friendify is here to help you build and strengthen your social connections.
    </p>
    <p>
      Our platform offers a range of features to enhance your social experience, including personalized profiles, real-time messaging, news feeds, and much more. We are committed to providing a safe and enjoyable environment for all users.
    </p>
    <p>
      Thank you for choosing Friendify. We look forward to being a part of your social journey!
    </p>
  </div>
</section>

      

      
    </div>
  );
}

export default AboutUs;
