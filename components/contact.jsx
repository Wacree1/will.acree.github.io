import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Me</h1>
                <p className="contact-sub">I'd love to hear from you — reach out via email, phone, or LinkedIn.</p>
            </div>

            <div className="contact-card">
                <div className="contact-item">
                    <h5>LinkedIn</h5>
                    <a className="contact-link" href="https://www.linkedin.com/in/william-acree" target="_blank" rel="noopener noreferrer">linkedin.com/in/william-acree</a>
                </div>

                <div className="contact-item">
                    <h5>Email</h5>
                    <a className="contact-link" href="mailto:acreewc@mail.uc.edu">acreewc@mail.uc.edu</a>
                </div>

                <div className="contact-item">
                    <h5>Phone</h5>
                    <p className="contact-link">(614) 949-5468</p>
                </div>
                <p className="contact-sub">I am available for 2nd co-op Summer of 2026 and 3rd co-op Spring of 2027.</p>
            </div>

            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
    );
}

export default Contact;