export const numericalReasoningQuestions = {
  sectionId: 'numerical-reasoning',
  sectionTitle: 'Numerical Reasoning',
  totalQuestions: 100,
  questions: [
    // ============================================
    // PERCENTAGES (Questions 1-15)
    // ============================================
    {
      id: 'nr-q1',
      topic: 'Percentages',
      difficulty: 'Easy',
      question: 'What is 25% of 200?',
      options: ['25', '40', '50', '75'],
      correctAnswer: '50',
      explanation: '25% = 25/100 = 0.25, 0.25 × 200 = 50'
    },
    {
      id: 'nr-q2',
      topic: 'Percentages',
      difficulty: 'Easy',
      question: 'What is 10% of 350?',
      options: ['25', '30', '35', '40'],
      correctAnswer: '35',
      explanation: '10% = 10/100 = 0.1, 0.1 × 350 = 35'
    },
    {
      id: 'nr-q3',
      topic: 'Percentages',
      difficulty: 'Easy',
      question: 'What is 50% of 80?',
      options: ['30', '35', '40', '45'],
      correctAnswer: '40',
      explanation: '50% = 50/100 = 0.5, 0.5 × 80 = 40'
    },
    {
      id: 'nr-q4',
      topic: 'Percentages',
      difficulty: 'Easy',
      question: 'A student scored 42 marks out of 60. What percentage did they score?',
      options: ['60%', '65%', '70%', '75%'],
      correctAnswer: '70%',
      explanation: '(42 ÷ 60) × 100 = 0.7 × 100 = 70%'
    },
    {
      id: 'nr-q5',
      topic: 'Percentages',
      difficulty: 'Easy',
      question: 'If 30% of a number is 75, what is the number?',
      options: ['200', '225', '250', '275'],
      correctAnswer: '250',
      explanation: '75 ÷ 0.3 = 250'
    },
    {
      id: 'nr-q6',
      topic: 'Percentages',
      difficulty: 'Medium',
      question: 'A company has 250 employees. 40% are women. How many women work there?',
      options: ['80', '90', '100', '110'],
      correctAnswer: '100',
      explanation: '40% of 250 = 0.4 × 250 = 100'
    },
    {
      id: 'nr-q7',
      topic: 'Percentages',
      difficulty: 'Medium',
      question: 'The price increased from ₦250 to ₦325. What is the percentage increase?',
      options: ['20%', '25%', '30%', '35%'],
      correctAnswer: '30%',
      explanation: 'Increase = 325-250=75; (75/250) × 100 = 30%'
    },
    {
      id: 'nr-q8',
      topic: 'Percentages',
      difficulty: 'Medium',
      question: 'The number of visitors dropped from 800 to 680. What is the percentage decrease?',
      options: ['10%', '12%', '15%', '18%'],
      correctAnswer: '15%',
      explanation: 'Decrease = 120; (120/800) × 100 = 15%'
    },
    {
      id: 'nr-q9',
      topic: 'Percentages',
      difficulty: 'Medium',
      question: 'A laptop costing ₦80,000 gets a 10% discount. What is the final price?',
      options: ['₦70,000', '₦72,000', '₦75,000', '₦78,000'],
      correctAnswer: '₦72,000',
      explanation: '10% of 80,000 = 8,000; 80,000 - 8,000 = 72,000'
    },
    {
      id: 'nr-q10',
      topic: 'Percentages',
      difficulty: 'Medium',
      question: 'A customer bought a phone for ₦34,000 after a 15% discount. What was the original price?',
      options: ['₦38,000', '₦40,000', '₦42,000', '₦44,000'],
      correctAnswer: '₦40,000',
      explanation: '34,000 is 85% of original; Original = 34,000 ÷ 0.85 = 40,000'
    },
    {
      id: 'nr-q11',
      topic: 'Percentages',
      difficulty: 'Medium',
      question: 'A salary increased by 12% to ₦56,000. What was the original salary?',
      options: ['₦48,000', '₦49,000', '₦50,000', '₦52,000'],
      correctAnswer: '₦50,000',
      explanation: '56,000 is 112% of original; Original = 56,000 ÷ 1.12 = 50,000'
    },
    {
      id: 'nr-q12',
      topic: 'Percentages',
      difficulty: 'Hard',
      question: 'A laptop gets a 10% discount, then an additional 5% discount. Original price ₦80,000. What is the final price?',
      options: ['₦66,400', '₦67,600', '₦68,400', '₦69,200'],
      correctAnswer: '₦68,400',
      explanation: '80,000 × 0.9 × 0.95 = 80,000 × 0.855 = 68,400'
    },
    {
      id: 'nr-q13',
      topic: 'Percentages',
      difficulty: 'Hard',
      question: 'A population of 10,000 increases by 20% then 10%. What is the final population?',
      options: ['12,000', '12,800', '13,000', '13,200'],
      correctAnswer: '13,200',
      explanation: '10,000 × 1.2 × 1.1 = 10,000 × 1.32 = 13,200'
    },
    {
      id: 'nr-q14',
      topic: 'Percentages',
      difficulty: 'Hard',
      question: 'What is the single discount equivalent to successive discounts of 20% and 10%?',
      options: ['28%', '30%', '32%', '35%'],
      correctAnswer: '28%',
      explanation: 'Equivalent = 100 - (100 × 0.8 × 0.9) = 100 - 72 = 28%'
    },
    {
      id: 'nr-q15',
      topic: 'Percentages',
      difficulty: 'Hard',
      question: 'A number is increased by 30% and then decreased by 30%. What is the net change?',
      options: ['0%', '9% decrease', '9% increase', '10% decrease'],
      correctAnswer: '9% decrease',
      explanation: '100 → 130 → 91; Net change = 9% decrease'
    },

    // ============================================
    // RATIOS (Questions 16-25)
    // ============================================
    {
      id: 'nr-q16',
      topic: 'Ratios',
      difficulty: 'Easy',
      question: 'Simplify the ratio 24:36',
      options: ['2:3', '3:4', '4:6', '6:9'],
      correctAnswer: '2:3',
      explanation: 'HCF of 24 and 36 is 12; 24÷12=2, 36÷12=3'
    },
    {
      id: 'nr-q17',
      topic: 'Ratios',
      difficulty: 'Easy',
      question: 'Simplify 42:56',
      options: ['2:3', '3:4', '4:5', '5:6'],
      correctAnswer: '3:4',
      explanation: 'HCF of 42 and 56 is 14; 42÷14=3, 56÷14=4'
    },
    {
      id: 'nr-q18',
      topic: 'Ratios',
      difficulty: 'Medium',
      question: 'Adam and Bisi share ₦5,400 in ratio 2:7. How much does Adam get?',
      options: ['₦1,000', '₦1,200', '₦1,400', '₦1,600'],
      correctAnswer: '₦1,200',
      explanation: 'Total parts=9; One part=5400÷9=600; Adam=2×600=1,200'
    },
    {
      id: 'nr-q19',
      topic: 'Ratios',
      difficulty: 'Medium',
      question: 'Divide ₦4,800 in ratio 1:3:4. What is the largest share?',
      options: ['₦1,800', '₦2,000', '₦2,200', '₦2,400'],
      correctAnswer: '₦2,400',
      explanation: 'Total parts=8; One part=4800÷8=600; Largest=4×600=2,400'
    },
    {
      id: 'nr-q20',
      topic: 'Ratios',
      difficulty: 'Medium',
      question: 'Two numbers are in ratio 5:3. If the smaller is 45, find the larger.',
      options: ['60', '65', '70', '75'],
      correctAnswer: '75',
      explanation: 'Larger/5 = 45/3; Larger = 15 × 5 = 75'
    },
    {
      id: 'nr-q21',
      topic: 'Ratios',
      difficulty: 'Medium',
      question: 'The ratio of boys to girls is 3:2. If 4 more boys join, ratio becomes 5:2. How many girls are there?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '4',
      explanation: 'Let girls=2x; (3x+4):2x = 5:2; 2(3x+4)=5(2x); 6x+8=10x; x=2; Girls=4'
    },
    {
      id: 'nr-q22',
      topic: 'Ratios',
      difficulty: 'Hard',
      question: 'If a:b = 3:4 and b:c = 2:5, find a:b:c',
      options: ['3:4:5', '3:4:8', '3:4:10', '6:8:10'],
      correctAnswer: '3:4:10',
      explanation: 'a:b=3:4; b:c=2:5=4:10; a:b:c=3:4:10'
    },
    {
      id: 'nr-q23',
      topic: 'Ratios',
      difficulty: 'Medium',
      question: 'If the ratio of speeds of two cars is 4:5, what is the ratio of times taken to cover the same distance?',
      options: ['4:5', '5:4', '16:25', '25:16'],
      correctAnswer: '5:4',
      explanation: 'Time is inversely proportional to speed, so time ratio = 5:4'
    },
    {
      id: 'nr-q24',
      topic: 'Ratios',
      difficulty: 'Medium',
      question: 'In a mixture, milk and water are in ratio 3:2. What percentage is milk?',
      options: ['40%', '50%', '60%', '75%'],
      correctAnswer: '60%',
      explanation: 'Total parts=5; Milk% = (3/5) × 100 = 60%'
    },
    {
      id: 'nr-q25',
      topic: 'Ratios',
      difficulty: 'Hard',
      question: 'If x:y = 3:5 and y:z = 4:7, find x:y:z',
      options: ['12:20:35', '12:20:28', '15:20:35', '3:5:7'],
      correctAnswer: '12:20:35',
      explanation: 'x:y=3:5=12:20; y:z=4:7=20:35; x:y:z=12:20:35'
    },

    // ============================================
    // PROFIT & LOSS (Questions 26-35)
    // ============================================
    {
      id: 'nr-q26',
      topic: 'Profit & Loss',
      difficulty: 'Easy',
      question: 'Buy for ₦250, sell for ₦300. Find profit percentage.',
      options: ['15%', '20%', '25%', '30%'],
      correctAnswer: '20%',
      explanation: 'Profit=50; (50/250) × 100 = 20%'
    },
    {
      id: 'nr-q27',
      topic: 'Profit & Loss',
      difficulty: 'Easy',
      question: 'Buy for ₦5,000, sell for ₦4,250. Find loss percentage.',
      options: ['10%', '12%', '15%', '18%'],
      correctAnswer: '15%',
      explanation: 'Loss=750; (750/5000) × 100 = 15%'
    },
    {
      id: 'nr-q28',
      topic: 'Profit & Loss',
      difficulty: 'Medium',
      question: 'Buy for ₦800, want 35% profit. What is the selling price?',
      options: ['₦1,000', '₦1,040', '₦1,080', '₦1,120'],
      correctAnswer: '₦1,080',
      explanation: 'SP = 800 × 1.35 = 1,080'
    },
    {
      id: 'nr-q29',
      topic: 'Profit & Loss',
      difficulty: 'Medium',
      question: 'Sell at ₦3,600 with 10% loss. Find cost price.',
      options: ['₦3,800', '₦4,000', '₦4,200', '₦4,400'],
      correctAnswer: '₦4,000',
      explanation: 'CP = 3600 × 100/90 = 4,000'
    },
    {
      id: 'nr-q30',
      topic: 'Profit & Loss',
      difficulty: 'Medium',
      question: 'A trader marks an item at ₦1,200, gives 15% discount, and still makes 20% profit. Find CP.',
      options: ['₦800', '₦825', '₦850', '₦875'],
      correctAnswer: '₦850',
      explanation: 'SP = 1200 × 0.85 = 1,020; CP = 1020 × 100/120 = 850'
    },
    {
      id: 'nr-q31',
      topic: 'Profit & Loss',
      difficulty: 'Hard',
      question: 'A TV marked at ₦250,000 gets three discounts: 10%, 5%, and 2%. What is the final price?',
      options: ['₦205,000', '₦207,475', '₦209,475', '₦211,475'],
      correctAnswer: '₦209,475',
      explanation: '250,000 × 0.9 × 0.95 × 0.98 = 250,000 × 0.8379 = 209,475'
    },
    {
      id: 'nr-q32',
      topic: 'Profit & Loss',
      difficulty: 'Hard',
      question: 'A shopkeeper marks up 40% above CP, then gives 25% discount. What is the profit/loss percentage?',
      options: ['5% profit', '5% loss', '10% profit', '10% loss'],
      correctAnswer: '5% profit',
      explanation: 'Let CP=100; MP=140; SP=140×0.75=105; Profit=5%'
    },
    {
      id: 'nr-q33',
      topic: 'Profit & Loss',
      difficulty: 'Medium',
      question: 'A trader buys 120 items: 50 at ₦250 and 70 at ₦300. Sells all at ₦280. Find profit or loss.',
      options: ['Profit ₦100', 'Profit ₦200', 'Loss ₦100', 'Loss ₦200'],
      correctAnswer: 'Profit ₦100',
      explanation: 'CP=12,500+21,000=33,500; SP=120×280=33,600; Profit=100'
    },
    {
      id: 'nr-q34',
      topic: 'Profit & Loss',
      difficulty: 'Hard',
      question: 'A trader buys 100 items at ₦150 each. Sells 40% at ₦200 and rest at ₦180. Find total profit percentage.',
      options: ['20%', '22.5%', '25%', '27.5%'],
      correctAnswer: '25.33%',
      explanation: 'CP=15,000; SP=(40×200)+(60×180)=8,000+10,800=18,800; Profit%=3800/15000×100=25.33%'
    },
    {
      id: 'nr-q35',
      topic: 'Profit & Loss',
      difficulty: 'Hard',
      question: 'A trader buys a TV for ₦80,000 and spends ₦5,000 on transportation. Sells for ₦93,500. Find profit percentage.',
      options: ['8%', '9%', '10%', '12%'],
      correctAnswer: '10%',
      explanation: 'Total CP=85,000; Profit=8,500; Profit%=8500/85000×100=10%'
    },

    // ============================================
    // SPEED, TIME & DISTANCE (Questions 36-50)
    // ============================================
    {
      id: 'nr-q36',
      topic: 'Speed, Time & Distance',
      difficulty: 'Easy',
      question: 'A bus travels 360 km in 4.5 hours. What is its speed?',
      options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
      correctAnswer: '80 km/h',
      explanation: 'Speed = 360 ÷ 4.5 = 80 km/h'
    },
    {
      id: 'nr-q37',
      topic: 'Speed, Time & Distance',
      difficulty: 'Easy',
      question: 'Travel 240 km in 3 hours. Find speed.',
      options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
      correctAnswer: '80 km/h',
      explanation: 'Speed = 240 ÷ 3 = 80 km/h'
    },
    {
      id: 'nr-q38',
      topic: 'Speed, Time & Distance',
      difficulty: 'Easy',
      question: 'Speed 65 km/h for 4 hours. Find distance.',
      options: ['240 km', '250 km', '260 km', '270 km'],
      correctAnswer: '260 km',
      explanation: 'Distance = 65 × 4 = 260 km'
    },
    {
      id: 'nr-q39',
      topic: 'Speed, Time & Distance',
      difficulty: 'Easy',
      question: 'Distance 525 km, speed 70 km/h. Find time.',
      options: ['6.5 hours', '7 hours', '7.5 hours', '8 hours'],
      correctAnswer: '7.5 hours',
      explanation: 'Time = 525 ÷ 70 = 7.5 hours'
    },
    {
      id: 'nr-q40',
      topic: 'Speed, Time & Distance',
      difficulty: 'Medium',
      question: 'Convert 72 km/h to m/s.',
      options: ['15 m/s', '18 m/s', '20 m/s', '25 m/s'],
      correctAnswer: '20 m/s',
      explanation: '72 × 5/18 = 20 m/s'
    },
    {
      id: 'nr-q41',
      topic: 'Speed, Time & Distance',
      difficulty: 'Medium',
      question: 'Convert 108 km/h to m/s.',
      options: ['25 m/s', '27 m/s', '30 m/s', '33 m/s'],
      correctAnswer: '30 m/s',
      explanation: '108 × 5/18 = 30 m/s'
    },
    {
      id: 'nr-q42',
      topic: 'Speed, Time & Distance',
      difficulty: 'Medium',
      question: 'A car travels 150 km at 60 km/h and 200 km at 80 km/h. Find average speed.',
      options: ['60 km/h', '65 km/h', '70 km/h', '75 km/h'],
      correctAnswer: '70 km/h',
      explanation: 'Time1=2.5h, Time2=2.5h; Total distance=350; Total time=5; Avg=350/5=70 km/h'
    },
    {
      id: 'nr-q43',
      topic: 'Speed, Time & Distance',
      difficulty: 'Medium',
      question: 'Two cars start from the same point. One at 90 km/h, the other at 70 km/h. How far apart after 2.5 hours?',
      options: ['40 km', '45 km', '50 km', '55 km'],
      correctAnswer: '50 km',
      explanation: 'Relative speed = 90-70 = 20 km/h; Distance = 20 × 2.5 = 50 km'
    },
    {
      id: 'nr-q44',
      topic: 'Speed, Time & Distance',
      difficulty: 'Medium',
      question: 'Two cities 480 km apart. Two cars drive towards each other at 50 km/h and 70 km/h. How long before they meet?',
      options: ['3 hours', '3.5 hours', '4 hours', '4.5 hours'],
      correctAnswer: '4 hours',
      explanation: 'Relative speed = 50+70 = 120 km/h; Time = 480/120 = 4 hours'
    },
    {
      id: 'nr-q45',
      topic: 'Speed, Time & Distance',
      difficulty: 'Hard',
      question: 'A train 200 meters long passes a pole in 10 seconds. What is its speed in km/h?',
      options: ['60 km/h', '66 km/h', '72 km/h', '78 km/h'],
      correctAnswer: '72 km/h',
      explanation: 'Speed = 200/10 = 20 m/s; 20 × 18/5 = 72 km/h'
    },
    {
      id: 'nr-q46',
      topic: 'Speed, Time & Distance',
      difficulty: 'Hard',
      question: 'A train 150 meters long passes a bridge 350 meters long in 25 seconds. Find speed in km/h.',
      options: ['60 km/h', '66 km/h', '72 km/h', '78 km/h'],
      correctAnswer: '72 km/h',
      explanation: 'Total distance=150+350=500m; Speed=500/25=20m/s; 20×18/5=72 km/h'
    },
    {
      id: 'nr-q47',
      topic: 'Speed, Time & Distance',
      difficulty: 'Hard',
      question: 'A boat travels 12 km/h in still water. Stream flows at 3 km/h. Find downstream speed.',
      options: ['9 km/h', '12 km/h', '15 km/h', '18 km/h'],
      correctAnswer: '15 km/h',
      explanation: 'Downstream = 12 + 3 = 15 km/h'
    },
    {
      id: 'nr-q48',
      topic: 'Speed, Time & Distance',
      difficulty: 'Hard',
      question: 'A car travels a distance at 60 km/h and returns at 40 km/h. Find average speed.',
      options: ['44 km/h', '46 km/h', '48 km/h', '50 km/h'],
      correctAnswer: '48 km/h',
      explanation: 'Avg = (2 × 60 × 40)/(60+40) = 4800/100 = 48 km/h'
    },
    {
      id: 'nr-q49',
      topic: 'Speed, Time & Distance',
      difficulty: 'Hard',
      question: 'At 7:00 AM, a cyclist starts from Town A at 15 km/h toward Town B. At 8:30 AM, another starts from Town B at 25 km/h toward Town A. Towns are 90 km apart. When do they meet?',
      options: ['10:00 AM', '10:11 AM', '10:30 AM', '11:00 AM'],
      correctAnswer: '10:11 AM',
      explanation: 'First covers 22.5 km; Remaining 67.5 km; Relative speed=40 km/h; Time=1.6875h=1h41min; Meet at 10:11 AM'
    },
    {
      id: 'nr-q50',
      topic: 'Speed, Time & Distance',
      difficulty: 'Hard',
      question: 'A person walks from home to office at 4 km/h and returns at 6 km/h. Total time is 2.5 hours. Find distance.',
      options: ['4 km', '5 km', '6 km', '7 km'],
      correctAnswer: '6 km',
      explanation: 'd/4 + d/6 = 2.5; (3d+2d)/12=2.5; 5d=30; d=6 km'
    },

    // ============================================
    // PROBABILITY (Questions 51-60)
    // ============================================
    {
      id: 'nr-q51',
      topic: 'Probability',
      difficulty: 'Easy',
      question: 'What is the probability of rolling a 3 on a standard die?',
      options: ['1/2', '1/3', '1/4', '1/6'],
      correctAnswer: '1/6',
      explanation: 'There are 6 possible outcomes, only 1 is favorable (3)'
    },
    {
      id: 'nr-q52',
      topic: 'Probability',
      difficulty: 'Easy',
      question: 'What is the probability of rolling a number greater than 4 on a die?',
      options: ['1/6', '1/3', '1/2', '2/3'],
      correctAnswer: '1/3',
      explanation: 'Favorable outcomes: 5,6 (2 outcomes); P=2/6=1/3'
    },
    {
      id: 'nr-q53',
      topic: 'Probability',
      difficulty: 'Easy',
      question: 'What is the probability of drawing a heart from a deck of 52 cards?',
      options: ['1/4', '1/3', '1/2', '3/4'],
      correctAnswer: '1/4',
      explanation: 'Hearts=13; P=13/52=1/4'
    },
    {
      id: 'nr-q54',
      topic: 'Probability',
      difficulty: 'Medium',
      question: 'A bag contains 5 red, 3 blue, and 2 green marbles. What is P(blue)?',
      options: ['1/5', '3/10', '1/3', '2/5'],
      correctAnswer: '3/10',
      explanation: 'Total=10; Blue=3; P=3/10'
    },
    {
      id: 'nr-q55',
      topic: 'Probability',
      difficulty: 'Medium',
      question: 'What is P(not blue) from the same bag?',
      options: ['3/10', '7/10', '1/2', '2/3'],
      correctAnswer: '7/10',
      explanation: 'P(not blue)=1-P(blue)=1-3/10=7/10'
    },
    {
      id: 'nr-q56',
      topic: 'Probability',
      difficulty: 'Medium',
      question: 'Bag has 4 red and 6 yellow balls. What is P(red then yellow with replacement)?',
      options: ['6/25', '4/15', '2/5', '3/5'],
      correctAnswer: '6/25',
      explanation: 'P(red)=4/10=2/5; P(yellow)=6/10=3/5; P=2/5×3/5=6/25'
    },
    {
      id: 'nr-q57',
      topic: 'Probability',
      difficulty: 'Hard',
      question: 'Bag has 4 red and 6 yellow balls. P(red then yellow without replacement)?',
      options: ['4/15', '6/25', '2/5', '3/10'],
      correctAnswer: '4/15',
      explanation: 'P(red)=4/10=2/5; After removing red, P(yellow)=6/9=2/3; P=2/5×2/3=4/15'
    },
    {
      id: 'nr-q58',
      topic: 'Probability',
      difficulty: 'Medium',
      question: 'Two coins tossed. P(at least one head)?',
      options: ['1/4', '1/2', '3/4', '1'],
      correctAnswer: '3/4',
      explanation: 'Favorable: HH, HT, TH (3 outcomes); P=3/4'
    },
    {
      id: 'nr-q59',
      topic: 'Probability',
      difficulty: 'Hard',
      question: 'Two dice rolled. P(sum of 7)?',
      options: ['1/6', '1/8', '1/9', '1/12'],
      correctAnswer: '1/6',
      explanation: 'Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes; P=6/36=1/6'
    },
    {
      id: 'nr-q60',
      topic: 'Probability',
      difficulty: 'Hard',
      question: 'If probability of rain on any day is 20%, what is P(at least one rainy day in 3 days)?',
      options: ['0.488', '0.512', '0.6', '0.8'],
      correctAnswer: '0.488',
      explanation: 'P(no rain)=0.8³=0.512; P(at least one)=1-0.512=0.488'
    },

    // ============================================
    // GRAPH INTERPRETATION (Questions 61-70)
    // ============================================
    {
      id: 'nr-q61',
      topic: 'Graph Interpretation',
      difficulty: 'Easy',
      question: 'A bar chart shows sales: Jan=100, Feb=250, Mar=350, Apr=450, May=500. Which month had highest sales?',
      options: ['March', 'April', 'May', 'June'],
      correctAnswer: 'May',
      explanation: 'May has the tallest bar at 500'
    },
    {
      id: 'nr-q62',
      topic: 'Graph Interpretation',
      difficulty: 'Easy',
      question: 'From the same bar chart, what were the sales in February?',
      options: ['150', '200', '250', '300'],
      correctAnswer: '250',
      explanation: 'February sales = 250 (read from chart)'
    },
    {
      id: 'nr-q63',
      topic: 'Graph Interpretation',
      difficulty: 'Medium',
      question: 'From the same bar chart, what is total sales for the 5 months?',
      options: ['1,450', '1,550', '1,650', '1,750'],
      correctAnswer: '1,650',
      explanation: '100+250+350+450+500=1,650'
    },
    {
      id: 'nr-q64',
      topic: 'Graph Interpretation',
      difficulty: 'Medium',
      question: 'From the same bar chart, what is the average monthly sales?',
      options: ['310', '320', '330', '340'],
      correctAnswer: '330',
      explanation: '1,650 ÷ 5 = 330'
    },
    {
      id: 'nr-q65',
      topic: 'Graph Interpretation',
      difficulty: 'Hard',
      question: 'From the same bar chart, what is the percentage increase from January to May?',
      options: ['250%', '300%', '350%', '400%'],
      correctAnswer: '350%',
      explanation: 'Increase=500-100=400; (400/100)×100=350%'
    },
    {
      id: 'nr-q66',
      topic: 'Graph Interpretation',
      difficulty: 'Medium',
      question: 'A pie chart shows budget: Housing 30%, Food 25%, Transport 15%, Savings 20%, Others 10%. If total is ₦80,000, how much is housing?',
      options: ['₦20,000', '₦22,000', '₦24,000', '₦26,000'],
      correctAnswer: '₦24,000',
      explanation: '30% of 80,000 = 0.3 × 80,000 = 24,000'
    },
    {
      id: 'nr-q67',
      topic: 'Graph Interpretation',
      difficulty: 'Medium',
      question: 'From the same pie chart, how much more is spent on housing than food?',
      options: ['₦2,000', '₦3,000', '₦4,000', '₦5,000'],
      correctAnswer: '₦4,000',
      explanation: '5% of 80,000 = 4,000'
    },
    {
      id: 'nr-q68',
      topic: 'Graph Interpretation',
      difficulty: 'Hard',
      question: 'From the same pie chart, what is the angle of the housing sector?',
      options: ['72°', '90°', '108°', '120°'],
      correctAnswer: '108°',
      explanation: '(30/100) × 360° = 108°'
    },
    {
      id: 'nr-q69',
      topic: 'Graph Interpretation',
      difficulty: 'Hard',
      question: 'If transport is ₦12,000 in the pie chart, what is the total budget?',
      options: ['₦60,000', '₦70,000', '₦80,000', '₦90,000'],
      correctAnswer: '₦80,000',
      explanation: '12,000 ÷ 0.15 = 80,000'
    },
    {
      id: 'nr-q70',
      topic: 'Graph Interpretation',
      difficulty: 'Medium',
      question: 'A line graph shows population: 2010=5,000, 2015=6,500, 2020=8,000. What is the percentage increase from 2010 to 2020?',
      options: ['40%', '50%', '60%', '70%'],
      correctAnswer: '60%',
      explanation: 'Increase=3,000; (3000/5000)×100=60%'
    },

    // ============================================
    // TABLES (Questions 71-80)
    // ============================================
    {
      id: 'nr-q71',
      topic: 'Tables',
      difficulty: 'Easy',
      question: 'In a student table, Ali scored 85 in Math, 75 in English, 90 in Science. What is Ali\'s total?',
      options: ['230', '240', '250', '260'],
      correctAnswer: '250',
      explanation: '85+75+90=250'
    },
    {
      id: 'nr-q72',
      topic: 'Tables',
      difficulty: 'Easy',
      question: 'From the same table, Bola scored 70, 80, 65. What is her total?',
      options: ['205', '210', '215', '220'],
      correctAnswer: '215',
      explanation: '70+80+65=215'
    },
    {
      id: 'nr-q73',
      topic: 'Tables',
      difficulty: 'Medium',
      question: 'Ali\'s total is 250, Bola\'s is 215, Chidi\'s is 275, Dami\'s is 205. What is the average total?',
      options: ['226.25', '231.25', '236.25', '241.25'],
      correctAnswer: '236.25',
      explanation: '(250+215+275+205)/4 = 945/4 = 236.25'
    },
    {
      id: 'nr-q74',
      topic: 'Tables',
      difficulty: 'Medium',
      question: 'From the same table, who scored highest in Mathematics?',
      options: ['Ali', 'Bola', 'Chidi', 'Dami'],
      correctAnswer: 'Chidi',
      explanation: 'Chidi scored 95, highest among Ali(85), Bola(70), Chidi(95), Dami(60)'
    },
    {
      id: 'nr-q75',
      topic: 'Tables',
      difficulty: 'Medium',
      question: 'Sales table: Product A sales: Jan=2000, Feb=1800, Mar=2500, Apr=3000, May=2700. What is total Product A sales?',
      options: ['10,000', '11,000', '12,000', '13,000'],
      correctAnswer: '12,000',
      explanation: '2000+1800+2500+3000+2700=12,000'
    },
    {
      id: 'nr-q76',
      topic: 'Tables',
      difficulty: 'Medium',
      question: 'Product B sales: Jan=1500, Feb=2200, Mar=2000, Apr=2800, May=3100. Which month had highest Product B sales?',
      options: ['March', 'April', 'May', 'February'],
      correctAnswer: 'May',
      explanation: 'May had 3,100, the highest among all months'
    },
    {
      id: 'nr-q77',
      topic: 'Tables',
      difficulty: 'Hard',
      question: 'What is the average monthly total sales across all products? (Totals: Jan=3500, Feb=4000, Mar=4500, Apr=5800, May=5800)',
      options: ['4,520', '4,620', '4,720', '4,820'],
      correctAnswer: '4,720',
      explanation: '(3500+4000+4500+5800+5800)/5 = 23,600/5 = 4,720'
    },
    {
      id: 'nr-q78',
      topic: 'Tables',
      difficulty: 'Hard',
      question: 'What is the percentage increase in total sales from January to April? (Jan=3500, Apr=5800)',
      options: ['55.71%', '60.71%', '65.71%', '70.71%'],
      correctAnswer: '65.71%',
      explanation: 'Increase=2300; (2300/3500)×100=65.71%'
    },
    {
      id: 'nr-q79',
      topic: 'Tables',
      difficulty: 'Medium',
      question: 'Frequency table: 0-9:5, 10-19:12, 20-29:18, 30-39:10, 40-49:5. How many students scored 20-29?',
      options: ['12', '15', '18', '20'],
      correctAnswer: '18',
      explanation: 'Directly from frequency column: 18 students'
    },
    {
      id: 'nr-q80',
      topic: 'Tables',
      difficulty: 'Hard',
      question: 'From the same frequency table, how many students scored below 30?',
      options: ['25', '30', '35', '40'],
      correctAnswer: '35',
      explanation: '5+12+18=35 students scored below 30'
    },

    // ============================================
    // SEQUENCES (Questions 81-100)
    // ============================================
    {
      id: 'nr-q81',
      topic: 'Sequences',
      difficulty: 'Easy',
      question: 'Find the next term: 2, 5, 8, 11, ?',
      options: ['12', '13', '14', '15'],
      correctAnswer: '14',
      explanation: 'Arithmetic sequence with d=3; 11+3=14'
    },
    {
      id: 'nr-q82',
      topic: 'Sequences',
      difficulty: 'Easy',
      question: 'Find the next term: 7, 11, 15, 19, ?',
      options: ['21', '22', '23', '24'],
      correctAnswer: '23',
      explanation: 'Arithmetic with d=4; 19+4=23'
    },
    {
      id: 'nr-q83',
      topic: 'Sequences',
      difficulty: 'Easy',
      question: 'Find the next term: 40, 35, 30, 25, ?',
      options: ['15', '20', '25', '30'],
      correctAnswer: '20',
      explanation: 'Arithmetic with d=-5; 25-5=20'
    },
    {
      id: 'nr-q84',
      topic: 'Sequences',
      difficulty: 'Medium',
      question: 'Find the 8th term: 5, 10, 15, 20, ...',
      options: ['35', '40', '45', '50'],
      correctAnswer: '40',
      explanation: 'a=5, d=5; T8=5+(8-1)×5=5+35=40'
    },
    {
      id: 'nr-q85',
      topic: 'Sequences',
      difficulty: 'Medium',
      question: 'Find the next term: 2, 6, 18, 54, ?',
      options: ['108', '162', '216', '243'],
      correctAnswer: '162',
      explanation: 'Geometric with r=3; 54×3=162'
    },
    {
      id: 'nr-q86',
      topic: 'Sequences',
      difficulty: 'Medium',
      question: 'Find the next term: 81, 27, 9, 3, ?',
      options: ['0', '1', '2', '3'],
      correctAnswer: '1',
      explanation: 'Geometric with r=1/3; 3×1/3=1'
    },
    {
      id: 'nr-q87',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the 6th term: 4, 8, 16, 32, ...',
      options: ['64', '96', '128', '256'],
      correctAnswer: '128',
      explanation: 'a=4, r=2; T6=4×2^5=4×32=128'
    },
    {
      id: 'nr-q88',
      topic: 'Sequences',
      difficulty: 'Medium',
      question: 'Find the next term: 1, 4, 9, 16, 25, ?',
      options: ['30', '35', '36', '40'],
      correctAnswer: '36',
      explanation: 'Square numbers: 1²,2²,3²,4²,5²; Next=6²=36'
    },
    {
      id: 'nr-q89',
      topic: 'Sequences',
      difficulty: 'Medium',
      question: 'Find the next term: 1, 8, 27, 64, 125, ?',
      options: ['196', '216', '256', '343'],
      correctAnswer: '216',
      explanation: 'Cube numbers: 1³,2³,3³,4³,5³; Next=6³=216'
    },
    {
      id: 'nr-q90',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the next term: 1, 1, 2, 3, 5, 8, 13, ?',
      options: ['18', '20', '21', '22'],
      correctAnswer: '21',
      explanation: 'Fibonacci: each term is sum of previous two; 8+13=21'
    },
    {
      id: 'nr-q91',
      topic: 'Sequences',
      difficulty: 'Medium',
      question: 'Find the next prime number: 2, 3, 5, 7, 11, 13, ?',
      options: ['15', '16', '17', '18'],
      correctAnswer: '17',
      explanation: 'Prime numbers; after 13 comes 17'
    },
    {
      id: 'nr-q92',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the next term: 1, 4, 2, 5, 3, 6, 4, ?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '7',
      explanation: 'Pattern: +3, -2, +3, -2, +3, -2; 6+3=9? Actually: 1,4,2,5,3,6,4; Next=6+1=7 (alternating pattern)'
    },
    {
      id: 'nr-q93',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the next term: 2, 5, 10, 17, 26, ?',
      options: ['35', '37', '39', '41'],
      correctAnswer: '37',
      explanation: 'Differences: +3,+5,+7,+9; Next diff=+11; 26+11=37'
    },
    {
      id: 'nr-q94',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the missing term: 4, 8, ?, 32, 64',
      options: ['12', '14', '16', '18'],
      correctAnswer: '16',
      explanation: 'Geometric with r=2; 8×2=16'
    },
    {
      id: 'nr-q95',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the missing term: 2, 5, ?, 11, 14',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
      explanation: 'Arithmetic with d=3; 5+3=8'
    },
    {
      id: 'nr-q96',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the sum of first 10 terms: 2, 4, 6, 8, ...',
      options: ['100', '110', '120', '130'],
      correctAnswer: '110',
      explanation: 'a=2, d=2, n=10; Sum=10/2×(2×2+9×2)=5×22=110'
    },
    {
      id: 'nr-q97',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the sum: 1 + 2 + 4 + 8 + ... + 512',
      options: ['1,023', '1,024', '1,025', '1,026'],
      correctAnswer: '1,023',
      explanation: 'a=1, r=2, n=10; Sum=1(2^10-1)/(2-1)=1023'
    },
    {
      id: 'nr-q98',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the next term: 1, 3, 6, 10, 15, 21, ?',
      options: ['26', '27', '28', '29'],
      correctAnswer: '28',
      explanation: 'Triangular numbers: +2,+3,+4,+5,+6; Next +7=28'
    },
    {
      id: 'nr-q99',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the next term: 1, 2, 6, 24, 120, ?',
      options: ['480', '600', '720', '840'],
      correctAnswer: '720',
      explanation: 'Factorials: 1!,2!,3!,4!,5!; Next=6!=720'
    },
    {
      id: 'nr-q100',
      topic: 'Sequences',
      difficulty: 'Hard',
      question: 'Find the next term: 1, 2, 4, 8, 16, 32, ?',
      options: ['48', '56', '64', '72'],
      correctAnswer: '64',
      explanation: 'Powers of 2: 2^0,2^1,2^2...; Next=2^6=64'
    }
  ]
};

export default numericalReasoningQuestions;