import React, { useState, useEffect } from 'react';
import NavBar from '../components/nav_bar.jsx';
import Home from '../components/home.jsx';
import Projects from '../components/projects.jsx';
import Skills from '../components/skills.jsx';
import WorkExperience from '../components/workExperience.jsx';
import Contact from '../components/contact.jsx';
import Interests from '../components/interests.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Get the current path from the URL
    const path = window.location.pathname;
    if (path === '/' || path === '/home') {
      setCurrentPage('home');
    } else if (path === '/projects') {
      setCurrentPage('projects');
    } else if (path === '/skills') {
      setCurrentPage('skills');
    } else if (path === '/workExperience') {
      setCurrentPage('workExperience');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/interests') {
      setCurrentPage('interests');
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handlePopState = (e) => {
    const path = window.location.pathname;
    if (path === '/' || path === '/home') setCurrentPage('home');
    else if (path === '/projects') setCurrentPage('projects');
    else if (path === '/skills') setCurrentPage('skills');
    else if (path === '/workExperience') setCurrentPage('workExperience');
    else if (path === '/contact') setCurrentPage('contact');
    else if (path === '/interests') setCurrentPage('interests');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page === 'home' ? '' : page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills setCurrentPage={handlePageChange} />;
      case 'workExperience':
        return <WorkExperience setCurrentPage={handlePageChange} />;
      case 'contact':
        return <Contact />;
      case 'interests':
        return <Interests setCurrentPage={handlePageChange} />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavBar setCurrentPage={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
