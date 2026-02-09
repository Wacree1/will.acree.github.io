import React from 'react';
import solar_panel from '../assets/solar_panel.png';
import running from '../assets/running.png';
import young_life from '../assets/young_life.png';
import './interests.css';

function Interests({ setCurrentPage }) {
    return (
        <div className="interests-container">
            <div className="interests-header">
                <h1>Interests/Involvement</h1>
            </div>
            <ul className="interests-list">
                <li className="interest-item">
                    <h5>Renewable energy</h5>
                    <p>I have recently gained an interest in the field of renewable energy. I am particularly fascinated by solar power technologies and have recently started learning more about photovoltaic cells and their applications. I am currently working out the logistics for a project to build a solar panel. For more information, view the <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>Projects</a> page.</p>
                    <img style={{width: '500px', height: 'auto'}} src={solar_panel} alt="Solar Panel"></img>
                </li>
                <li className="interest-item">
                    <h5>UC Run Club</h5>
                    <p>I have been a distance runner for several years and joined the UC Club Running Team when I started college at UC. Being part of this team has allowed me to connect with fellow runners, continue racing past high school, and be part of a positive campus community.</p>
                    <img style={{width: '300px', height: 'auto'}} src={running} alt="Running"></img>
                </li>
                <li className="interest-item">
                    <h5>UC Young Life College</h5>
                    <p>The most important part of my life is my faith. Being a college young life leader has given me the opportunity to show the love of Jesus to others and make a positive impact in the lives of my fellow college students.</p>
                    <img style={{width: '400px', height: 'auto'}} src={young_life} alt="Young Life"></img>
                </li>
                {/* Add more interest/involvement list items here if needed, keeping the same structure */}
            </ul>
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
    );
}

export default Interests;