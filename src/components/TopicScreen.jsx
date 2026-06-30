import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const TopicScreen = ({ section, topic, onBack }) => {
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

  const cleanTitle = topic.title.replace(/[📊🔢💰⏱️🎲📈📋🔢📖✅❌❓✍️📚🔷🎨🔄❓🧩🔢🧠💭⚡🛠️🛢️🦺🤝🔒⚖️]/g, '').trim();
  const topicIcon = getTopicIcon(cleanTitle);
  const iconColor = getTopicIconColor(cleanTitle);

  return (
    <div className="topic-container">
      {/* Back Button - Goes back to current section's topic list */}
      <button 
        className="section-back-btn" 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onBack(e);
        }}
      >
        <i className="bi bi-arrow-left"></i>
        <span>Back to {section.title}</span>
      </button>

      {/* Topic Header */}
      <div className="section-header" style={{ marginBottom: '24px' }}>
        <div 
          className="section-header-icon" 
          style={{ background: getIconColor(section.id) }}
        >
          <i className={`bi ${section.icon}`}></i>
        </div>
        <div className="section-header-text">
          <h1 className="section-title" style={{ fontSize: '1.5rem' }}>{cleanTitle}</h1>
          <p className="section-description" style={{ marginBottom: '0' }}>
            <i className={`bi ${topicIcon}`} style={{ color: iconColor, marginRight: '8px' }}></i>
            {section.title}
          </p>
        </div>
      </div>

      {/* Topic Content */}
      <div className="topic-card">
        {topic.content ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 className="fs-3 fw-bold mt-4 mb-3" {...props} />,
              h2: ({ node, ...props }) => <h2 className="fs-4 fw-bold mt-3 mb-2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="fs-5 fw-bold mt-3 mb-2" {...props} />,
              h4: ({ node, ...props }) => <h4 className="fs-6 fw-bold mt-3 mb-2" {...props} />,
              h5: ({ node, ...props }) => <h5 className="fs-6 fw-bold mt-3 mb-2" {...props} />,
              h6: ({ node, ...props }) => <h6 className="fs-6 fw-bold mt-3 mb-2" {...props} />,
              p: ({ node, ...props }) => <p className="mb-3" {...props} />,
              ul: ({ node, ...props }) => <ul className="mb-3 ps-3" {...props} />,
              ol: ({ node, ...props }) => <ol className="mb-3 ps-3" {...props} />,
              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-start border-4 border-primary ps-3 py-2 my-3 bg-light" {...props} />
              ),
              code: ({ inline, className, children, ...props }) => {
                if (inline) {
                  return <code className="bg-light px-2 py-1 rounded" {...props}>{children}</code>;
                }
                return (
                  <pre className="bg-dark text-light p-3 rounded-3 mb-3" style={{ overflowX: 'auto' }}>
                    <code {...props}>{children}</code>
                  </pre>
                );
              },
              table: ({ node, ...props }) => (
                <div className="table-responsive mb-4">
                  <table className="table table-bordered table-striped table-hover" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => <thead {...props} />,
              tbody: ({ node, ...props }) => <tbody {...props} />,
              tr: ({ node, ...props }) => <tr {...props} />,
              th: ({ node, ...props }) => <th className="px-3 py-2" {...props} />,
              td: ({ node, ...props }) => <td className="px-3 py-2" {...props} />,
              strong: ({ node, ...props }) => <strong className="text-primary" {...props} />,
              hr: ({ node, ...props }) => <hr className="my-4" {...props} />
            }}
          >
            {topic.content}
          </ReactMarkdown>
        ) : (
          <div className="text-center text-muted py-4">
            <i className="bi bi-inbox fs-1 d-block mb-2"></i>
            <p>Content coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicScreen;