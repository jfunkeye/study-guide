import React from 'react';

const HomeScreen = ({ sections, onSectionSelect }) => {
  const openExam = () => {
    window.open('https://aptitude-test-gilt.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-icon">
          <i className="bi bi-mortarboard"></i>
        </div>
        <h1 className="hero-title">
          Oil & Gas <span>Aptitude Study Guide</span>
        </h1>
        <p className="hero-subtitle">
          Technical Graduate Programme • Study & Practice
        </p>
        
        {/* TAKE EXAM BUTTON */}
        <button 
          className="exam-button"
          onClick={openExam}
        >
          <i className="bi bi-file-text"></i>
          TAKE EXAM
          <i className="bi bi-box-arrow-up-right"></i>
        </button>
      </div>

      {/* Section Grid */}
      <div className="section-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="section-card"
            onClick={() => onSectionSelect(section.id)}
            style={{ '--card-color': section.color }}
          >
            <div 
              className="section-card-icon" 
              style={{ background: section.color }}
            >
              <i className={`bi ${section.icon}`}></i>
            </div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <div className="section-card-meta">
              <i className="bi bi-book"></i>
              {section.topics.length || section.topics} Topics
            </div>
            <div className="arrow">
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;