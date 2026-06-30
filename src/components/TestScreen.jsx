import React, { useState, useEffect } from 'react';

const TestScreen = ({ section, questions, onBack, onSubmit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes default
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Timer effect
  useEffect(() => {
    if (isSubmitted) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const handleAutoSubmit = () => {
    if (!isSubmitted) {
      setIsSubmitted(true);
      onSubmit(selectedAnswers);
    }
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit your test?')) {
      setIsSubmitted(true);
      onSubmit(selectedAnswers);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="test-screen-container">
      <div className="test-screen-wrapper">
        {/* Header */}
        <div className="test-header">
          <button 
            className="test-back-btn"
            onClick={onBack}
          >
            <i className="bi bi-arrow-left"></i>
            Back
          </button>
          <div className="test-header-info">
            <h2>{section.title} - Test</h2>
            <div className="test-stats">
              <span className="test-stat">
                <i className="bi bi-clock"></i>
                <span className={timeRemaining < 300 ? 'time-warning' : ''}>
                  {formatTime(timeRemaining)}
                </span>
              </span>
              <span className="test-stat">
                <i className="bi bi-check-circle"></i>
                {answeredCount}/{totalQuestions} Answered
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="test-progress">
          <div className="progress-bar-track">
            <div 
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>

        {/* Question */}
        <div className="test-question-container">
          <div className="question-header">
            <span className="question-number">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="question-topic">{currentQuestion.topic}</span>
            <span className={`question-difficulty difficulty-${currentQuestion.difficulty?.toLowerCase() || 'medium'}`}>
              {currentQuestion.difficulty || 'Medium'}
            </span>
          </div>
          <p className="question-text">{currentQuestion.question}</p>
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${selectedAnswers[currentQuestion.id] === option ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(currentQuestion.id, option)}
              >
                <span className="option-label">{String.fromCharCode(65 + index)}.</span>
                <span className="option-text">{option}</span>
                {selectedAnswers[currentQuestion.id] === option && (
                  <i className="bi bi-check-circle-fill option-check"></i>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="test-navigation">
          <button 
            className="nav-btn prev-btn"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <i className="bi bi-chevron-left"></i>
            Previous
          </button>
          <div className="nav-center">
            <span className="question-counter">
              {currentQuestionIndex + 1} / {totalQuestions}
            </span>
            <button 
              className="submit-btn"
              onClick={handleSubmit}
              disabled={answeredCount < totalQuestions}
            >
              Submit Test
            </button>
          </div>
          <button 
            className="nav-btn next-btn"
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
          >
            Next
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Question Grid - Quick Navigation */}
        <div className="question-grid">
          <span className="grid-label">Question Navigator:</span>
          <div className="grid-buttons">
            {questions.map((q, index) => (
              <button
                key={q.id}
                className={`grid-btn ${selectedAnswers[q.id] ? 'answered' : ''} ${currentQuestionIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;