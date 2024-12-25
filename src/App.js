import React from "react";
import ReactDOM from "react-dom";
import './App.css'; // Import styles

const App = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hi, I&apos;m Bekten Orunbaev</h1>
          <p>A Frontend Engineer crafting engaging experiences for over 5 years.</p>
          <button className="cta-button">Explore My Work</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>I&apos;ve worked at companies like Apple and Gap, specializing in creating user-friendly and interactive web interfaces. I excel in technologies like React, JavaScript, and modern CSS frameworks.</p>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Apple</h3>
              <p>Frontend Engineer (2018-2021)</p>
            </div>
            <div className="timeline-item">
              <h3>Gap</h3>
              <p>Frontend Engineer (2021-2023)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukZ-198m1pn-B2gMhuZdeeU0T379lXGC-tg&s" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Interactive web app using React and Tailwind CSS.</p>
          </div>
          <div className="portfolio-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuURkmmbY6PPJ8LcoX01d8glmRWbEJvjU9Jw&s" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Modern e-commerce platform built with Next.js.</p>
          </div>
          <div className="portfolio-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p3yVs1M0pTseaNkTJxbfpgfiFDCgHO1ag&s" alt="Project 3" />
            <h3>Project 3</h3>
            <p>Real-time chat application with WebSocket.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills & Tools</h2>
        <div className="skills-content">
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Figma</li>
          </ul>
          <div className="skill-graph">
            {/* Example of animated skill bars */}
            <div className="skill-bar" style={{ width: "90%" }}>React.js - 90%</div>
            <div className="skill-bar" style={{ width: "85%" }}>JavaScript - 85%</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bekten-orunbaev-523872118" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/bekokg" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2024 Bekten Orunbaev. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

// Note: App.css should include styles for layout, animations, and responsiveness.
