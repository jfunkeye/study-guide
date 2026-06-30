import React from 'react';

const ResultScreen = ({ section, questions, answers, onBack }) => {
  // Calculate results
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    const detailedResults = [];

    questions.forEach(q => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correctAnswer;
      
      if (!userAnswer) {
        unanswered++;
      } else if (isCorrect) {
        correct++;
      } else {
        incorrect++;
      }

      detailedResults.push({
        ...q,
        userAnswer,
        isCorrect: userAnswer ? isCorrect : false,
        isUnanswered: !userAnswer
      });
    });

    return { correct, incorrect, unanswered, total: questions.length, detailedResults };
  };

  const results = calculateResults();
  const score = Math.round((results.correct / results.total) * 100);
  const passed = score >= 70;

  // Get performance message
  const getPerformanceMessage = () => {
    if (score >= 90) return { emoji: '🌟', message: 'Outstanding Performance!', class: 'excellent' };
    if (score >= 80) return { emoji: '🎉', message: 'Excellent Work!', class: 'excellent' };
    if (score >= 70) return { emoji: '👍', message: 'Good Job!', class: 'good' };
    if (score >= 60) return { emoji: '📚', message: 'Keep Practicing!', class: 'average' };
    return { emoji: '💪', message: 'More Practice Needed!', class: 'needs-practice' };
  };

  const performance = getPerformanceMessage();

  const getGrade = () => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="result-screen-container">
      <div className="result-screen-wrapper">
        {/* Header */}
        <div className="result-header">
          <button 
            className="test-back-btn"
            onClick={onBack}
          >
            <i className="bi bi-arrow-left"></i>
            Back to Section
          </button>
          <h1 className="result-title">📊 Test Results</h1>
          <p className="result-subtitle">{section.title} - Complete Assessment</p>
        </div>

        {/* Score Card */}
        <div className="result-score-card">
          <div className={`score-circle ${performance.class}`}>
            <div className="score-number">{score}%</div>
            <div className="score-label">Score</div>
          </div>
          <div className="score-details">
            <div className="score-grade">
              <span className="grade-letter">{getGrade()}</span>
              <span className="grade-label">Grade</span>
            </div>
            <div className="score-status">
              <div className={`status-badge ${passed ? 'passed' : 'failed'}`}>
                {passed ? '✅ Passed' : '❌ Failed'}
              </div>
              <div className="performance-message">
                <span className="performance-emoji">{performance.emoji}</span>
                <span className="performance-text">{performance.message}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="result-stats">
          <div className="stat-card correct">
            <div className="stat-icon">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <div className="stat-info">
              <span className="stat-number">{results.correct}</span>
              <span className="stat-label">Correct</span>
            </div>
          </div>
          <div className="stat-card incorrect">
            <div className="stat-icon">
              <i className="bi bi-x-circle-fill"></i>
            </div>
            <div className="stat-info">
              <span className="stat-number">{results.incorrect}</span>
              <span className="stat-label">Incorrect</span>
            </div>
          </div>
          <div className="stat-card unanswered">
            <div className="stat-icon">
              <i className="bi bi-question-circle-fill"></i>
            </div>
            <div className="stat-info">
              <span className="stat-number">{results.unanswered}</span>
              <span className="stat-label">Unanswered</span>
            </div>
          </div>
          <div className="stat-card total">
            <div className="stat-icon">
              <i className="bi bi-file-text-fill"></i>
            </div>
            <div className="stat-info">
              <span className="stat-number">{results.total}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="result-actions">
          <button 
            className="action-btn review-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            <i className="bi bi-eye"></i>
            {showDetails ? 'Hide Details' : 'Review Answers'}
          </button>
          <button 
            className="action-btn retry-btn"
            onClick={() => window.location.reload()}
          >
            <i className="bi bi-arrow-repeat"></i>
            Retry Test
          </button>
        </div>

        {/* Detailed Results */}
        {showDetails && (
          <div className="result-details">
            <h3>📝 Question Review</h3>
            <div className="details-list">
              {results.detailedResults.map((q, index) => (
                <div 
                  key={q.id} 
                  className={`detail-item ${q.isCorrect ? 'correct' : q.isUnanswered ? 'unanswered' : 'incorrect'}`}
                >
                  <div className="detail-header">
                    <span className="detail-number">Q{index + 1}</span>
                    <span className="detail-topic">{q.topic}</span>
                    <span className={`detail-status ${
                      q.isCorrect ? 'status-correct' : 
                      q.isUnanswered ? 'status-unanswered' : 'status-incorrect'
                    }`}>
                      {q.isCorrect ? '✅ Correct' : q.isUnanswered ? '❓ Unanswered' : '❌ Incorrect'}
                    </span>
                  </div>
                  <p className="detail-question">{q.question}</p>
                  <div className="detail-answers">
                    <p><strong>Your Answer:</strong> {q.userAnswer || 'Not Answered'}</p>
                    <p><strong>Correct Answer:</strong> {q.correctAnswer}</p>
                    {!q.isCorrect && !q.isUnanswered && (
                      <p className="detail-explanation">
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Tips */}
        {score < 70 && (
          <div className="performance-tips">
            <h4>💡 Tips to Improve:</h4>
            <ul>
              <li>Review the topics you found challenging</li>
              <li>Practice more questions on each topic</li>
              <li>Read the explanations carefully</li>
              <li>Time management is key - practice with timed tests</li>
            </ul>
          </div>
        )}

        {score >= 90 && (
          <div className="performance-tips excellent">
            <h4>🏆 Excellent Achievement!</h4>
            <p>You've demonstrated mastery of {section.title}. Consider moving to the next section or taking the full exam!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultScreen;