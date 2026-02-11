import React from 'react';
import './skills.css';

function Skills({ setCurrentPage }) {
    return (
        <div className="skills-container">
{/*Skills section header*/}
            <div className="skills-header">
                <h1>Education</h1>
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
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
           
    );
}

export default Skills;