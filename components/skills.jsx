import React from 'react';
import './skills.css';

function Skills({ setCurrentPage }) {
    return (
        <div className="skills-container">
{/*Skills section header*/}
            <div className="skills-header">
                <h1>Skills/Education</h1>
            </div>
            <div className="skills-section">

{/*Skills developed through University of Cincinnati courses*/}
                <h2>University of Cincinnati</h2>
                <p>As an electrical engineering student at the University of Cincinnati, I have taken a variety of courses that have provided me with a solid understanding of electrical engineering concepts and principles. Some of the key courses I have taken include:</p>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div>
                        <h5>Network Analysis</h5>
                        <p>In Network Analysis, I learned fundamental concepts in circuit analysis and design, including Kirchhoff's laws, nodal and mesh analysis, and the behavior of various circuit elements such as resistors, capacitors, and inductors.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Signals & Systems</h5>
                        <p>In Signals & Systems, I studied the mathematical representation of signals and systems, including time and frequency domain analysis, convolution, and the use of transforms such as the Fourier and Laplace transforms.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Digital Design</h5>
                        <p>In Digital Design, I learned the fundamentals of digital circuit design, including combinational and sequential logic design, flip-flops, and the use of hardware description languages such as Verilog.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Semiconductor Physics</h5>
                        <p>In Semiconductor Physics, I studied the behavior of semiconductors and their applications in electronic devices such as diodes, transistors, and integrated circuits.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Computer Science I</h5>
                        <p>In Computer Science I, I learned fundamental programming concepts and problem-solving techniques using the C++ programming language.</p>
                        </div>                    
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Public Speaking</h5>
                        <p>In Public Speaking, I developed my public speaking and presentation skills through various exercises and group activities, gaining confidence in delivering presentations and engaging with audiences.</p>
                        </div>
                    </div>
                </div>
            </div>

{/*Skills developed through past work experience*/}
            <div className="skills-section">
                <h2>Past Work Experience</h2>
                <p>Through my former internship at <a href="https://polygonsol.com/" target="_blank" rel="noopener noreferrer">Polygon Solutions</a>, I developed both soft skills and technical skills relevant to the field of electrical engineering. Some of these skills include:</p>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div>
                            <h5>Teamwork</h5>
                                <p>It is my belief that in any engineering setting, teamwork is essential for success. At Polygon Solutions, I had the opportunity to collaborate with people of many different backgrounds and skillsets on a wide range of projects, often connecting the dots between the technical side and business side of projects.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                            <h5>Technical Documentation</h5>
                                <p>Part of my role as a technology intern was to create and maintain technical documentation and user guides for various ongoing projects. I learned how to write clear, concise documentation that is accessible and understandable to both technical and non-technical audiences.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                            <h5>Front End Development</h5>
                                <p>During my internship, I gained experience building front ends for various software products, focusing on high quality user experience. I learned various front end languages such as HTML, CSS, and JavaScript, as well as frameworks such as ReactJS, NodeJS, and Bootstrap.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                            <h5>Back End Development</h5>
                                <p>During my internship, I gained experience building back ends for various software products. I learned how to implement server-side logic, manage databases, and build APIs that support front-end applications.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                            <h5>Large Language Models</h5>
                                <p>I had a unique opportunity to build a large language model called Pulse BI. This LLM was designed to take a user input and based on that input, generate a chart/dashboard that is tailored to the user's specific needs. During this project, I learned how to train and configure an LLM as well as embed 3rd party software into web applications.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                            <h5>Spatial Data Analysis</h5>
                                <p>During my internship, I performed data analysis and transformations on spatial datasets with over 50,000 records, gaining experience with softwares such as <a href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/" target="_blank" rel="noopener noreferrer">ARCGIS</a> and <a href="https://www.safe.com/" target="_blank" rel="noopener noreferrer">FME.</a></p>
                        </div>
                    </div>
                </div>
            </div>

{/*Skills developed through engineering projects*/}
            <div className="skills-section">
                <h2>Engineering Projects</h2>
                <p>Throughout my college career, I've worked on a variety of engineering projects that have helped me develop both technical and soft skills. For more information about these projects, please visit the <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>Projects</a> section of this website. I will detail the skills used for these projects over there!</p>
            </div>
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
           
    );
}

export default Skills;