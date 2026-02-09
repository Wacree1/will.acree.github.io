import React from 'react';
import './projects.css';
import ImageCarousel from './ImageCarousel.jsx';
import projectOnePhoto from '../assets/project_one_photo.png';
import projectTwoPhoto from '../assets/project_one_photo2.png';
import projectThreePhoto from '../assets/project_one_photo3.JPG';
import projectFourPhoto from '../assets/project_two_photo1.png';
import projectFivePhoto from '../assets/project_two_photo2.JPG';
import projectSixPhoto from '../assets/project_two_photo3.png';
import projectSevenPhoto from '../assets/project_three_photo1.png';
import projectEightPhoto from '../assets/project_three_photo2.png';
import projectNinePhoto from '../assets/project_three_photo3.png';

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <ul className="projects-list">
                <li className="project-item">
                    <h5>Personal Website (January 2026 to February 2026)</h5>
                    <ImageCarousel images={[projectThreePhoto, projectOnePhoto, projectTwoPhoto]} altText="Personal website screenshot" />
                    <p>This is a currently ongoing project to build this very website! I've always had an interest in front end development and in my prior job experience, I had the opportunity to become proficient in web development. I used react js to build this website to create an organized component-based architecture that is easy to maintain.</p>
                </li>
                <li className="project-item">
                    <h5>Project Robotigo (August 2024 to December 2024)</h5>
                    <ImageCarousel images={[projectFourPhoto, projectFivePhoto, projectSixPhoto]} altText="Project Robotigo screenshot" />
                    <p>Project Robotigo was a project to build a food delivery drone. I led a team of 3 to design a drone that could deliver a 5 kg payload as well as a prototype that served as proof of concept. From designing and testing, I learned how to manage a team project, use CAD software, and systematically ensure project criteria is met. From building the prototype, I learned a lot about how to configure electrical components, soldering, and the physics behind propellor-driver aircrafts.</p>
                </li>
                <li className="project-item">
                    <h5>Solar Panel Efficiency Project (Upcoming)</h5>
                    <p>I am currently working out the logistics for a solar panel project. The goal is to maximize the energy return of my solar panel, calculate its efficiency, and compare that to industry-grade solar panels. I am currently researching solar panels, how to maximize their efficiency, and what measures I can realistically take to maximize the efficiency of my own solar panel.</p>
                </li>
                <li className="project-item">
                    <h5>Lego Storm Robot Project (January 2025 to April 2025)</h5>
                    <ImageCarousel images={[projectSevenPhoto, projectEightPhoto, projectNinePhoto]} altText="Lego Storm Robot screenshot" />
                    <p>The Lego Storm Robot Project was a project for my introductory engineering project. I led a team of 4 to build a robot that tracked a black line, picked up boxes, determined the weight of the box, and dropped the boxes off at designated drop-off zones. This project taught me a lot about project constraints, as we were only given a specific set of materials (legos, sensors, etc), and how to work with sensors to achieve project goals.</p>
                </li>
            </ul>
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
    );
}

export default Projects;