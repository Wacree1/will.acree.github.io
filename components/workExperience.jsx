import React from 'react';
import './workExperience.css';

function WorkExperience({ setCurrentPage }) {
    return (
        <div className="work-experience-container">
{/*Work Experience section header*/}
            <div className="work-experience-header">
                <h1>Work Experience</h1>
            </div>

{/*Skills developed through past work experience*/}
            <div className="work-experience-section">
                <h2>Polygon Solutions Internship</h2>
                <p>During my internship at <a href="https://polygonsol.com/" target="_blank" rel="noopener noreferrer">Polygon Solutions</a>, I developed both soft skills and technical skills relevant to the field of electrical engineering. Some of these skills include:</p>
                <div className="work-experience-grid">
                    <div className="work-experience-card">
                        <div>
                            <h5>Large Language Models</h5>
                                <p>I had a unique opportunity to build a large language model called Pulse BI. This LLM was designed to take a user input and based on that input, generate a chart/dashboard that is tailored to the user's specific needs. During this project, I learned how to train and configure an LLM as well as embed 3rd party software into web applications.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Back End Development</h5>
                                <p>During my internship, I gained experience building back ends for various software products. I learned how to implement server-side logic, manage databases, and build APIs that support front-end applications.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Spatial Data Analysis</h5>
                                <p>During my internship, I performed data analysis and transformations on spatial datasets with over 50,000 records, gaining experience with softwares such as <a href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/" target="_blank" rel="noopener noreferrer">ARCGIS</a> and <a href="https://www.safe.com/" target="_blank" rel="noopener noreferrer">FME.</a></p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Technical Documentation</h5>
                                <p>Part of my role as a technology intern was to create and maintain technical documentation and user guides for various ongoing projects. I learned how to write clear, concise documentation that is accessible and understandable to both technical and non-technical audiences.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Front End Development</h5>
                                <p>During my internship, I gained experience building front ends for various software products, focusing on high quality user experience. I learned various front end languages such as HTML, CSS, and JavaScript, as well as frameworks such as ReactJS, NodeJS, and Bootstrap.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Teamwork</h5>
                                <p>It is my belief that in any engineering setting, teamwork is essential for success. At Polygon Solutions, I had the opportunity to collaborate with people of many different backgrounds and skillsets on a wide range of projects, often connecting the dots between the technical side and business side of projects.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
           
    );
}

export default WorkExperience;
