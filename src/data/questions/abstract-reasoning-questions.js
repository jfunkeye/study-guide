export const abstractReasoningQuestions = {
  sectionId: 'abstract-reasoning',
  sectionTitle: 'Abstract Reasoning',
  totalQuestions: 100,
  questions: [
    // ============================================
    // SHAPES & GEOMETRIC PATTERNS (Questions 1-25)
    // ============================================
    {
      id: 'ar-q1',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'What shape has 4 equal sides and 4 equal angles?',
      options: ['Rectangle', 'Square', 'Rhombus', 'Trapezoid'],
      correctAnswer: 'Square',
      explanation: 'A square has 4 equal sides and 4 equal angles (90° each)'
    },
    {
      id: 'ar-q2',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'What shape has 3 sides?',
      options: ['Square', 'Triangle', 'Pentagon', 'Hexagon'],
      correctAnswer: 'Triangle',
      explanation: 'A triangle has 3 sides'
    },
    {
      id: 'ar-q3',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'What comes next: Triangle, Square, Pentagon, Hexagon, ?',
      options: ['Heptagon', 'Octagon', 'Nonagon', 'Decagon'],
      correctAnswer: 'Heptagon',
      explanation: 'Each shape adds 1 side: 3, 4, 5, 6, next is 7 (Heptagon)'
    },
    {
      id: 'ar-q4',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'How many sides does a hexagon have?',
      options: ['4', '5', '6', '7'],
      correctAnswer: '6',
      explanation: 'Hexagon has 6 sides (hexa = 6)'
    },
    {
      id: 'ar-q5',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'How many sides does an octagon have?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
      explanation: 'Octagon has 8 sides (octa = 8)'
    },
    {
      id: 'ar-q6',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'What comes next: Circle, Triangle, Circle, Square, Circle, Pentagon, Circle, ?',
      options: ['Circle', 'Hexagon', 'Square', 'Triangle'],
      correctAnswer: 'Hexagon',
      explanation: 'Odd positions are always Circle. Even positions add 1 side: Triangle(3), Square(4), Pentagon(5), next is Hexagon(6)'
    },
    {
      id: 'ar-q7',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'What comes next: Small Circle, Large Circle, Small Square, Large Square, Small Triangle, ?',
      options: ['Small Triangle', 'Large Triangle', 'Small Circle', 'Large Circle'],
      correctAnswer: 'Large Triangle',
      explanation: 'Size alternates: Small, Large, Small, Large, Small, so next is Large. Shapes cycle: Circle, Circle, Square, Square, Triangle, so next is Triangle'
    },
    {
      id: 'ar-q8',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'Red Square, Blue Circle, Red Triangle, Blue Square, Red Circle, ?',
      options: ['Blue Triangle', 'Red Triangle', 'Blue Square', 'Red Square'],
      correctAnswer: 'Blue Triangle',
      explanation: 'Colors alternate: Red, Blue, Red, Blue, Red, next is Blue. Shapes: Square, Circle, Triangle, Square, Circle, next is Triangle'
    },
    {
      id: 'ar-q9',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'One Circle, Two Circles, One Square, Two Squares, One Triangle, ?',
      options: ['One Triangle', 'Two Triangles', 'One Circle', 'Two Circles'],
      correctAnswer: 'Two Triangles',
      explanation: 'Shapes: Circle, Circle, Square, Square, Triangle, next is Triangle. Counts: 1, 2, 1, 2, 1, next is 2'
    },
    {
      id: 'ar-q10',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'Which shape does not belong: Circle, Triangle, Square, Pentagon, Oval?',
      options: ['Circle', 'Triangle', 'Square', 'Oval'],
      correctAnswer: 'Oval',
      explanation: 'Oval is the only shape without straight sides (all others are polygons)'
    },
    {
      id: 'ar-q11',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'If a square is rotated 45°, what shape does it appear to be?',
      options: ['Rectangle', 'Diamond', 'Triangle', 'Circle'],
      correctAnswer: 'Diamond',
      explanation: 'A square rotated 45° appears as a diamond shape'
    },
    {
      id: 'ar-q12',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'Which shape has the most lines of symmetry: Square, Rectangle, Triangle, Circle?',
      options: ['Square', 'Rectangle', 'Triangle', 'Circle'],
      correctAnswer: 'Circle',
      explanation: 'A circle has infinite lines of symmetry'
    },
    {
      id: 'ar-q13',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: 'What comes next: △, ▲, ○, ●, □, ■, △, ?',
      options: ['△', '▲', '○', '●'],
      correctAnswer: '▲',
      explanation: 'Shapes repeat every 3: Triangle, Circle, Square. Shading alternates: Open, Solid, Open, Solid, Open, Solid, Open, so next is Solid Triangle (▲)'
    },
    {
      id: 'ar-q14',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: 'Triangle with circle inside, Square with circle inside, Pentagon with circle inside, ?',
      options: ['Hexagon with circle inside', 'Triangle with square inside', 'Circle with triangle inside', 'Square with triangle inside'],
      correctAnswer: 'Hexagon with circle inside',
      explanation: 'Outer shape adds 1 side: Triangle(3), Square(4), Pentagon(5), next is Hexagon(6). Inner shape remains constant (circle)'
    },
    {
      id: 'ar-q15',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: 'Square (normal), Square (rotated 45°), Square (normal), Square (rotated 45°), ?',
      options: ['Square (normal)', 'Square (rotated 45°)', 'Rectangle', 'Circle'],
      correctAnswer: 'Square (normal)',
      explanation: 'Pattern alternates: normal, rotated, normal, rotated, so next is normal'
    },
    {
      id: 'ar-q16',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'What is the name of a 7-sided polygon?',
      options: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'],
      correctAnswer: 'Heptagon',
      explanation: 'Heptagon has 7 sides (hepta = 7)'
    },
    {
      id: 'ar-q17',
      topic: 'Shapes',
      difficulty: 'Easy',
      question: 'What is the name of a 10-sided polygon?',
      options: ['Heptagon', 'Octagon', 'Nonagon', 'Decagon'],
      correctAnswer: 'Decagon',
      explanation: 'Decagon has 10 sides (deca = 10)'
    },
    {
      id: 'ar-q18',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'Which shape is regular: Rectangle, Triangle, Square, Trapezoid?',
      options: ['Rectangle', 'Triangle', 'Square', 'Trapezoid'],
      correctAnswer: 'Square',
      explanation: 'A square is regular (all sides equal, all angles equal). A triangle could be regular (equilateral) but not all triangles are'
    },
    {
      id: 'ar-q19',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: 'Circle with 1 dot, Circle with 2 dots, Circle with 3 dots, Circle with 4 dots, ?',
      options: ['Circle with 5 dots', 'Circle with 6 dots', 'Square with 5 dots', 'Triangle with 5 dots'],
      correctAnswer: 'Circle with 5 dots',
      explanation: 'Shape stays Circle, number of dots increases by 1 each time'
    },
    {
      id: 'ar-q20',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: 'One small circle, two medium circles, three large circles, one small square, two medium squares, three large squares, ?',
      options: ['One small triangle', 'One small circle', 'Two medium triangles', 'Three large triangles'],
      correctAnswer: 'One small triangle',
      explanation: 'Group 1: Circles (1 small, 2 medium, 3 large). Group 2: Squares (1 small, 2 medium, 3 large). Group 3 should be Triangles (1 small, 2 medium, 3 large). Next is one small triangle'
    },
    {
      id: 'ar-q21',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'Circle split into 2 parts, Circle split into 3 parts, Circle split into 4 parts, ?',
      options: ['Circle split into 5 parts', 'Square split into 4 parts', 'Circle split into 6 parts', 'Triangle split into 3 parts'],
      correctAnswer: 'Circle split into 5 parts',
      explanation: 'Parts increase by 1 each time: 2, 3, 4, next is 5'
    },
    {
      id: 'ar-q22',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: 'If ○ + □ = ⬡ and □ + △ = ⬠, what is ○ + △?',
      options: ['⬡', '⬠', 'Cannot be determined', '⚪'],
      correctAnswer: 'Cannot be determined',
      explanation: 'Without more information about the shape combination rules, we cannot determine what ○ + △ equals'
    },
    {
      id: 'ar-q23',
      topic: 'Shapes',
      difficulty: 'Medium',
      question: 'Triangle pointing Up, Triangle pointing Down, Triangle pointing Up, Triangle pointing Down, ?',
      options: ['Triangle pointing Up', 'Triangle pointing Down', 'Square', 'Circle'],
      correctAnswer: 'Triangle pointing Up',
      explanation: 'Pattern alternates: Up, Down, Up, Down, so next is Up'
    },
    {
      id: 'ar-q24',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: '●△, ○□, ■●, □○, ▲■, ?',
      options: ['●△', '○□', '■●', '□○'],
      correctAnswer: '●△',
      explanation: 'Pattern repeats every 5 terms, so next is ●△'
    },
    {
      id: 'ar-q25',
      topic: 'Shapes',
      difficulty: 'Hard',
      question: '★, ★★, ★★★, ★★★★, ?',
      options: ['★★★★★', '★★★★★★', '★★★', '★★★★'],
      correctAnswer: '★★★★★',
      explanation: 'Add 1 star each time: 1, 2, 3, 4, next is 5 stars'
    },

    // ============================================
    // PATTERNS & SEQUENCES (Questions 26-50)
    // ============================================
    {
      id: 'ar-q26',
      topic: 'Patterns',
      difficulty: 'Easy',
      question: 'What comes next: Red, Blue, Red, Blue, Red, ?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      correctAnswer: 'Blue',
      explanation: 'The pattern alternates: Red, Blue, Red, Blue, Red, Blue'
    },
    {
      id: 'ar-q27',
      topic: 'Patterns',
      difficulty: 'Easy',
      question: 'What comes next: Triangle, Square, Circle, Triangle, Square, ?',
      options: ['Triangle', 'Square', 'Circle', 'Hexagon'],
      correctAnswer: 'Circle',
      explanation: 'Pattern repeats every 3: Triangle, Square, Circle, Triangle, Square, Circle'
    },
    {
      id: 'ar-q28',
      topic: 'Patterns',
      difficulty: 'Easy',
      question: 'What comes next: Small, Large, Small, Large, Small, ?',
      options: ['Small', 'Large', 'Medium', 'Extra Large'],
      correctAnswer: 'Large',
      explanation: 'Size alternates: Small, Large, Small, Large, Small, Large'
    },
    {
      id: 'ar-q29',
      topic: 'Patterns',
      difficulty: 'Easy',
      question: 'What comes next: ●, ○, ●, ○, ●, ?',
      options: ['●', '○', '■', '□'],
      correctAnswer: '○',
      explanation: 'Solid and empty alternate: ●, ○, ●, ○, ●, ○'
    },
    {
      id: 'ar-q30',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: 'Circle with 0 dots, Circle with 1 dot, Circle with 2 dots, Circle with 3 dots, ?',
      options: ['Circle with 4 dots', 'Circle with 5 dots', 'Square with 4 dots', 'Triangle with 4 dots'],
      correctAnswer: 'Circle with 4 dots',
      explanation: 'Add 1 dot each time: 0, 1, 2, 3, next is 4'
    },
    {
      id: 'ar-q31',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: 'Red Circle, Blue Square, Green Triangle, Red Circle, Blue Square, ?',
      options: ['Red Circle', 'Blue Square', 'Green Triangle', 'Red Triangle'],
      correctAnswer: 'Green Triangle',
      explanation: 'Pattern repeats every 3: Red Circle, Blue Square, Green Triangle'
    },
    {
      id: 'ar-q32',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: 'Arrow Up, Arrow Down, Arrow Left, Arrow Right, Arrow Up, ?',
      options: ['Arrow Up', 'Arrow Down', 'Arrow Left', 'Arrow Right'],
      correctAnswer: 'Arrow Down',
      explanation: 'Pattern: Up, Down, Left, Right, Up, Down (the directions cycle)'
    },
    {
      id: 'ar-q33',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: '● in center, ○ in center, ● in center, ○ in center, ?',
      options: ['● in center', '○ in center', '● in corner', '○ in corner'],
      correctAnswer: '● in center',
      explanation: 'Solid and empty alternate: ●, ○, ●, ○, ●'
    },
    {
      id: 'ar-q34',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: 'Small Red Circle, Medium Blue Square, Large Green Triangle, Small Red Circle, ?',
      options: ['Small Red Circle', 'Medium Blue Square', 'Large Green Triangle', 'Medium Red Circle'],
      correctAnswer: 'Medium Blue Square',
      explanation: 'Pattern repeats every 3: Small Red Circle, Medium Blue Square, Large Green Triangle'
    },
    {
      id: 'ar-q35',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: 'One Circle, Two Squares, Three Triangles, One Circle, Two Squares, ?',
      options: ['One Circle', 'Two Squares', 'Three Triangles', 'Four Circles'],
      correctAnswer: 'Three Triangles',
      explanation: 'Pattern repeats every 3: 1 Circle, 2 Squares, 3 Triangles'
    },
    {
      id: 'ar-q36',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: '● in top-left, ○ in top-right, ● in bottom-right, ○ in bottom-left, ● in top-left, ?',
      options: ['● in top-left', '○ in top-right', '● in bottom-right', '○ in bottom-left'],
      correctAnswer: '○ in top-right',
      explanation: 'Positions move clockwise: TL, TR, BR, BL, TL, next is TR. Shading alternates: ●, ○, ●, ○, ●, next is ○'
    },
    {
      id: 'ar-q37',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: '△, ▲, □, ■, ○, ●, △, ▲, □, ?',
      options: ['△', '▲', '□', '■'],
      correctAnswer: '■',
      explanation: 'Shapes: Triangle, Triangle, Square, Square, Circle, Circle, Triangle, Triangle, Square, next is Square. Shading alternates: Open, Solid, Open, Solid, so next is Solid Square (■)'
    },
    {
      id: 'ar-q38',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: '[●], [●●], [●●●], [●●●●], ?',
      options: ['[●●●●●]', '[●●●●●●]', '[●]', '[●●]'],
      correctAnswer: '[●●●●●]',
      explanation: 'Add 1 dot each time: 1, 2, 3, 4, next is 5 dots'
    },
    {
      id: 'ar-q39',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: '[●, ○, ●], [○, ●, ○], [●, ○, ●], [?]',
      options: ['[●, ○, ●]', '[○, ●, ○]', '[●, ●, ○]', '[○, ○, ●]'],
      correctAnswer: '[○, ●, ○]',
      explanation: 'Rows alternate: ●○●, ○●○, ●○●, next is ○●○'
    },
    {
      id: 'ar-q40',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: '[●, ○] [○, ●] [■, □] [□, ■] [?]',
      options: ['[●, ○]', '[○, ●]', '[▲, △]', '[△, ▲]'],
      correctAnswer: '[▲, △]',
      explanation: 'Each pair swaps positions, then changes shape: (●,○) → (○,●) → (■,□) → (□,■) → next is (▲,△)'
    },
    {
      id: 'ar-q41',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: 'Red Circle, Blue Square, Green Triangle, Red Square, Blue Triangle, ?',
      options: ['Green Circle', 'Red Circle', 'Blue Square', 'Green Triangle'],
      correctAnswer: 'Green Circle',
      explanation: 'Colors: Red, Blue, Green, Red, Blue, next is Green. Shapes: Circle, Square, Triangle, Square, Triangle, next is Circle'
    },
    {
      id: 'ar-q42',
      topic: 'Patterns',
      difficulty: 'Easy',
      question: '1 line, 2 lines, 3 lines, 4 lines, ?',
      options: ['5 lines', '6 lines', '4 lines', '3 lines'],
      correctAnswer: '5 lines',
      explanation: 'Add 1 line each time: 1, 2, 3, 4, next is 5 lines'
    },
    {
      id: 'ar-q43',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: '1●, 2■, 3▲, 4●, 5■, ?',
      options: ['6●', '6■', '6▲', '7▲'],
      correctAnswer: '6▲',
      explanation: 'Numbers increase by 1: 1, 2, 3, 4, 5, next is 6. Shapes cycle: ●, ■, ▲, ●, ■, next is ▲'
    },
    {
      id: 'ar-q44',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: 'A, B, C, D, E, ?',
      options: ['F', 'G', 'H', 'I'],
      correctAnswer: 'F',
      explanation: 'Alphabetical order: A, B, C, D, E, F'
    },
    {
      id: 'ar-q45',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: '1, 2, 4, 8, 16, ?',
      options: ['24', '30', '32', '64'],
      correctAnswer: '32',
      explanation: 'Double each time: 1×2=2, 2×2=4, 4×2=8, 8×2=16, next is 16×2=32'
    },
    {
      id: 'ar-q46',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: '2, 4, 6, 8, 10, ?',
      options: ['11', '12', '13', '14'],
      correctAnswer: '12',
      explanation: 'Add 2 each time: 2, 4, 6, 8, 10, 12'
    },
    {
      id: 'ar-q47',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: '1, 3, 6, 10, 15, 21, ?',
      options: ['25', '26', '27', '28'],
      correctAnswer: '28',
      explanation: 'Add increasing numbers: +2, +3, +4, +5, +6, next +7 = 28'
    },
    {
      id: 'ar-q48',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: 'Small, Medium, Large, Small, Medium, ?',
      options: ['Small', 'Medium', 'Large', 'Extra Large'],
      correctAnswer: 'Large',
      explanation: 'Pattern repeats: Small, Medium, Large, Small, Medium, Large'
    },
    {
      id: 'ar-q49',
      topic: 'Patterns',
      difficulty: 'Medium',
      question: '▲, ■, ●, ▲, ■, ?',
      options: ['▲', '■', '●', '★'],
      correctAnswer: '●',
      explanation: 'Pattern repeats every 3: ▲, ■, ●, ▲, ■, ●'
    },
    {
      id: 'ar-q50',
      topic: 'Patterns',
      difficulty: 'Hard',
      question: 'Red, Red, Blue, Blue, Green, Green, ?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      correctAnswer: 'Red',
      explanation: 'Each color appears twice: Red, Red, Blue, Blue, Green, Green, next is Red'
    },

    // ============================================
    // ROTATIONS & TRANSFORMATIONS (Questions 51-70)
    // ============================================
    {
      id: 'ar-q51',
      topic: 'Rotations',
      difficulty: 'Easy',
      question: 'A shape facing North rotates 90° clockwise. Which direction does it face?',
      options: ['North', 'East', 'South', 'West'],
      correctAnswer: 'East',
      explanation: 'North → 90° clockwise = East'
    },
    {
      id: 'ar-q52',
      topic: 'Rotations',
      difficulty: 'Easy',
      question: 'A shape facing East rotates 180°. Which direction does it face?',
      options: ['North', 'East', 'South', 'West'],
      correctAnswer: 'West',
      explanation: 'East → 180° = West (180° is the same in either direction)'
    },
    {
      id: 'ar-q53',
      topic: 'Rotations',
      difficulty: 'Easy',
      question: 'A shape facing South rotates 90° counter-clockwise. Which direction does it face?',
      options: ['North', 'East', 'South', 'West'],
      correctAnswer: 'East',
      explanation: 'South → 90° CCW = East'
    },
    {
      id: 'ar-q54',
      topic: 'Rotations',
      difficulty: 'Medium',
      question: 'A shape facing West rotates 270° clockwise. Which direction does it face?',
      options: ['North', 'East', 'South', 'West'],
      correctAnswer: 'South',
      explanation: '270° CW = 90° CCW; West → 90° CCW = South'
    },
    {
      id: 'ar-q55',
      topic: 'Rotations',
      difficulty: 'Medium',
      question: 'Arrow Up, Arrow Right, Arrow Down, Arrow Left, Arrow Up, ?',
      options: ['Arrow Up', 'Arrow Right', 'Arrow Down', 'Arrow Left'],
      correctAnswer: 'Arrow Right',
      explanation: 'Each step rotates 90° clockwise: Up → Right → Down → Left → Up → Right'
    },
    {
      id: 'ar-q56',
      topic: 'Rotations',
      difficulty: 'Medium',
      question: 'A shape rotates 90° clockwise, then 180° counter-clockwise, then 90° clockwise. Net rotation?',
      options: ['0°', '90° CW', '180° CW', '270° CW'],
      correctAnswer: '0°',
      explanation: '90° CW + 180° CCW + 90° CW = 90° + (-180°) + 90° = 0° net'
    },
    {
      id: 'ar-q57',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: 'A triangle pointing up rotates 90° clockwise. How does it point?',
      options: ['Up', 'Right', 'Down', 'Left'],
      correctAnswer: 'Right',
      explanation: 'Triangle pointing Up → 90° CW = points Right'
    },
    {
      id: 'ar-q58',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: 'A shape with a dot on top rotates 90° clockwise. Where does the dot appear?',
      options: ['Top', 'Right', 'Bottom', 'Left'],
      correctAnswer: 'Right',
      explanation: 'Dot on top (12 o\'clock) → 90° CW = right side (3 o\'clock)'
    },
    {
      id: 'ar-q59',
      topic: 'Rotations',
      difficulty: 'Medium',
      question: '→, ↓, ←, ↑, →, ?',
      options: ['→', '↓', '←', '↑'],
      correctAnswer: '↓',
      explanation: 'Each step rotates 90° clockwise: Right → Down → Left → Up → Right → Down'
    },
    {
      id: 'ar-q60',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: '↑, →, ↓, ←, ↑, ?',
      options: ['↑', '→', '↓', '←'],
      correctAnswer: '→',
      explanation: 'Each step rotates 90° clockwise: Up → Right → Down → Left → Up → Right'
    },
    {
      id: 'ar-q61',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: 'Shape rotates 90° CW, then 90° CW, then 90° CW. What is the net rotation?',
      options: ['90° CW', '180° CW', '270° CW', '0°'],
      correctAnswer: '270° CW',
      explanation: '90° + 90° + 90° = 270° CW (which is also 90° CCW)'
    },
    {
      id: 'ar-q62',
      topic: 'Rotations',
      difficulty: 'Medium',
      question: 'A shape in top-left rotates 180° around center. New position?',
      options: ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right'],
      correctAnswer: 'Bottom-Right',
      explanation: '180° rotation moves TL to BR'
    },
    {
      id: 'ar-q63',
      topic: 'Rotations',
      difficulty: 'Medium',
      question: 'Arrow pointing right is reflected vertically. New direction?',
      options: ['Up', 'Right', 'Down', 'Left'],
      correctAnswer: 'Left',
      explanation: 'Vertical reflection flips left-right: Right → Left'
    },
    {
      id: 'ar-q64',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: 'Arrow pointing up is reflected vertically. New direction?',
      options: ['Up', 'Right', 'Down', 'Left'],
      correctAnswer: 'Up',
      explanation: 'Vertical reflection doesn\'t affect up/down direction: Up → Up'
    },
    {
      id: 'ar-q65',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: 'Shape facing North rotates 90° CW, then reflects across vertical line. Final direction?',
      options: ['North', 'East', 'South', 'West'],
      correctAnswer: 'West',
      explanation: 'North → 90° CW = East; East → vertical reflection = West'
    },
    {
      id: 'ar-q66',
      topic: 'Rotations',
      difficulty: 'Easy',
      question: 'What is 90° clockwise equivalent to in counter-clockwise?',
      options: ['90° CCW', '180° CCW', '270° CCW', '360° CCW'],
      correctAnswer: '270° CCW',
      explanation: '90° CW = 270° CCW (360° - 90° = 270°)'
    },
    {
      id: 'ar-q67',
      topic: 'Rotations',
      difficulty: 'Easy',
      question: 'What is 270° clockwise equivalent to in counter-clockwise?',
      options: ['90° CCW', '180° CCW', '270° CCW', '360° CCW'],
      correctAnswer: '90° CCW',
      explanation: '270° CW = 90° CCW (360° - 270° = 90°)'
    },
    {
      id: 'ar-q68',
      topic: 'Rotations',
      difficulty: 'Medium',
      question: 'Shape facing SE rotates 90° clockwise. What direction?',
      options: ['NE', 'SE', 'SW', 'NW'],
      correctAnswer: 'SW',
      explanation: 'SE → 90° CW = SW'
    },
    {
      id: 'ar-q69',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: 'Arrow Up rotates 45° CW every step. After 8 steps, direction?',
      options: ['Up', 'Right', 'Down', 'Left'],
      correctAnswer: 'Up',
      explanation: '8 × 45° = 360° → back to starting position (Up)'
    },
    {
      id: 'ar-q70',
      topic: 'Rotations',
      difficulty: 'Hard',
      question: 'Object in top-right rotates 270° clockwise. New position?',
      options: ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right'],
      correctAnswer: 'Top-Left',
      explanation: '270° CW = 90° CCW; TR → 90° CCW = TL'
    },

    // ============================================
    // MISSING FIGURES (Questions 71-85)
    // ============================================
    {
      id: 'ar-q71',
      topic: 'Missing Figures',
      difficulty: 'Easy',
      question: '2, 4, 6, 8, ?, 12',
      options: ['7', '8', '9', '10'],
      correctAnswer: '10',
      explanation: 'Add 2 each time: 2, 4, 6, 8, 10, 12'
    },
    {
      id: 'ar-q72',
      topic: 'Missing Figures',
      difficulty: 'Easy',
      question: '1, 4, 9, 16, ?',
      options: ['20', '25', '30', '36'],
      correctAnswer: '25',
      explanation: 'Square numbers: 1², 2², 3², 4², next is 5² = 25'
    },
    {
      id: 'ar-q73',
      topic: 'Missing Figures',
      difficulty: 'Easy',
      question: '3, 6, 9, ?, 15',
      options: ['10', '11', '12', '13'],
      correctAnswer: '12',
      explanation: 'Add 3 each time: 3, 6, 9, 12, 15'
    },
    {
      id: 'ar-q74',
      topic: 'Missing Figures',
      difficulty: 'Medium',
      question: '1, 1, 2, 3, 5, ?, 13',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
      explanation: 'Fibonacci: each term is sum of previous two; 3 + 5 = 8'
    },
    {
      id: 'ar-q75',
      topic: 'Missing Figures',
      difficulty: 'Medium',
      question: '2, 6, 18, ?, 162',
      options: ['36', '45', '54', '72'],
      correctAnswer: '54',
      explanation: 'Multiply by 3 each time: 2, 6, 18, 54, 162'
    },
    {
      id: 'ar-q76',
      topic: 'Missing Figures',
      difficulty: 'Medium',
      question: '4, 9, 14, 19, ?',
      options: ['22', '23', '24', '25'],
      correctAnswer: '24',
      explanation: 'Add 5 each time: 4, 9, 14, 19, 24'
    },
    {
      id: 'ar-q77',
      topic: 'Missing Figures',
      difficulty: 'Hard',
      question: '1, 8, 27, 64, ?',
      options: ['100', '115', '125', '144'],
      correctAnswer: '125',
      explanation: 'Cube numbers: 1³, 2³, 3³, 4³, next is 5³ = 125'
    },
    {
      id: 'ar-q78',
      topic: 'Missing Figures',
      difficulty: 'Hard',
      question: '2, 5, 10, 17, 26, ?',
      options: ['32', '35', '37', '40'],
      correctAnswer: '37',
      explanation: 'Add consecutive odd numbers: +3, +5, +7, +9, +11; 26 + 11 = 37'
    },
    {
      id: 'ar-q79',
      topic: 'Missing Figures',
      difficulty: 'Hard',
      question: '1, 2, 6, 24, 120, ?',
      options: ['240', '360', '480', '720'],
      correctAnswer: '720',
      explanation: 'Multiply by increasing numbers: ×2, ×3, ×4, ×5, ×6; 120 × 6 = 720'
    },
    {
      id: 'ar-q80',
      topic: 'Missing Figures',
      difficulty: 'Hard',
      question: '●●, ○○, ●●●, ○○○, ●●●●, ?',
      options: ['●●●●●', '○○○○', '●●●', '○○○○○'],
      correctAnswer: '○○○○○',
      explanation: 'Alternating solid and empty, adding 1 each time: 2,2,3,3,4, next is 5 empty circles'
    },
    {
      id: 'ar-q81',
      topic: 'Missing Figures',
      difficulty: 'Medium',
      question: '3, 7, 11, ?, 19, 23',
      options: ['13', '14', '15', '16'],
      correctAnswer: '15',
      explanation: 'Add 4 each time: 3, 7, 11, 15, 19, 23'
    },
    {
      id: 'ar-q82',
      topic: 'Missing Figures',
      difficulty: 'Hard',
      question: '1, 3, 6, 10, 15, ?, 28',
      options: ['18', '20', '21', '24'],
      correctAnswer: '21',
      explanation: 'Triangular numbers: +2, +3, +4, +5, +6, +7; 15 + 6 = 21'
    },
    {
      id: 'ar-q83',
      topic: 'Missing Figures',
      difficulty: 'Medium',
      question: '2, 4, 8, 16, ?, 64',
      options: ['24', '28', '32', '40'],
      correctAnswer: '32',
      explanation: 'Multiply by 2 each time: 2, 4, 8, 16, 32, 64'
    },
    {
      id: 'ar-q84',
      topic: 'Missing Figures',
      difficulty: 'Hard',
      question: '1, 4, 9, 16, ?, 36',
      options: ['20', '24', '25', '30'],
      correctAnswer: '25',
      explanation: 'Square numbers: 1, 4, 9, 16, 25, 36'
    },
    {
      id: 'ar-q85',
      topic: 'Missing Figures',
      difficulty: 'Hard',
      question: '5, 10, 20, 40, ?, 160',
      options: ['60', '70', '80', '90'],
      correctAnswer: '80',
      explanation: 'Multiply by 2 each time: 5, 10, 20, 40, 80, 160'
    },

    // ============================================
    // LOGICAL SEQUENCES & ODD ONE OUT (Questions 86-100)
    // ============================================
    {
      id: 'ar-q86',
      topic: 'Logical Sequences',
      difficulty: 'Easy',
      question: 'Which number doesn\'t belong: 2, 4, 6, 8, 10, 11?',
      options: ['2', '4', '8', '11'],
      correctAnswer: '11',
      explanation: 'All except 11 are even numbers'
    },
    {
      id: 'ar-q87',
      topic: 'Logical Sequences',
      difficulty: 'Easy',
      question: 'Which shape doesn\'t belong: Triangle, Square, Pentagon, Circle?',
      options: ['Triangle', 'Square', 'Pentagon', 'Circle'],
      correctAnswer: 'Circle',
      explanation: 'Circle is the only shape without straight sides'
    },
    {
      id: 'ar-q88',
      topic: 'Logical Sequences',
      difficulty: 'Medium',
      question: 'Which doesn\'t belong: 2, 3, 5, 7, 11, 13, 20?',
      options: ['2', '3', '7', '20'],
      correctAnswer: '20',
      explanation: 'All except 20 are prime numbers'
    },
    {
      id: 'ar-q89',
      topic: 'Logical Sequences',
      difficulty: 'Medium',
      question: 'Which doesn\'t belong: 4, 9, 16, 25, 36, 49, 72?',
      options: ['9', '25', '49', '72'],
      correctAnswer: '72',
      explanation: 'All except 72 are square numbers'
    },
    {
      id: 'ar-q90',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: 'Which doesn\'t belong: 1, 8, 27, 64, 125, 216, 400?',
      options: ['8', '64', '216', '400'],
      correctAnswer: '400',
      explanation: 'All except 400 are cube numbers (1³, 2³, 3³, 4³, 5³, 6³)'
    },
    {
      id: 'ar-q91',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: 'Which doesn\'t belong: 2, 3, 5, 8, 13, 21, 34, 55, 93?',
      options: ['5', '13', '55', '93'],
      correctAnswer: '93',
      explanation: 'All except 93 are Fibonacci numbers'
    },
    {
      id: 'ar-q92',
      topic: 'Logical Sequences',
      difficulty: 'Medium',
      question: 'Triangle is to 3 as Square is to ?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '4',
      explanation: 'Triangle has 3 sides, Square has 4 sides'
    },
    {
      id: 'ar-q93',
      topic: 'Logical Sequences',
      difficulty: 'Medium',
      question: 'Circle is to 0 as Pentagon is to ?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '5',
      explanation: 'Circle has 0 sides (or infinite), Pentagon has 5 sides'
    },
    {
      id: 'ar-q94',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: '4 is to 16 as 5 is to ?',
      options: ['20', '25', '30', '36'],
      correctAnswer: '25',
      explanation: '4² = 16, so 5² = 25'
    },
    {
      id: 'ar-q95',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: 'Red is to Primary as Orange is to ?',
      options: ['Primary', 'Secondary', 'Tertiary', 'Complementary'],
      correctAnswer: 'Secondary',
      explanation: 'Red is a primary color, Orange is a secondary color (red + yellow)'
    },
    {
      id: 'ar-q96',
      topic: 'Logical Sequences',
      difficulty: 'Medium',
      question: 'What comes next: 3, 7, 11, 15, 19, ?',
      options: ['21', '22', '23', '24'],
      correctAnswer: '23',
      explanation: 'Add 4 each time: 3, 7, 11, 15, 19, 23'
    },
    {
      id: 'ar-q97',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: 'What comes next: 1, 3, 9, 27, 81, ?',
      options: ['162', '243', '324', '405'],
      correctAnswer: '243',
      explanation: 'Multiply by 3 each time: 1, 3, 9, 27, 81, 243'
    },
    {
      id: 'ar-q98',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: 'What comes next: 2, 6, 12, 20, 30, 42, ?',
      options: ['52', '54', '56', '58'],
      correctAnswer: '56',
      explanation: 'Add even numbers: +4, +6, +8, +10, +12, +14; 42 + 14 = 56'
    },
    {
      id: 'ar-q99',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: 'A, C, F, J, O, ?',
      options: ['Q', 'R', 'S', 'U'],
      correctAnswer: 'U',
      explanation: 'Add increasing numbers: +2, +3, +4, +5, +6; O + 6 = U'
    },
    {
      id: 'ar-q100',
      topic: 'Logical Sequences',
      difficulty: 'Hard',
      question: 'Which doesn\'t belong: 12, 24, 36, 48, 60, 72, 84, 96, 108, 250?',
      options: ['12', '48', '96', '250'],
      correctAnswer: '250',
      explanation: 'All except 250 are multiples of 12'
    }
  ]
};

export default abstractReasoningQuestions;