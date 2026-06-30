// Import all section data
import numericalReasoning from './sections/numerical-reasoning';
import verbalReasoning from './sections/verbal-reasoning';
import abstractReasoning from './sections/abstract-reasoning';
import logicalReasoning from './sections/logical-reasoning';
import engineeringFundamentals from './sections/engineering-fundamentals';
import situationalJudgement from './sections/situational-judgement';

// Import all questions
import numericalReasoningQuestions from './questions/numerical-reasoning-questions';
import verbalReasoningQuestions from './questions/verbal-reasoning-questions';
import abstractReasoningQuestions from './questions/abstract-reasoning-questions';
import logicalReasoningQuestions from './questions/logical-reasoning-questions';
import engineeringFundamentalsQuestions from './questions/engineering-fundamentals-questions';
import situationalJudgementQuestions from './questions/situational-judgement-questions';

// Combine all sections into the main study data
export const studyData = {
  sections: [
    numericalReasoning,
    verbalReasoning,
    abstractReasoning,
    logicalReasoning,
    engineeringFundamentals,
    situationalJudgement
  ]
};

// Export all questions with section IDs as keys
export const questions = {
  'numerical-reasoning': numericalReasoningQuestions,
  'verbal-reasoning': verbalReasoningQuestions,
  'abstract-reasoning': abstractReasoningQuestions,
  'logical-reasoning': logicalReasoningQuestions,
  'engineering-fundamentals': engineeringFundamentalsQuestions,
  'situational-judgement': situationalJudgementQuestions
};

// Default export for convenience
export default studyData;