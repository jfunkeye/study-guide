export const logicalReasoningQuestions = {
  sectionId: 'logical-reasoning',
  sectionTitle: 'Logical Reasoning',
  totalQuestions: 100,
  questions: [
    // ============================================
    // NUMBER PATTERNS (Questions 1-40)
    // ============================================
    {
      id: 'lr-q1',
      topic: 'Number Patterns',
      difficulty: 'Easy',
      question: 'Find the next number: 5, 10, 15, 20, ?',
      options: ['22', '23', '24', '25'],
      correctAnswer: '25',
      explanation: 'Add 5 each time: 20 + 5 = 25 (Arithmetic sequence)'
    },
    {
      id: 'lr-q2',
      topic: 'Number Patterns',
      difficulty: 'Easy',
      question: 'Find the next number: 7, 14, 21, 28, ?',
      options: ['30', '32', '34', '35'],
      correctAnswer: '35',
      explanation: 'Add 7 each time: 28 + 7 = 35'
    },
    {
      id: 'lr-q3',
      topic: 'Number Patterns',
      difficulty: 'Easy',
      question: 'Find the next number: 40, 35, 30, 25, ?',
      options: ['15', '18', '20', '22'],
      correctAnswer: '20',
      explanation: 'Subtract 5 each time: 25 - 5 = 20'
    },
    {
      id: 'lr-q4',
      topic: 'Number Patterns',
      difficulty: 'Easy',
      question: 'Find the next number: 2, 6, 18, 54, ?',
      options: ['108', '162', '216', '243'],
      correctAnswer: '162',
      explanation: 'Multiply by 3 each time: 54 × 3 = 162 (Geometric sequence)'
    },
    {
      id: 'lr-q5',
      topic: 'Number Patterns',
      difficulty: 'Easy',
      question: 'Find the next number: 81, 27, 9, 3, ?',
      options: ['0', '1', '2', '3'],
      correctAnswer: '1',
      explanation: 'Divide by 3 each time: 3 ÷ 3 = 1'
    },
    {
      id: 'lr-q6',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the missing number: 4, 7, ?, 13, 16',
      options: ['8', '9', '10', '11'],
      correctAnswer: '10',
      explanation: 'Add 3 each time: 7 + 3 = 10'
    },
    {
      id: 'lr-q7',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the missing number: 3, 9, 27, ?, 243',
      options: ['54', '72', '81', '99'],
      correctAnswer: '81',
      explanation: 'Multiply by 3 each time: 27 × 3 = 81'
    },
    {
      id: 'lr-q8',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the next number: 1, 4, 9, 16, 25, ?',
      options: ['30', '35', '36', '40'],
      correctAnswer: '36',
      explanation: 'Square numbers: 1², 2², 3², 4², 5²; Next = 6² = 36'
    },
    {
      id: 'lr-q9',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the next number: 1, 8, 27, 64, 125, ?',
      options: ['196', '200', '216', '256'],
      correctAnswer: '216',
      explanation: 'Cube numbers: 1³, 2³, 3³, 4³, 5³; Next = 6³ = 216'
    },
    {
      id: 'lr-q10',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the next number: 1, 3, 6, 10, 15, 21, ?',
      options: ['25', '26', '27', '28'],
      correctAnswer: '28',
      explanation: 'Triangular numbers: +2, +3, +4, +5, +6; Next = 21 + 7 = 28'
    },
    {
      id: 'lr-q11',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the next number: 2, 5, 10, 17, 26, ?',
      options: ['32', '35', '37', '40'],
      correctAnswer: '37',
      explanation: 'Differences: +3, +5, +7, +9, +11; 26 + 11 = 37'
    },
    {
      id: 'lr-q12',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the next number: 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '12', '13', '14'],
      correctAnswer: '13',
      explanation: 'Fibonacci: each term is sum of previous two; 5 + 8 = 13'
    },
    {
      id: 'lr-q13',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the next number: 2, 3, 5, 7, 11, 13, ?',
      options: ['14', '15', '16', '17'],
      correctAnswer: '17',
      explanation: 'Prime numbers; after 13 comes 17'
    },
    {
      id: 'lr-q14',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the next number: 2, 4, 8, 16, 32, ?',
      options: ['48', '56', '64', '72'],
      correctAnswer: '64',
      explanation: 'Powers of 2: 2¹, 2², 2³, 2⁴, 2⁵; Next = 2⁶ = 64'
    },
    {
      id: 'lr-q15',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 2, 6, 24, 120, ?',
      options: ['360', '480', '600', '720'],
      correctAnswer: '720',
      explanation: 'Factorials: 1!, 2!, 3!, 4!, 5!; Next = 6! = 720'
    },
    {
      id: 'lr-q16',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 2, 4, 7, 11, 16, ?',
      options: ['20', '21', '22', '23'],
      correctAnswer: '22',
      explanation: 'Differences: +1, +2, +3, +4, +5; Next = 16 + 6 = 22'
    },
    {
      id: 'lr-q17',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 3, 8, 18, 38, 78, ?',
      options: ['118', '138', '158', '178'],
      correctAnswer: '158',
      explanation: '×2 + 2: 3→8, 8→18, 18→38, 38→78; Next = 78 × 2 + 2 = 158'
    },
    {
      id: 'lr-q18',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 2, 6, 12, 20, 30, 42, ?',
      options: ['52', '54', '56', '58'],
      correctAnswer: '56',
      explanation: 'n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42; Next = 7×8 = 56'
    },
    {
      id: 'lr-q19',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 2, 3, 6, 7, 14, 15, ?',
      options: ['28', '30', '32', '34'],
      correctAnswer: '30',
      explanation: 'Pattern: +1, ×2, +1, ×2, +1, ×2; 15 × 2 = 30'
    },
    {
      id: 'lr-q20',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 3, 6, 10, 20, 24, 48, ?',
      options: ['50', '52', '54', '56'],
      correctAnswer: '52',
      explanation: 'Pattern: ×2, +4, ×2, +4, ×2, +4; 48 + 4 = 52'
    },
    {
      id: 'lr-q21',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the missing number: 8, ?, 16, 20, 24',
      options: ['10', '11', '12', '13'],
      correctAnswer: '12',
      explanation: 'Add 4 each time: 8 + 4 = 12'
    },
    {
      id: 'lr-q22',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 4, 2, 8, 3, 12, 4, 16, ?',
      options: ['4', '5', '6', '8'],
      correctAnswer: '5',
      explanation: 'Two sequences: odd positions: 1,2,3,4 → +1; even positions: 4,8,12,16 → +4; Next (position 9): 4 + 1 = 5'
    },
    {
      id: 'lr-q23',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 2, 3, 2, 4, 6, 3, 6, 9, ?',
      options: ['3', '4', '6', '8'],
      correctAnswer: '4',
      explanation: 'Three sequences: (1,2,3), (2,4,6), (3,6,9); Next starts new group: (4,8,12) → 4'
    },
    {
      id: 'lr-q24',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 2, 5, 4, 10, 6, 15, 8, 20, ?',
      options: ['8', '9', '10', '12'],
      correctAnswer: '10',
      explanation: 'Two sequences: odd: 2,4,6,8 → +2; even: 5,10,15,20 → +5; Next (position 9): 8 + 2 = 10'
    },
    {
      id: 'lr-q25',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 3, 7, 15, 31, 63, ?',
      options: ['95', '107', '127', '147'],
      correctAnswer: '127',
      explanation: '×2 + 1: 1→3, 3→7, 7→15, 15→31, 31→63; Next = 63 × 2 + 1 = 127'
    },
    {
      id: 'lr-q26',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 2, 5, 10, 17, 26, ?',
      options: ['35', '37', '39', '41'],
      correctAnswer: '37',
      explanation: 'n² + 1: 0²+1=1, 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26; Next = 6²+1 = 37'
    },
    {
      id: 'lr-q27',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 2, 6, 14, 30, 62, 126, ?',
      options: ['190', '222', '254', '286'],
      correctAnswer: '254',
      explanation: '×2 + 2: 2→6, 6→14, 14→30, 30→62, 62→126; Next = 126 × 2 + 2 = 254'
    },
    {
      id: 'lr-q28',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 10, 13, 18, 25, 34, 45, ?',
      options: ['54', '56', '58', '60'],
      correctAnswer: '58',
      explanation: 'Differences: +3, +5, +7, +9, +11; Next = 45 + 13 = 58'
    },
    {
      id: 'lr-q29',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 50, 44, 39, 35, 32, 30, ?',
      options: ['27', '28', '29', '30'],
      correctAnswer: '29',
      explanation: 'Differences: -6, -5, -4, -3, -2; Next = 30 - 1 = 29'
    },
    {
      id: 'lr-q30',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 2, 3, 5, 8, 13, 21, ?',
      options: ['30', '32', '34', '36'],
      correctAnswer: '34',
      explanation: 'Fibonacci-like: 2+3=5, 3+5=8, 5+8=13, 8+13=21; Next = 13+21 = 34'
    },
    {
      id: 'lr-q31',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the missing number: 5, 10, 20, 40, ?, 160',
      options: ['60', '70', '80', '90'],
      correctAnswer: '80',
      explanation: 'Multiply by 2 each time: 40 × 2 = 80'
    },
    {
      id: 'lr-q32',
      topic: 'Number Patterns',
      difficulty: 'Medium',
      question: 'Find the missing number: 1, 4, 9, 16, ?, 36',
      options: ['20', '24', '25', '30'],
      correctAnswer: '25',
      explanation: 'Square numbers: 1², 2², 3², 4², 5², 6²; Missing = 5² = 25'
    },
    {
      id: 'lr-q33',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 4, 9, 16, 25, 36, 49, ?',
      options: ['56', '60', '64', '72'],
      correctAnswer: '64',
      explanation: 'Square numbers: 1², 2², 3², 4², 5², 6², 7²; Next = 8² = 64'
    },
    {
      id: 'lr-q34',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the missing number: 2, 5, ?, 11, 14',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
      explanation: 'Add 3 each time: 5 + 3 = 8'
    },
    {
      id: 'lr-q35',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 2, 4, 8, 16, 32, ?',
      options: ['48', '56', '64', '80'],
      correctAnswer: '64',
      explanation: 'Powers of 2: 1,2,4,8,16,32; Next = 64'
    },
    {
      id: 'lr-q36',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 3, 9, 27, 81, 243, ?',
      options: ['486', '567', '729', '891'],
      correctAnswer: '729',
      explanation: 'Multiply by 3 each time: 243 × 3 = 729'
    },
    {
      id: 'lr-q37',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the missing number: 3, 7, 11, ?, 19, 23',
      options: ['13', '14', '15', '16'],
      correctAnswer: '15',
      explanation: 'Add 4 each time: 11 + 4 = 15'
    },
    {
      id: 'lr-q38',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 0, 2, 6, 12, 20, 30, ?',
      options: ['38', '40', '42', '44'],
      correctAnswer: '42',
      explanation: 'n² - n: 0,2,6,12,20,30; Next = 7² - 7 = 42'
    },
    {
      id: 'lr-q39',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 1, 3, 6, 10, 15, 21, 28, ?',
      options: ['32', '34', '36', '38'],
      correctAnswer: '36',
      explanation: 'Triangular numbers: +2,+3,+4,+5,+6,+7; Next = 28 + 8 = 36'
    },
    {
      id: 'lr-q40',
      topic: 'Number Patterns',
      difficulty: 'Hard',
      question: 'Find the next number: 2, 3, 6, 11, 18, 27, ?',
      options: ['34', '36', '38', '40'],
      correctAnswer: '38',
      explanation: 'Differences: +1, +3, +5, +7, +9; Next = 27 + 11 = 38'
    },

    // ============================================
    // DEDUCTIVE REASONING (Questions 41-70)
    // ============================================
    {
      id: 'lr-q41',
      topic: 'Deductive Reasoning',
      difficulty: 'Easy',
      question: 'All engineers must wear hard hats. John is not wearing a hard hat. What can you conclude?',
      options: [
        'John is an engineer',
        'John is violating rules or is not an engineer',
        'John is a supervisor',
        'John is on break'
      ],
      correctAnswer: 'John is violating rules or is not an engineer',
      explanation: 'If all engineers must wear hard hats and John is not, he is either not an engineer or violating rules'
    },
    {
      id: 'lr-q42',
      topic: 'Deductive Reasoning',
      difficulty: 'Easy',
      question: 'All technicians are required to have safety certification. Peter is a technician. What can you conclude?',
      options: [
        'Peter has safety certification',
        'Peter is a supervisor',
        'Peter works in the office',
        'Peter is new'
      ],
      correctAnswer: 'Peter has safety certification',
      explanation: 'Since Peter is a technician and all technicians must have safety certification, Peter has it'
    },
    {
      id: 'lr-q43',
      topic: 'Deductive Reasoning',
      difficulty: 'Easy',
      question: 'If pressure exceeds 200 psi, the valve opens. Pressure is 210 psi. What happens?',
      options: [
        'The valve is closed',
        'The valve opens',
        'The pressure is too low',
        'The system is safe'
      ],
      correctAnswer: 'The valve opens',
      explanation: 'Since pressure 210 psi exceeds 200 psi, the condition is met and the valve opens'
    },
    {
      id: 'lr-q44',
      topic: 'Deductive Reasoning',
      difficulty: 'Medium',
      question: 'All pumps are mechanical devices. Some mechanical devices fail. What can you conclude?',
      options: [
        'All pumps fail',
        'Some pumps may fail',
        'No pumps fail',
        'All mechanical devices are pumps'
      ],
      correctAnswer: 'Some pumps may fail',
      explanation: 'Since pumps are mechanical devices and some mechanical devices fail, some pumps may fail'
    },
    {
      id: 'lr-q45',
      topic: 'Deductive Reasoning',
      difficulty: 'Medium',
      question: 'No valves are left open without permission. This valve is open. What can you conclude?',
      options: [
        'The valve has permission to be open',
        'The valve is broken',
        'The valve is closed',
        'The valve needs repair'
      ],
      correctAnswer: 'The valve has permission to be open',
      explanation: 'Since no valves can be open without permission, and this valve is open, it must have permission'
    },
    {
      id: 'lr-q46',
      topic: 'Deductive Reasoning',
      difficulty: 'Medium',
      question: 'If the motor is running, the pump should be pumping. The pump is not pumping. What can you conclude?',
      options: [
        'The motor is not running',
        'The motor is running but pump is faulty',
        'Either motor is not running or pump is faulty',
        'The system is working normally'
      ],
      correctAnswer: 'Either motor is not running or pump is faulty',
      explanation: 'If motor running → pump pumping. Since pump not pumping, either motor is not running or there is a pump fault'
    },
    {
      id: 'lr-q47',
      topic: 'Deductive Reasoning',
      difficulty: 'Medium',
      question: 'All A are B. All B are C. What can you conclude?',
      options: [
        'All A are C',
        'Some A are C',
        'No A are C',
        'Cannot be determined'
      ],
      correctAnswer: 'All A are C',
      explanation: 'If all A are B and all B are C, then all A are C (transitive property)'
    },
    {
      id: 'lr-q48',
      topic: 'Deductive Reasoning',
      difficulty: 'Medium',
      question: 'Some A are B. All B are C. What can you conclude?',
      options: [
        'All A are C',
        'Some A are C',
        'No A are C',
        'Cannot be determined'
      ],
      correctAnswer: 'Some A are C',
      explanation: 'The A that are B are also C (because all B are C), so some A are C'
    },
    {
      id: 'lr-q49',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'Some A are B. Some B are C. What can you conclude?',
      options: [
        'Some A are C',
        'All A are C',
        'No A are C',
        'Cannot be determined'
      ],
      correctAnswer: 'Cannot be determined',
      explanation: 'The A that are B may not be the same B that are C, so we cannot conclude anything about A and C'
    },
    {
      id: 'lr-q50',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'All A are B. No B are C. What can you conclude?',
      options: [
        'All A are C',
        'Some A are C',
        'No A are C',
        'Cannot be determined'
      ],
      correctAnswer: 'No A are C',
      explanation: 'If all A are B and no B are C, then no A are C'
    },
    {
      id: 'lr-q51',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'If it is raining, the ground is wet. The ground is wet. Can we conclude it is raining?',
      options: [
        'Yes, it is raining',
        'No, cannot conclude',
        'It is not raining',
        'The ground is dry'
      ],
      correctAnswer: 'No, cannot conclude',
      explanation: 'This is the "affirming the consequent" fallacy. The ground could be wet from sprinklers, spills, etc.'
    },
    {
      id: 'lr-q52',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'If you are an engineer, you can solve problems. You are not an engineer. Can you conclude you cannot solve problems?',
      options: [
        'Yes, cannot solve problems',
        'No, cannot conclude',
        'You can solve problems',
        'You are an engineer'
      ],
      correctAnswer: 'No, cannot conclude',
      explanation: 'This is the "denying the antecedent" fallacy. Other people can also solve problems'
    },
    {
      id: 'lr-q53',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'If A then B. If B then C. A is true. What can you conclude?',
      options: [
        'B is true and C is true',
        'B is true but C is unknown',
        'C is true but B is unknown',
        'Both are unknown'
      ],
      correctAnswer: 'B is true and C is true',
      explanation: 'A → B → C, so if A is true, B is true, and C is true'
    },
    {
      id: 'lr-q54',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'For power to flow, switches A AND B must both be closed. Switch A is open. Is power flowing?',
      options: [
        'Yes, power is flowing',
        'No, power is not flowing',
        'Cannot be determined',
        'Power is partial'
      ],
      correctAnswer: 'No, power is not flowing',
      explanation: 'Since A is open (false), AND logic requires both to be true; false AND anything = false'
    },
    {
      id: 'lr-q55',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'An alarm sounds if Temperature > 120°C OR Pressure > 80 bar. Temperature is 130°C and Pressure is 50 bar. Does the alarm sound?',
      options: [
        'Yes',
        'No',
        'Cannot be determined',
        'Only if both conditions met'
      ],
      correctAnswer: 'Yes',
      explanation: 'OR logic: Temperature > 120°C is true, so the alarm sounds regardless of pressure'
    },
    {
      id: 'lr-q56',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'Negate: "All operators must complete the checklist."',
      options: [
        'All operators don\'t complete the checklist',
        'Some operators don\'t have to complete the checklist',
        'No operators complete the checklist',
        'Operators complete the checklist'
      ],
      correctAnswer: 'Some operators don\'t have to complete the checklist',
      explanation: 'Negation of "All" is "Some not": Some operators are not required to complete the checklist'
    },
    {
      id: 'lr-q57',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'Negate: "Some valves are leaking."',
      options: [
        'All valves are leaking',
        'No valves are leaking',
        'Some valves are not leaking',
        'Valves are leaking'
      ],
      correctAnswer: 'No valves are leaking',
      explanation: 'Negation of "Some are" is "None are": No valves are leaking'
    },
    {
      id: 'lr-q58',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: 'Negate: "No equipment is running."',
      options: [
        'All equipment is running',
        'Some equipment is running',
        'No equipment is stopped',
        'Equipment is running'
      ],
      correctAnswer: 'Some equipment is running',
      explanation: 'Negation of "No" is "Some": Some equipment is running'
    },
    {
      id: 'lr-q59',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: '"It is not true that the valve is not open." What does this mean?',
      options: [
        'The valve is open',
        'The valve is closed',
        'The valve is partially open',
        'Cannot be determined'
      ],
      correctAnswer: 'The valve is open',
      explanation: 'Double negative: "Not true" + "not open" = open'
    },
    {
      id: 'lr-q60',
      topic: 'Deductive Reasoning',
      difficulty: 'Hard',
      question: '"There is no situation where the safety system does not activate." What does this mean?',
      options: [
        'The safety system never activates',
        'The safety system always activates',
        'The safety system activates sometimes',
        'Cannot be determined'
      ],
      correctAnswer: 'The safety system always activates',
      explanation: 'Double negative: "No situation" + "does not activate" = always activates'
    },

    // ============================================
    // CRITICAL THINKING (Questions 71-100)
    // ============================================
    {
      id: 'lr-q61',
      topic: 'Critical Thinking',
      difficulty: 'Medium',
      question: 'A motor draws more current than expected. What could be the cause?',
      options: [
        'Overload condition',
        'Low voltage',
        'High voltage',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Overload increases current; low voltage increases current for same power; high voltage can also cause issues'
    },
    {
      id: 'lr-q62',
      topic: 'Critical Thinking',
      difficulty: 'Medium',
      question: 'A temperature reading is lower than expected. What could be the cause?',
      options: [
        'Sensor failure',
        'Sensor misreading',
        'Insulation problem',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these could cause a lower than expected reading'
    },
    {
      id: 'lr-q63',
      topic: 'Critical Thinking',
      difficulty: 'Medium',
      question: 'A pump loses prime. What could be the cause?',
      options: [
        'Air ingress',
        'Low suction pressure',
        'Seal failure',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these can cause a pump to lose prime'
    },
    {
      id: 'lr-q64',
      topic: 'Critical Thinking',
      difficulty: 'Medium',
      question: 'A pressure gauge reads zero but the process is pressurized. What could be the cause?',
      options: [
        'Gauge isolated by valve',
        'Gauge is faulty',
        'Impulse line blocked',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these could cause a zero reading on a pressurized system'
    },
    {
      id: 'lr-q65',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A control valve is fully open but flow is low. What could be the cause?',
      options: [
        'Inlet pressure too low',
        'Valve is undersized',
        'Blockage in pipe',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these could cause low flow even with a fully open valve'
    },
    {
      id: 'lr-q66',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A pump makes a loud grinding noise. What is the likely cause?',
      options: [
        'Bearing failure',
        'Foreign object in pump',
        'Cavitation',
        'Normal operation'
      ],
      correctAnswer: 'Bearing failure',
      explanation: 'Grinding noise typically indicates bearing failure or metal-to-metal contact'
    },
    {
      id: 'lr-q67',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A motor overheats during operation. What could be the cause?',
      options: [
        'Overload',
        'Cooling fan failure',
        'Voltage imbalance',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'All of these can cause motor overheating'
    },
    {
      id: 'lr-q68',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A transmitter outputs 4mA regardless of process conditions. What could be the cause?',
      options: [
        'Transmitter fault',
        'Power supply issue',
        'Wiring break',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: '4mA is the minimum output; any fault could cause this reading'
    },
    {
      id: 'lr-q69',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A safety system alarms unnecessarily. What could be the cause?',
      options: [
        'Faulty sensor',
        'Incorrect setpoint',
        'Electrical noise',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these can cause false alarms'
    },
    {
      id: 'lr-q70',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A pipe has significant corrosion. What could be the cause?',
      options: [
        'Chemical exposure',
        'Moisture',
        'Material mismatch',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'All of these can cause corrosion'
    },
    {
      id: 'lr-q71',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'Readings: 10.1, 10.3, 10.2, 10.4, 10.8, 10.2, 10.9, 15.2, 10.3, 10.1. What do you notice?',
      options: [
        'All readings are normal',
        'There is one outlier (15.2)',
        'Readings are decreasing',
        'Readings are increasing'
      ],
      correctAnswer: 'There is one outlier (15.2)',
      explanation: '15.2 is significantly different from the normal range of 10.1-10.9'
    },
    {
      id: 'lr-q72',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A temperature trend shows gradual increase over time. What could this indicate?',
      options: [
        'Developing problem',
        'Normal operation',
        'Sensor drift',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'A gradual increase could indicate a developing issue, normal seasonal changes, or sensor drift'
    },
    {
      id: 'lr-q73',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A pressure reading fluctuates wildly. What could be the cause?',
      options: [
        'Process instability',
        'Faulty instrument',
        'Pump pulsation',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these can cause wild pressure fluctuations'
    },
    {
      id: 'lr-q74',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'Flow readings are consistently higher than design values. What could be the cause?',
      options: [
        'Higher than design pressure',
        'Meter error',
        'Process change',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these could cause higher than expected flow readings'
    },
    {
      id: 'lr-q75',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'You notice a small leak on a pipe. What should you do FIRST?',
      options: [
        'Ignore it',
        'Report it and mark the area',
        'Try to fix it immediately',
        'Leave it for later'
      ],
      correctAnswer: 'Report it and mark the area',
      explanation: 'Safety first: report the leak, mark the area, and follow procedures'
    },
    {
      id: 'lr-q76',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A motor is running hot but within temperature limits. Should you investigate?',
      options: [
        'No, it\'s within limits',
        'Yes, investigate to prevent future failure',
        'Only if it exceeds limits',
        'Ignore it'
      ],
      correctAnswer: 'Yes, investigate to prevent future failure',
      explanation: 'Running hot indicates a developing problem that should be investigated before it leads to failure'
    },
    {
      id: 'lr-q77',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A process parameter is approaching alarm limits slowly. What should you do?',
      options: [
        'Wait until it alarms',
        'Investigate and take corrective action',
        'Ignore the trend',
        'Increase the alarm limit'
      ],
      correctAnswer: 'Investigate and take corrective action',
      explanation: 'Proactive investigation of developing trends prevents alarms and failures'
    },
    {
      id: 'lr-q78',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'An instrument reading is questionable but not in alarm. What should you do?',
      options: [
        'Ignore it',
        'Verify with another instrument',
        'Assume it\'s correct',
        'Adjust the reading'
      ],
      correctAnswer: 'Verify with another instrument',
      explanation: 'Questionable readings should be verified before making decisions'
    },
    {
      id: 'lr-q79',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A safety system has been bypassed. What should you do?',
      options: [
        'Ignore it',
        'Report immediately and secure the system',
        'Continue operating',
        'Remove the bypass'
      ],
      correctAnswer: 'Report immediately and secure the system',
      explanation: 'Safety bypasses must be reported immediately and the system secured'
    },
    {
      id: 'lr-q80',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'If a pressure vessel fails, what information do you need to determine the cause?',
      options: [
        'Pressure history',
        'Material specifications',
        'Inspection records',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Comprehensive information is needed for proper root cause analysis'
    },
    {
      id: 'lr-q81',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A motor has failed. What information do you need?',
      options: [
        'Age and operating hours',
        'Load conditions',
        'Temperature history',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Comprehensive information is needed to determine the cause of motor failure'
    },
    {
      id: 'lr-q82',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What could cause a pump to stop pumping when it was working yesterday?',
      options: [
        'Loss of prime',
        'Power failure',
        'Mechanical failure',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these could cause sudden pump failure'
    },
    {
      id: 'lr-q83',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'How would you determine if an instrument is accurate?',
      options: [
        'Check with a known reference',
        'Compare to another instrument',
        'Check calibration records',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Multiple methods should be used to verify instrument accuracy'
    },
    {
      id: 'lr-q84',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What steps would you take to prevent recurrence of a failure?',
      options: [
        'Root cause analysis',
        'Corrective action',
        'Procedure update',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Comprehensive prevention requires all of these steps'
    },
    {
      id: 'lr-q85',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A PID controller is oscillating. What could be wrong?',
      options: [
        'Tuning parameters incorrect',
        'Process changed',
        'Valve sticking',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these can cause controller oscillation'
    },
    {
      id: 'lr-q86',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A level transmitter reading is erratic. How do you troubleshoot?',
      options: [
        'Check the instrument',
        'Check the impulse line',
        'Check the signal',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Systematic troubleshooting should cover all possibilities'
    },
    {
      id: 'lr-q87',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A control valve is not responding to controller signals. How do you troubleshoot?',
      options: [
        'Check the signal path',
        'Check the valve',
        'Check the process',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Systematic troubleshooting should check signal, valve, and process'
    },
    {
      id: 'lr-q88',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A pipe burst in a plant. How do you investigate?',
      options: [
        'Collect information',
        'Examine physical evidence',
        'Analyze possible causes',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Proper investigation requires all of these steps'
    },
    {
      id: 'lr-q89',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A pressure vessel operates at 150 bar. Relief valve set at 160 bar. Pressure reaches 165 bar and valve opens at 165 bar. What could be wrong?',
      options: [
        'Valve set point incorrect',
        'Valve sticking',
        'Gauge inaccurate',
        'All of the above'
      ],
      correctAnswer: 'All of the above',
      explanation: 'Any of these could cause delayed valve opening'
    },
    {
      id: 'lr-q90',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'A pressure transmitter reads 8 bar but a manual gauge reads 10 bar. Which is correct?',
      options: [
        'Transmitter is correct',
        'Gauge is correct',
        'Cannot determine without verification',
        'Both are correct'
      ],
      correctAnswer: 'Cannot determine without verification',
      explanation: 'Need to verify with a known accurate reference to determine which is correct'
    },
    {
      id: 'lr-q91',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is the first step in problem-solving?',
      options: [
        'Implement solution',
        'Identify the problem',
        'Gather information',
        'Test solution'
      ],
      correctAnswer: 'Identify the problem',
      explanation: 'You must first identify and define the problem before solving it'
    },
    {
      id: 'lr-q92',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is the "5 Whys" technique used for?',
      options: [
        'Finding root cause',
        'Testing solutions',
        'Implementing changes',
        'Training staff'
      ],
      correctAnswer: 'Finding root cause',
      explanation: 'The 5 Whys is a root cause analysis technique'
    },
    {
      id: 'lr-q93',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is the difference between correlation and causation?',
      options: [
        'Same thing',
        'Correlation doesn\'t imply causation',
        'Causation doesn\'t imply correlation',
        'No difference'
      ],
      correctAnswer: 'Correlation doesn\'t imply causation',
      explanation: 'Two things can be correlated without one causing the other'
    },
    {
      id: 'lr-q94',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is confirmation bias?',
      options: [
        'Looking for evidence that supports your view',
        'Looking for evidence against your view',
        'Ignoring all evidence',
        'Accepting all evidence equally'
      ],
      correctAnswer: 'Looking for evidence that supports your view',
      explanation: 'Confirmation bias is the tendency to favor information that confirms existing beliefs'
    },
    {
      id: 'lr-q95',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is the scientific method?',
      options: [
        'Observation, Hypothesis, Experiment, Analysis, Conclusion',
        'Guess, Test, Implement, Review',
        'Problem, Solution, Implementation, Verification',
        'Theory, Practice, Evaluation'
      ],
      correctAnswer: 'Observation, Hypothesis, Experiment, Analysis, Conclusion',
      explanation: 'The scientific method is a systematic approach to investigation'
    },
    {
      id: 'lr-q96',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is root cause analysis?',
      options: [
        'Finding the underlying cause of a problem',
        'Treating the symptoms',
        'Implementing quick fixes',
        'Ignoring the problem'
      ],
      correctAnswer: 'Finding the underlying cause of a problem',
      explanation: 'Root cause analysis identifies the fundamental cause of a problem'
    },
    {
      id: 'lr-q97',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'Why is it important to consider multiple hypotheses?',
      options: [
        'To find the simplest answer',
        'To avoid confirmation bias',
        'To save time',
        'To confuse others'
      ],
      correctAnswer: 'To avoid confirmation bias',
      explanation: 'Considering multiple hypotheses helps avoid confirmation bias'
    },
    {
      id: 'lr-q98',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is the difference between symptoms and root causes?',
      options: [
        'Symptoms are underlying causes',
        'Symptoms are visible effects; root causes are underlying',
        'No difference',
        'Root causes are visible effects'
      ],
      correctAnswer: 'Symptoms are visible effects; root causes are underlying',
      explanation: 'Symptoms are what you observe; root causes are what causes the symptoms'
    },
    {
      id: 'lr-q99',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'When should you question your assumptions?',
      options: [
        'Never',
        'Only when proven wrong',
        'Always, especially when facing problems',
        'Only in meetings'
      ],
      correctAnswer: 'Always, especially when facing problems',
      explanation: 'Assumptions should always be questioned, particularly when problem-solving'
    },
    {
      id: 'lr-q100',
      topic: 'Critical Thinking',
      difficulty: 'Hard',
      question: 'What is the most important factor in critical thinking?',
      options: [
        'Being right',
        'Questioning assumptions and evaluating evidence',
        'Making quick decisions',
        'Following procedures blindly'
      ],
      correctAnswer: 'Questioning assumptions and evaluating evidence',
      explanation: 'Critical thinking requires questioning assumptions and carefully evaluating evidence'
    }
  ]
};

export default logicalReasoningQuestions;