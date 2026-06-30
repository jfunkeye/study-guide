import React, { useState, useEffect } from 'react';
import studyData from './data/studyData';
import { questions } from './data/studyData';
import HomeScreen from './components/HomeScreen';
import SectionScreen from './components/SectionScreen';
import TopicScreen from './components/TopicScreen';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [testQuestions, setTestQuestions] = useState([]);
  const [testAnswers, setTestAnswers] = useState({});
  const [testSection, setTestSection] = useState(null);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (currentScreen === 'topic') {
        setCurrentScreen('section');
        setSelectedTopic(null);
      } else if (currentScreen === 'section') {
        setCurrentScreen('home');
        setSelectedSection(null);
      } else if (currentScreen === 'test') {
        setCurrentScreen('section');
        setTestQuestions([]);
      } else if (currentScreen === 'result') {
        setCurrentScreen('section');
        setTestAnswers({});
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentScreen]);

  // Handle section selection from home screen
  const handleSectionSelect = (sectionId) => {
    const section = studyData.sections.find(s => s.id === sectionId);
    setSelectedSection(section);
    setCurrentScreen('section');
    window.history.pushState(null, '', window.location.pathname);
  };

  // Handle topic selection from section screen
  const handleTopicSelect = (topicId) => {
    const topic = selectedSection.topics.find(t => t.id === topicId);
    setSelectedTopic(topic);
    setCurrentScreen('topic');
    window.history.pushState(null, '', window.location.pathname);
  };

  // Handle back navigation
  const handleBack = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (currentScreen === 'topic') {
      setCurrentScreen('section');
      setSelectedTopic(null);
    } else if (currentScreen === 'section') {
      setCurrentScreen('home');
      setSelectedSection(null);
    } else if (currentScreen === 'test') {
      setCurrentScreen('section');
      setTestQuestions([]);
    } else if (currentScreen === 'result') {
      setCurrentScreen('section');
      setTestAnswers({});
      setTestSection(null);
    }
  };

  // Handle home navigation (from header)
  const handleHome = () => {
    setCurrentScreen('home');
    setSelectedSection(null);
    setSelectedTopic(null);
    setTestQuestions([]);
    setTestAnswers({});
    setTestSection(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  // Handle starting a test
  const handleStartTest = (sectionId) => {
    const section = studyData.sections.find(s => s.id === sectionId);
    const sectionQuestions = questions[sectionId]?.questions || [];
    
    if (sectionQuestions.length === 0) {
      alert('No questions available for this section yet.');
      return;
    }

    // Shuffle questions and take up to 100
    const shuffled = [...sectionQuestions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, 100);
    
    setTestSection(section);
    setTestQuestions(selectedQuestions);
    setTestAnswers({});
    setCurrentScreen('test');
    window.history.pushState(null, '', window.location.pathname);
  };

  // Handle test submission
  const handleTestSubmit = (answers) => {
    setTestAnswers(answers);
    setCurrentScreen('result');
    window.history.pushState(null, '', window.location.pathname);
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-brand" onClick={handleHome} style={{ cursor: 'pointer' }}>
            <div className="header-brand-icon">
              <i className="bi bi-book-half"></i>
            </div>
            <div className="header-brand-text">
              Study<span>Hub</span>
            </div>
          </div>
          <div className="header-badge">
            <i className="bi bi-grid me-1"></i>
            {studyData.sections.length} Sections
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentScreen === 'home' && (
          <HomeScreen 
            sections={studyData.sections}
            onSectionSelect={handleSectionSelect}
          />
        )}
        
        {currentScreen === 'section' && selectedSection && (
          <SectionScreen
            section={selectedSection}
            onTopicSelect={handleTopicSelect}
            onBack={handleBack}
            onStartTest={handleStartTest}
          />
        )}
        
        {currentScreen === 'topic' && selectedTopic && selectedSection && (
          <TopicScreen
            section={selectedSection}
            topic={selectedTopic}
            onBack={handleBack}
          />
        )}

        {currentScreen === 'test' && testSection && testQuestions.length > 0 && (
          <TestScreen
            section={testSection}
            questions={testQuestions}
            onBack={handleBack}
            onSubmit={handleTestSubmit}
          />
        )}

        {currentScreen === 'result' && testSection && testQuestions.length > 0 && (
          <ResultScreen
            section={testSection}
            questions={testQuestions}
            answers={testAnswers}
            onBack={handleBack}
          />
        )}
      </main>
    </div>
  );
}

export default App;