import React from 'react';

const SectionScreen = ({ section, onTopicSelect, onBack, onStartTest }) => {
  const getIconColor = (sectionId) => {
    const colors = {
      'numerical-reasoning': '#2563eb',
      'verbal-reasoning': '#059669',
      'abstract-reasoning': '#7c3aed',
      'logical-reasoning': '#dc2626',
      'engineering-fundamentals': '#d97706',
      'situational-judgement': '#8b5cf6'
    };
    return colors[sectionId] || '#6b7280';
  };

  // Map topic titles to Bootstrap icons
  const getTopicIcon = (title) => {
    const iconMap = {
      'Percentages': 'bi-percent',
      'Ratios': 'bi-arrow-left-right',
      'Profit & Loss': 'bi-wallet2',
      'Speed, Time & Distance': 'bi-speedometer2',
      'Probability': 'bi-dice-6',
      'Graph Interpretation': 'bi-bar-chart',
      'Tables': 'bi-table',
      'Sequences': 'bi-sort-numeric-down',
      'Reading Comprehension': 'bi-book',
      'True/False/Cannot Say': 'bi-check2-square',
      'Grammar': 'bi-pencil-square',
      'Vocabulary': 'bi-bookmarks',
      'Sentence Completion': 'bi-text-paragraph',
      'Shapes': 'bi-hexagon',
      'Patterns': 'bi-grid-3x3-gap',
      'Rotations': 'bi-arrow-repeat',
      'Missing Figures': 'bi-question-square',
      'Logical Sequences': 'bi-diagram-3',
      'Number Patterns': 'bi-sort-numeric-up',
      'Deductive Reasoning': 'bi-lightbulb',
      'Critical Thinking': 'bi-brain',
      'Electrical Engineering': 'bi-lightning',
      'General Engineering': 'bi-tools',
      'Oil & Gas': 'bi-fuel-pump',
      'Safety Procedures': 'bi-shield-check',
      'Teamwork': 'bi-people',
      'Confidentiality': 'bi-lock',
      'Ethical Dilemmas': 'bi-balance'
    };
    for (const [key, icon] of Object.entries(iconMap)) {
      if (title.includes(key)) {
        return icon;
      }
    }
    return 'bi-file-text';
  };

  // Get icon background color based on topic
  const getTopicIconColor = (title) => {
    const colorMap = {
      'Percentages': '#2563eb',
      'Ratios': '#3b82f6',
      'Profit & Loss': '#f59e0b',
      'Speed, Time & Distance': '#8b5cf6',
      'Probability': '#ec4899',
      'Graph Interpretation': '#06b6d4',
      'Tables': '#10b981',
      'Sequences': '#6366f1',
      'Reading Comprehension': '#059669',
      'True/False/Cannot Say': '#34d399',
      'Grammar': '#6ee7b7',
      'Vocabulary': '#a7f3d0',
      'Sentence Completion': '#d1fae5',
      'Shapes': '#7c3aed',
      'Patterns': '#8b5cf6',
      'Rotations': '#a78bfa',
      'Missing Figures': '#c4b5fd',
      'Logical Sequences': '#ddd6fe',
      'Number Patterns': '#dc2626',
      'Deductive Reasoning': '#ef4444',
      'Critical Thinking': '#f87171',
      'Electrical Engineering': '#d97706',
      'General Engineering': '#f59e0b',
      'Oil & Gas': '#fbbf24',
      'Safety Procedures': '#8b5cf6',
      'Teamwork': '#3b82f6',
      'Confidentiality': '#059669',
      'Ethical Dilemmas': '#dc2626'
    };
    for (const [key, color] of Object.entries(colorMap)) {
      if (title.includes(key)) {
        return color;
      }
    }
    return '#6b7280';
  };

  // Count total questions for this section
  const getTotalQuestions = () => {
    // This will be passed from parent or calculated from questions data
    return section.totalQuestions || 100;
  };

  return (
    <div className="section-screen-container">
      <div className="section-screen-wrapper">
        {/* Back Button - Goes back to Home */}
        <button 
          className="section-back-btn" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onBack(e);
          }}
        >
          <i className="bi bi-arrow-left"></i>
          <span>Back to Home</span>
        </button>

        {/* Section Header */}
        <div className="section-header">
          <div 
            className="section-header-icon" 
            style={{ background: getIconColor(section.id) }}
          >
            <i className={`bi ${section.icon}`}></i>
          </div>
          <div className="section-header-text">
            <h1 className="section-title">{section.title}</h1>
            <p className="section-description">{section.description}</p>
            <div className="section-stats">
              <span className="stat-badge">
                <i className="bi bi-book"></i>
                {section.topics ? section.topics.length : 0} Topics
              </span>
              <span className="stat-badge">
                <i className="bi bi-question-circle"></i>
                {getTotalQuestions()} Questions
              </span>
            </div>
          </div>
        </div>

        {/* Test Your Brain Button */}
        <div className="test-brain-section">
          <button 
            className="test-brain-btn"
            onClick={() => onStartTest(section.id)}
            style={{ '--btn-color': getIconColor(section.id) }}
          >
            <div className="test-brain-content">
              <div className="test-brain-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <div className="test-brain-text">
                <h3>🧠 Test Your Brain</h3>
                <p>Take a {getTotalQuestions()}-question test on {section.title}</p>
              </div>
              <div className="test-brain-arrow">
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
            <div className="test-brain-timer">
              <i className="bi bi-clock"></i>
              <span>~{Math.ceil(getTotalQuestions() * 0.6)} min</span>
            </div>
          </button>
        </div>

        {/* Topics Grid */}
        <div className="topics-grid">
          {section.topics && section.topics.map((topic, index) => {
            const cleanTitle = topic.title.replace(/[📊🔢💰⏱️🎲📈📋🔢📖✅❌❓✍️📚🔷🎨🔄❓🧩🔢🧠💭⚡🛠️🛢️🦺🤝🔒⚖️]/g, '').trim();
            const icon = getTopicIcon(cleanTitle);
            const iconColor = getTopicIconColor(cleanTitle);
            
            return (
              <div 
                key={topic.id} 
                className="topic-card-item"
                onClick={() => onTopicSelect(topic.id)}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  borderLeft: `4px solid ${getIconColor(section.id)}`
                }}
              >
                <div className="topic-card-content">
                  <div 
                    className="topic-icon-wrapper"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: `${iconColor}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <i 
                      className={`bi ${icon}`} 
                      style={{ 
                        fontSize: '1.1rem', 
                        color: iconColor 
                      }}
                    ></i>
                  </div>
                  <div className="topic-info">
                    <h3 className="topic-title">{cleanTitle}</h3>
                    <span className="topic-badge">
                      {topic.content ? 'View Content' : 'Coming Soon'}
                    </span>
                  </div>
                  <div className="topic-arrow">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionScreen;