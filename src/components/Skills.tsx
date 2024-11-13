import React from "react";
import "../app/styles/skills.css";

const Skills = () => {
    return(
        <div id="skills" className="skills-container">
            <div className="skills-grid">
                {/*first column: Heading and paragraph*/}
                <div data-aos="zoom-in-up" className="skills-left">
                    <h2 className="skills-heading">Technologies I  work with</h2>
                    <p className="skills-text">I have a solid foundation in web development, specializing in HTML,CSS and Javascript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications.</p>
                </div>

                {/*second column: skills*/}
            <div className="skills-right">
                <div className="skills-icons-grid">
                    <div className="skills-space">
                        <h2 data-aos="zoom-in-up">Html</h2>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>

                    <div className="skills-space">
                        <h2 data-aos="zoom-in-up">Css</h2>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
         </div>
    </div>
    );
};

export default Skills;

