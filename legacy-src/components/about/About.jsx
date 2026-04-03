import React from "react";
import "./about.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function about() {
  return (
    <section id="About">
      <div className="about">
        <div className="intoduction">
          <span>Hi, My name is</span>
          <h2>Kuan Hsien (KH) <br />I am a frontend expert</h2>
          <p>
            A highly motivated professional with more than 4 years of working experience in the fields of digital cryptocurrency exchange, E-Commerce web development and marketing automation.
          </p>
          <p>
            Skilled in web development, software testing, React, Vue, Javascript (ES6+), Python, C#, NodeJS, MongoDB, MSSQL, Third-party APIs, OAuth.
          </p>
        </div>
        <div className='link'>
          <a href='https://github.com/KuanHsienYEH'><FaGithub size="2em" color="cornflowerblue" /></a>
          <a href='https://www.linkedin.com/in/software-engineer-kh-yeh/'><FaLinkedin size="2em" color="cornflowerblue" /></a>
        </div>
        <a href="https://www.linkedin.com/in/software-engineer-kh-yeh/" className="learnmore">Learn More About Me</a>
      </div>
    </section>
  );
}

export default about;
