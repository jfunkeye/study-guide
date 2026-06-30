export const engineeringFundamentalsQuestions = {
  sectionId: 'engineering-fundamentals',
  sectionTitle: 'Engineering Fundamentals',
  totalQuestions: 100,
  questions: [
    // ============================================
    // ELECTRICAL ENGINEERING (Questions 1-40)
    // ============================================
    {
      id: 'ef-q1',
      topic: 'Electrical Engineering',
      difficulty: 'Easy',
      question: 'A 24V circuit has a resistance of 12Ω. What is the current?',
      options: ['1A', '2A', '3A', '4A'],
      correctAnswer: '2A',
      explanation: 'I = V/R = 24/12 = 2A (Ohm\'s Law)'
    },
    {
      id: 'ef-q2',
      topic: 'Electrical Engineering',
      difficulty: 'Easy',
      question: 'A circuit draws 5A from a 120V supply. What is the resistance?',
      options: ['20Ω', '22Ω', '24Ω', '26Ω'],
      correctAnswer: '24Ω',
      explanation: 'R = V/I = 120/5 = 24Ω'
    },
    {
      id: 'ef-q3',
      topic: 'Electrical Engineering',
      difficulty: 'Easy',
      question: 'A resistor of 47Ω carries a current of 0.25A. What is the voltage drop?',
      options: ['10.75V', '11.75V', '12.75V', '13.75V'],
      correctAnswer: '11.75V',
      explanation: 'V = I × R = 0.25 × 47 = 11.75V'
    },
    {
      id: 'ef-q4',
      topic: 'Electrical Engineering',
      difficulty: 'Easy',
      question: 'A 12V circuit draws 3A. What is the resistance?',
      options: ['2Ω', '3Ω', '4Ω', '5Ω'],
      correctAnswer: '4Ω',
      explanation: 'R = V/I = 12/3 = 4Ω'
    },
    {
      id: 'ef-q5',
      topic: 'Electrical Engineering',
      difficulty: 'Easy',
      question: 'A heater draws 8A from a 230V supply. What is the power?',
      options: ['1,640W', '1,740W', '1,840W', '1,940W'],
      correctAnswer: '1,840W',
      explanation: 'P = V × I = 230 × 8 = 1,840W = 1.84kW'
    },
    {
      id: 'ef-q6',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'A 2kW heater runs for 3 hours. How much energy does it consume?',
      options: ['4 kWh', '5 kWh', '6 kWh', '7 kWh'],
      correctAnswer: '6 kWh',
      explanation: 'Energy = Power × Time = 2kW × 3h = 6 kWh'
    },
    {
      id: 'ef-q7',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'If electricity costs ₦100/kWh, what is the cost for a 2kW heater running for 3 hours?',
      options: ['₦400', '₦500', '₦600', '₦700'],
      correctAnswer: '₦600',
      explanation: 'Energy = 6 kWh; Cost = 6 × ₦100 = ₦600'
    },
    {
      id: 'ef-q8',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'Three resistors 10Ω, 20Ω, and 30Ω are in series to a 60V supply. What is total resistance?',
      options: ['40Ω', '50Ω', '60Ω', '70Ω'],
      correctAnswer: '60Ω',
      explanation: 'R_Total = 10 + 20 + 30 = 60Ω'
    },
    {
      id: 'ef-q9',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'For the same circuit, what is the circuit current?',
      options: ['0.5A', '1A', '1.5A', '2A'],
      correctAnswer: '1A',
      explanation: 'I = V/R_Total = 60/60 = 1A'
    },
    {
      id: 'ef-q10',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'For the same circuit, what is voltage across the 10Ω resistor?',
      options: ['5V', '10V', '15V', '20V'],
      correctAnswer: '10V',
      explanation: 'V₁ = I × R₁ = 1 × 10 = 10V (Voltage Divider Rule)'
    },
    {
      id: 'ef-q11',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'Three resistors 10Ω, 20Ω, and 30Ω are in parallel across 60V. What is total resistance?',
      options: ['4.45Ω', '5.45Ω', '6.45Ω', '7.45Ω'],
      correctAnswer: '5.45Ω',
      explanation: '1/Rt = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60; Rt = 60/11 = 5.45Ω'
    },
    {
      id: 'ef-q12',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'For the same parallel circuit, what is total current?',
      options: ['9A', '10A', '11A', '12A'],
      correctAnswer: '11A',
      explanation: 'I_Total = V/Rt = 60/5.45 = 11A'
    },
    {
      id: 'ef-q13',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'Calculate total resistance of 4Ω and 6Ω resistors in parallel.',
      options: ['1.4Ω', '2.4Ω', '3.4Ω', '4.4Ω'],
      correctAnswer: '2.4Ω',
      explanation: 'Rt = (4 × 6)/(4 + 6) = 24/10 = 2.4Ω'
    },
    {
      id: 'ef-q14',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'Four 10Ω resistors in parallel. What is total resistance?',
      options: ['1.5Ω', '2Ω', '2.5Ω', '3Ω'],
      correctAnswer: '2.5Ω',
      explanation: 'Rt = R/n = 10/4 = 2.5Ω'
    },
    {
      id: 'ef-q15',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A 3-phase star-connected system has phase voltage 230V. What is line voltage?',
      options: ['350V', '380V', '400V', '415V'],
      correctAnswer: '400V',
      explanation: 'V_Line = √3 × V_Phase = 1.732 × 230 = 398.4V ≈ 400V'
    },
    {
      id: 'ef-q16',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'In a star-connected system, line voltage is 415V. What is phase voltage?',
      options: ['220V', '230V', '240V', '250V'],
      correctAnswer: '240V',
      explanation: 'V_Phase = V_Line / √3 = 415/1.732 = 239.6V ≈ 240V'
    },
    {
      id: 'ef-q17',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'In a delta-connected system, phase current is 50A. What is line current?',
      options: ['76.6A', '86.6A', '96.6A', '106.6A'],
      correctAnswer: '86.6A',
      explanation: 'I_Line = √3 × I_Phase = 1.732 × 50 = 86.6A'
    },
    {
      id: 'ef-q18',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A motor consumes 40kW true power and 50kVA apparent power. What is power factor?',
      options: ['0.6', '0.7', '0.8', '0.9'],
      correctAnswer: '0.8',
      explanation: 'PF = True Power / Apparent Power = 40/50 = 0.8'
    },
    {
      id: 'ef-q19',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A motor uses 30kW with PF=0.75. What is apparent power?',
      options: ['30kVA', '35kVA', '40kVA', '45kVA'],
      correctAnswer: '40kVA',
      explanation: 'Apparent Power = True Power / PF = 30/0.75 = 40kVA'
    },
    {
      id: 'ef-q20',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A transformer has 1000 primary turns and 100 secondary turns. Primary voltage is 11,000V. What is secondary voltage?',
      options: ['1,000V', '1,100V', '1,200V', '1,300V'],
      correctAnswer: '1,100V',
      explanation: 'V₂ = V₁ × (N₂/N₁) = 11,000 × (100/1000) = 1,100V'
    },
    {
      id: 'ef-q21',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A 10kVA transformer has primary voltage 11,000V. What is primary current?',
      options: ['0.71A', '0.81A', '0.91A', '1.01A'],
      correctAnswer: '0.91A',
      explanation: 'I₁ = VA/V₁ = 10,000/11,000 = 0.91A'
    },
    {
      id: 'ef-q22',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'Calculate synchronous speed of a 4-pole motor at 50Hz.',
      options: ['1,200 RPM', '1,500 RPM', '1,800 RPM', '2,000 RPM'],
      correctAnswer: '1,500 RPM',
      explanation: 'Ns = (120 × f)/P = (120 × 50)/4 = 1,500 RPM'
    },
    {
      id: 'ef-q23',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A motor has synchronous speed 1,000 RPM at 50Hz. How many poles does it have?',
      options: ['4 poles', '6 poles', '8 poles', '10 poles'],
      correctAnswer: '6 poles',
      explanation: 'P = (120 × f)/Ns = (120 × 50)/1,000 = 6 poles'
    },
    {
      id: 'ef-q24',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A 6-pole motor at 60Hz has what synchronous speed?',
      options: ['1,000 RPM', '1,100 RPM', '1,200 RPM', '1,300 RPM'],
      correctAnswer: '1,200 RPM',
      explanation: 'Ns = (120 × 60)/6 = 1,200 RPM'
    },
    {
      id: 'ef-q25',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A 4-pole, 50Hz motor runs at 1,440 RPM. Calculate slip.',
      options: ['2%', '3%', '4%', '5%'],
      correctAnswer: '4%',
      explanation: 'Ns = 1,500 RPM; Slip = (1,500-1,440)/1,500 × 100 = 4%'
    },
    {
      id: 'ef-q26',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'A 100W bulb is left on for 24 hours. Cost at ₦95/kWh?',
      options: ['₦200', '₦228', '₦250', '₦275'],
      correctAnswer: '₦228',
      explanation: 'Energy = 100W × 24h = 2,400Wh = 2.4kWh; Cost = 2.4 × 95 = ₦228'
    },
    {
      id: 'ef-q27',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'What is the primary purpose of a circuit breaker?',
      options: ['Measure current', 'Protect circuits from overcurrent', 'Switch circuits on/off', 'Store electricity'],
      correctAnswer: 'Protect circuits from overcurrent',
      explanation: 'Circuit breakers protect electrical circuits from overcurrent and short circuits'
    },
    {
      id: 'ef-q28',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'A 230V single-phase motor draws 10A. What is the power?',
      options: ['1.8kW', '2.0kW', '2.2kW', '2.3kW'],
      correctAnswer: '2.3kW',
      explanation: 'P = V × I = 230 × 10 = 2,300W = 2.3kW'
    },
    {
      id: 'ef-q29',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'A 2.5kW heater runs for 8 hours. Cost at ₦150/kWh?',
      options: ['₦2,500', '₦3,000', '₦3,500', '₦4,000'],
      correctAnswer: '₦3,000',
      explanation: 'Energy = 2.5 × 8 = 20 kWh; Cost = 20 × 150 = ₦3,000'
    },
    {
      id: 'ef-q30',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'Three resistors 4Ω, 6Ω, and 10Ω in series. Total resistance?',
      options: ['15Ω', '18Ω', '20Ω', '22Ω'],
      correctAnswer: '20Ω',
      explanation: 'Rt = 4 + 6 + 10 = 20Ω'
    },
    {
      id: 'ef-q31',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A 5kVA transformer has 230V primary. What is primary current?',
      options: ['19.74A', '20.74A', '21.74A', '22.74A'],
      correctAnswer: '21.74A',
      explanation: 'I₁ = 5,000/230 = 21.74A'
    },
    {
      id: 'ef-q32',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A 400V, 3-phase star system supplies 50A at PF=0.85. What is active power?',
      options: ['25.4kW', '27.4kW', '29.4kW', '31.4kW'],
      correctAnswer: '29.4kW',
      explanation: 'P = √3 × V × I × PF = 1.732 × 400 × 50 × 0.85 = 29,444W ≈ 29.4kW'
    },
    {
      id: 'ef-q33',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'Transformer has input 500W and output 475W. What is efficiency?',
      options: ['90%', '92%', '95%', '97%'],
      correctAnswer: '95%',
      explanation: 'Efficiency = (475/500) × 100 = 95%'
    },
    {
      id: 'ef-q34',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'What type of MCB should be used for a motor drawing 50A with 300A starting current?',
      options: ['Type B', 'Type C', 'Type D', 'Type A'],
      correctAnswer: 'Type D',
      explanation: 'Type D (10-20× In): 50 × 10 = 500A (can handle 300A starting)'
    },
    {
      id: 'ef-q35',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'What is the acceptable value of earth resistance?',
      options: ['< 1Ω', '< 5Ω', '< 10Ω', '< 20Ω'],
      correctAnswer: '< 1Ω',
      explanation: 'Less than 1Ω for ideal earthing, up to 5Ω for acceptable'
    },
    {
      id: 'ef-q36',
      topic: 'Electrical Engineering',
      difficulty: 'Easy',
      question: 'What does LOTO stand for?',
      options: ['Lock Out Tag Out', 'Load On Tap Out', 'Line Out Tag On', 'Lock On Tag Off'],
      correctAnswer: 'Lock Out Tag Out',
      explanation: 'LOTO is a safety procedure to isolate equipment before maintenance'
    },
    {
      id: 'ef-q37',
      topic: 'Electrical Engineering',
      difficulty: 'Medium',
      question: 'In a delta system, line voltage is 415V. What is phase voltage?',
      options: ['240V', '415V', '480V', '690V'],
      correctAnswer: '415V',
      explanation: 'In delta, V_Line = V_Phase = 415V'
    },
    {
      id: 'ef-q38',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'A 100kW load at PF=0.7 draws how much current at 400V?',
      options: ['186A', '196A', '206A', '216A'],
      correctAnswer: '206A',
      explanation: 'I = P / (√3 × V × PF) = 100,000 / (1.732 × 400 × 0.7) = 206.2A'
    },
    {
      id: 'ef-q39',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'If the load in Q38 is corrected to PF=0.95, what is the new current?',
      options: ['132A', '142A', '152A', '162A'],
      correctAnswer: '152A',
      explanation: 'I = 100,000 / (1.732 × 400 × 0.95) = 151.9A ≈ 152A'
    },
    {
      id: 'ef-q40',
      topic: 'Electrical Engineering',
      difficulty: 'Hard',
      question: 'What is the current savings from PF correction in Q38-Q39?',
      options: ['44A', '54A', '64A', '74A'],
      correctAnswer: '54A',
      explanation: '206.2A - 151.9A = 54.3A ≈ 54A'

    // ============================================
    // GENERAL ENGINEERING (Questions 41-70)
    // ============================================
    },
    {
      id: 'ef-q41',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'Calculate pressure at 10m depth in water (ρ=1000 kg/m³).',
      options: ['88.1 kPa', '98.1 kPa', '108.1 kPa', '118.1 kPa'],
      correctAnswer: '98.1 kPa',
      explanation: 'P = ρgh = 1000 × 9.81 × 10 = 98,100 Pa = 98.1 kPa'
    },
    {
      id: 'ef-q42',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'What is the density of water?',
      options: ['800 kg/m³', '900 kg/m³', '1,000 kg/m³', '1,100 kg/m³'],
      correctAnswer: '1,000 kg/m³',
      explanation: 'Water density is 1,000 kg/m³ at 4°C'
    },
    {
      id: 'ef-q43',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'A fluid has density 800 kg/m³. What is its specific gravity?',
      options: ['0.6', '0.7', '0.8', '0.9'],
      correctAnswer: '0.8',
      explanation: 'SG = ρ_fluid/ρ_water = 800/1,000 = 0.8'
    },
    {
      id: 'ef-q44',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'Convert 2.5 bar to kPa.',
      options: ['200 kPa', '225 kPa', '250 kPa', '275 kPa'],
      correctAnswer: '250 kPa',
      explanation: '1 bar = 100 kPa; 2.5 bar = 2.5 × 100 = 250 kPa'
    },
    {
      id: 'ef-q45',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'Convert 150 psi to kPa.',
      options: ['1,034 kPa', '1,134 kPa', '1,234 kPa', '1,334 kPa'],
      correctAnswer: '1,034 kPa',
      explanation: '150 × 6.895 = 1,034.25 kPa'
    },
    {
      id: 'ef-q46',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'A machine has input 5kW and output 4kW. What is efficiency?',
      options: ['70%', '75%', '80%', '85%'],
      correctAnswer: '80%',
      explanation: 'Efficiency = (4/5) × 100 = 80%'
    },
    {
      id: 'ef-q47',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'A motor is 85% efficient and produces 3.4kW. What is input power?',
      options: ['3.5kW', '3.8kW', '4kW', '4.2kW'],
      correctAnswer: '4kW',
      explanation: 'Input = Output / Efficiency = 3.4 / 0.85 = 4kW'
    },
    {
      id: 'ef-q48',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'A lever has effort arm 2m and load arm 0.5m. What is mechanical advantage?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '4',
      explanation: 'MA = Effort Arm / Load Arm = 2/0.5 = 4'
    },
    {
      id: 'ef-q49',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'A pulley system has 4 rope segments supporting the load. What is mechanical advantage?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '4',
      explanation: 'MA = Number of rope segments = 4'
    },
    {
      id: 'ef-q50',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'A gear system has 40 teeth on driving gear, 120 on driven gear. What is mechanical advantage?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      explanation: 'MA = 120/40 = 3'
    },
    {
      id: 'ef-q51',
      topic: 'General Engineering',
      difficulty: 'Hard',
      question: 'A pump delivers 0.1 m³/s water with 50m head at 80% efficiency. Calculate power required.',
      options: ['51.3kW', '61.3kW', '71.3kW', '81.3kW'],
      correctAnswer: '61.3kW',
      explanation: 'P = (Q × H × ρ × g)/(η × 1000) = (0.1 × 50 × 1000 × 9.81)/(0.8 × 1000) = 61.3kW'
    },
    {
      id: 'ef-q52',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What are the three modes of heat transfer?',
      options: ['Conduction, Convection, Radiation', 'Conduction, Convection, Induction', 'Radiation, Reflection, Refraction', 'Conduction, Radiation, Reflection'],
      correctAnswer: 'Conduction, Convection, Radiation',
      explanation: 'The three modes of heat transfer are conduction, convection, and radiation'
    },
    {
      id: 'ef-q53',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'A gas is heated with 1,000J and does 400J of work. What is change in internal energy?',
      options: ['400J', '500J', '600J', '700J'],
      correctAnswer: '600J',
      explanation: 'ΔU = Q - W = 1,000 - 400 = 600J'
    },
    {
      id: 'ef-q54',
      topic: 'General Engineering',
      difficulty: 'Hard',
      question: 'Calculate Carnot efficiency between 500°C and 100°C.',
      options: ['41.7%', '46.7%', '51.7%', '56.7%'],
      correctAnswer: '51.7%',
      explanation: 'T_hot = 773K, T_cold = 373K; η = 1 - 373/773 = 0.517 = 51.7%'
    },
    {
      id: 'ef-q55',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'What is viscosity?',
      options: ['Resistance to flow', 'Mass per volume', 'Force per area', 'Energy per mass'],
      correctAnswer: 'Resistance to flow',
      explanation: 'Viscosity is a fluid\'s resistance to flow'
    },
    {
      id: 'ef-q56',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'What is the difference between density and specific gravity?',
      options: ['Same thing', 'Density is absolute, SG is relative to water', 'SG is absolute, density is relative', 'Both are relative'],
      correctAnswer: 'Density is absolute, SG is relative to water',
      explanation: 'Density is absolute (kg/m³), SG is relative to water (dimensionless)'
    },
    {
      id: 'ef-q57',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What type of pump is best for high viscosity fluids?',
      options: ['Centrifugal pump', 'Positive displacement pump', 'Axial pump', 'Turbine pump'],
      correctAnswer: 'Positive displacement pump',
      explanation: 'Positive displacement pumps handle viscous fluids well'
    },
    {
      id: 'ef-q58',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What type of pump is best for high flow rates with low pressure?',
      options: ['Centrifugal pump', 'Positive displacement pump', 'Piston pump', 'Diaphragm pump'],
      correctAnswer: 'Centrifugal pump',
      explanation: 'Centrifugal pumps are best for high flow, low pressure applications'
    },
    {
      id: 'ef-q59',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What is the purpose of an intercooler in a compressor?',
      options: ['Increase pressure', 'Cool air between stages', 'Remove moisture', 'Lubricate moving parts'],
      correctAnswer: 'Cool air between stages',
      explanation: 'Intercooler cools air between stages, reducing compression work and preventing overheating'
    },
    {
      id: 'ef-q60',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What is the purpose of an aftercooler?',
      options: ['Cool air after final compression', 'Cool air between stages', 'Remove contaminants', 'Increase pressure'],
      correctAnswer: 'Cool air after final compression',
      explanation: 'Aftercooler cools air after final compression to remove moisture'
    },
    {
      id: 'ef-q61',
      topic: 'General Engineering',
      difficulty: 'Hard',
      question: 'A compressor takes air at 101kPa and discharges at 1,010kPa. What is pressure ratio?',
      options: ['5:1', '8:1', '10:1', '12:1'],
      correctAnswer: '10:1',
      explanation: 'Pressure Ratio = 1,010/101 = 10:1'
    },
    {
      id: 'ef-q62',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What is the first law of thermodynamics?',
      options: ['Energy cannot be created or destroyed', 'Entropy always increases', 'Heat flows from hot to cold', 'Pressure is force per area'],
      correctAnswer: 'Energy cannot be created or destroyed',
      explanation: 'The first law states that energy cannot be created or destroyed, only converted'
    },
    {
      id: 'ef-q63',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What is entropy?',
      options: ['Measure of order', 'Measure of disorder', 'Measure of temperature', 'Measure of pressure'],
      correctAnswer: 'Measure of disorder',
      explanation: 'Entropy is a measure of disorder in a system'
    },
    {
      id: 'ef-q64',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'What is the difference between ductility and toughness?',
      options: ['Same thing', 'Ductility is deformation, toughness is energy absorption', 'Toughness is deformation, ductility is energy', 'Both are strength properties'],
      correctAnswer: 'Ductility is deformation, toughness is energy absorption',
      explanation: 'Ductility is ability to deform without fracture; toughness is ability to absorb energy'
    },
    {
      id: 'ef-q65',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'Name two methods to prevent corrosion.',
      options: ['Coating and cathodic protection', 'Heating and cooling', 'Compression and expansion', 'Filtration and distillation'],
      correctAnswer: 'Coating and cathodic protection',
      explanation: 'Coating (paint, plating) and cathodic protection prevent corrosion'
    },
    {
      id: 'ef-q66',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'Convert 100°C to °F.',
      options: ['180°F', '200°F', '212°F', '220°F'],
      correctAnswer: '212°F',
      explanation: '°F = °C × 1.8 + 32 = 100 × 1.8 + 32 = 212°F'
    },
    {
      id: 'ef-q67',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'Convert 2.5 kW to hp.',
      options: ['2.35 hp', '3.15 hp', '3.35 hp', '4.35 hp'],
      correctAnswer: '3.35 hp',
      explanation: '2.5 × 1.341 = 3.35 hp'
    },
    {
      id: 'ef-q68',
      topic: 'General Engineering',
      difficulty: 'Easy',
      question: 'Convert 5 kWh to Joules.',
      options: ['12 MJ', '15 MJ', '18 MJ', '20 MJ'],
      correctAnswer: '18 MJ',
      explanation: '5 kWh = 5 × 1,000 × 3,600 = 18,000,000 J = 18 MJ'
    },
    {
      id: 'ef-q69',
      topic: 'General Engineering',
      difficulty: 'Medium',
      question: 'Convert 100 km/h to m/s.',
      options: ['22.78 m/s', '25.78 m/s', '27.78 m/s', '30.78 m/s'],
      correctAnswer: '27.78 m/s',
      explanation: '100 × 0.2778 = 27.78 m/s'
    },
    {
      id: 'ef-q70',
      topic: 'General Engineering',
      difficulty: 'Hard',
      question: 'Convert 50 m³/h to L/s.',
      options: ['11.89 L/s', '12.89 L/s', '13.89 L/s', '14.89 L/s'],
      correctAnswer: '13.89 L/s',
      explanation: '50 × 1000 / 3600 = 13.89 L/s'

    // ============================================
    // OIL & GAS ENGINEERING (Questions 71-100)
    // ============================================
    },
    {
      id: 'ef-q71',
      topic: 'Oil & Gas',
      difficulty: 'Easy',
      question: 'What are the three main sectors of the oil and gas industry?',
      options: ['Upstream, Midstream, Downstream', 'Exploration, Production, Refining', 'Drilling, Transport, Marketing', 'Onshore, Offshore, Subsea'],
      correctAnswer: 'Upstream, Midstream, Downstream',
      explanation: 'The three sectors are Upstream (Exploration & Production), Midstream (Transport & Storage), and Downstream (Refining & Marketing)'
    },
    {
      id: 'ef-q72',
      topic: 'Oil & Gas',
      difficulty: 'Easy',
      question: 'What does OOIP stand for?',
      options: ['Original Oil In Place', 'Overall Oil In Production', 'Original Oil In Pipeline', 'Overall Oil In Place'],
      correctAnswer: 'Original Oil In Place',
      explanation: 'OOIP is the total amount of oil initially in the reservoir'
    },
    {
      id: 'ef-q73',
      topic: 'Oil & Gas',
      difficulty: 'Easy',
      question: 'What is primary recovery?',
      options: ['Using natural reservoir energy', 'Water injection', 'Steam injection', 'CO₂ injection'],
      correctAnswer: 'Using natural reservoir energy',
      explanation: 'Primary recovery uses natural pressure (gas cap, water drive, solution gas)'
    },
    {
      id: 'ef-q74',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the typical recovery factor for primary recovery?',
      options: ['5-15%', '15-25%', '25-35%', '35-45%'],
      correctAnswer: '5-15%',
      explanation: 'Primary recovery typically recovers 5-15% of OOIP'
    },
    {
      id: 'ef-q75',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is secondary recovery?',
      options: ['Using natural pressure', 'Water or gas injection', 'Thermal or chemical methods', 'Natural flow'],
      correctAnswer: 'Water or gas injection',
      explanation: 'Secondary recovery uses water or gas injection to maintain pressure'
    },
    {
      id: 'ef-q76',
      topic: 'Oil & Gas',
      difficulty: 'Hard',
      question: 'An oil reservoir has 100 million barrels OOIP. Primary recovery is 10%. How many barrels are recovered?',
      options: ['5 million', '10 million', '15 million', '20 million'],
      correctAnswer: '10 million',
      explanation: 'Recovery = 100,000,000 × 0.10 = 10,000,000 barrels'
    },
    {
      id: 'ef-q77',
      topic: 'Oil & Gas',
      difficulty: 'Hard',
      question: 'If primary recovery is 10%, secondary adds 15%, and EOR adds 10%, what is total recovery factor?',
      options: ['25%', '30%', '35%', '40%'],
      correctAnswer: '35%',
      explanation: 'Total = 10% + 15% + 10% = 35%'
    },
    {
      id: 'ef-q78',
      topic: 'Oil & Gas',
      difficulty: 'Hard',
      question: 'A 500 million barrel reservoir has primary 12%, secondary 18%, EOR 10%. How many barrels recoverable?',
      options: ['150 million', '175 million', '200 million', '225 million'],
      correctAnswer: '200 million',
      explanation: 'Total RF = 40%; Recoverable = 500 × 0.40 = 200 million barrels'
    },
    {
      id: 'ef-q79',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What are the types of EOR?',
      options: ['Thermal, Gas, Chemical', 'Primary, Secondary, Tertiary', 'Water, Gas, Steam', 'Onshore, Offshore, Subsea'],
      correctAnswer: 'Thermal, Gas, Chemical',
      explanation: 'EOR methods include Thermal (steam), Gas (CO₂, N₂), and Chemical (polymer, surfactant)'
    },
    {
      id: 'ef-q80',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the purpose of a Christmas tree?',
      options: ['Decorate the well', 'Control flow from the well', 'Drill the well', 'Measure temperature'],
      correctAnswer: 'Control flow from the well',
      explanation: 'The Christmas tree is an assembly of valves that controls flow from the well'
    },
    {
      id: 'ef-q81',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the purpose of the choke on a Christmas tree?',
      options: ['Measure pressure', 'Regulate flow rate', 'Close the well', 'Inject chemicals'],
      correctAnswer: 'Regulate flow rate',
      explanation: 'The choke regulates and restricts flow from the well'
    },
    {
      id: 'ef-q82',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What valve would you close first in an emergency?',
      options: ['Wing valve', 'Master valve', 'Swab valve', 'Choke'],
      correctAnswer: 'Master valve',
      explanation: 'The master valve is the main shutoff to isolate the well in an emergency'
    },
    {
      id: 'ef-q83',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What does BOP stand for?',
      options: ['Blowout Preventer', 'Backup Operation Plan', 'Bottom Hole Pressure', 'Basic Operating Procedure'],
      correctAnswer: 'Blowout Preventer',
      explanation: 'BOP is a safety device that prevents blowouts by sealing the well'
    },
    {
      id: 'ef-q84',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the difference between a two-phase and three-phase separator?',
      options: ['Two-phase separates gas/liquid; three-phase separates oil/gas/water', 'Two-phase is smaller; three-phase is larger', 'Two-phase is for gas; three-phase is for oil', 'No difference'],
      correctAnswer: 'Two-phase separates gas/liquid; three-phase separates oil/gas/water',
      explanation: 'Two-phase separates gas from liquids; three-phase separates oil, gas, and water'
    },
    {
      id: 'ef-q85',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the purpose of a PIG in pipelines?',
      options: ['To clean or inspect the pipeline', 'To increase flow rate', 'To reduce pressure', 'To measure temperature'],
      correctAnswer: 'To clean or inspect the pipeline',
      explanation: 'PIGs (Pipeline Inspection Gauges) clean, inspect, or separate products in pipelines'
    },
    {
      id: 'ef-q86',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What are the different types of PIGs?',
      options: ['Cleaning, Inspection, Batching', 'Steel, Rubber, Plastic', 'Large, Medium, Small', 'Onshore, Offshore, Subsea'],
      correctAnswer: 'Cleaning, Inspection, Batching',
      explanation: 'Types include Cleaning PIGs (debris removal), Inspection PIGs (damage detection), and Batching PIGs (product separation)'
    },
    {
      id: 'ef-q87',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is cathodic protection?',
      options: ['Prevents pipeline corrosion', 'Increases flow rate', 'Measures pressure', 'Controls temperature'],
      correctAnswer: 'Prevents pipeline corrosion',
      explanation: 'Cathodic protection prevents pipeline corrosion by making it the cathode in an electrochemical cell'
    },
    {
      id: 'ef-q88',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What are the methods of cathodic protection?',
      options: ['Sacrificial anode and impressed current', 'Coating and painting', 'Heating and cooling', 'Filtration and separation'],
      correctAnswer: 'Sacrificial anode and impressed current',
      explanation: 'Methods include sacrificial anodes (galvanic) and impressed current (external power)'
    },
    {
      id: 'ef-q89',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is a Permit to Work (PTW)?',
      options: ['A form to authorize high-risk work', 'A job application', 'A safety inspection report', 'A training certificate'],
      correctAnswer: 'A form to authorize high-risk work',
      explanation: 'PTW is a formal system to authorize high-risk work, identify hazards, and implement controls'
    },
    {
      id: 'ef-q90',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'When is a hot work permit required?',
      options: ['For welding and grinding', 'For routine maintenance', 'For cleaning', 'For inspection'],
      correctAnswer: 'For welding and grinding',
      explanation: 'Hot work permits are required for any work that could create a source of ignition (welding, grinding, cutting)'
    },
    {
      id: 'ef-q91',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What does HSSE stand for?',
      options: ['Health, Safety, Security, Environment', 'Health, Safety, Standards, Equipment', 'Hazards, Safety, Systems, Environment', 'Health, Systems, Safety, Equipment'],
      correctAnswer: 'Health, Safety, Security, Environment',
      explanation: 'HSSE stands for Health, Safety, Security, and Environment'
    },
    {
      id: 'ef-q92',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What are the main environmental risks in oil and gas operations?',
      options: ['Oil spills, gas flaring, produced water', 'Noise, vibration, heat', 'Equipment failure, power loss, communication', 'All of the above'],
      correctAnswer: 'Oil spills, gas flaring, produced water',
      explanation: 'Main environmental risks include oil spills, gas flaring, produced water, drilling waste, and air emissions'
    },
    {
      id: 'ef-q93',
      topic: 'Oil & Gas',
      difficulty: 'Hard',
      question: 'A pressure transmitter has range 0-100 bar and output 4-20mA. What is output at 50 bar?',
      options: ['8mA', '10mA', '12mA', '14mA'],
      correctAnswer: '12mA',
      explanation: '50/100 = 0.5 = 50%; Output = 4 + (0.5 × 16) = 12mA'
    },
    {
      id: 'ef-q94',
      topic: 'Oil & Gas',
      difficulty: 'Hard',
      question: 'A pressure transmitter has range 0-50 bar and output 4-20mA. What is output at 25 bar?',
      options: ['10mA', '11mA', '12mA', '13mA'],
      correctAnswer: '12mA',
      explanation: '25/50 = 0.5 = 50%; Output = 4 + (0.5 × 16) = 12mA'
    },
    {
      id: 'ef-q95',
      topic: 'Oil & Gas',
      difficulty: 'Hard',
      question: 'A flow transmitter has range 0-100 m³/h and output 4-20mA. What is flow at 16mA?',
      options: ['50 m³/h', '65 m³/h', '75 m³/h', '85 m³/h'],
      correctAnswer: '75 m³/h',
      explanation: '(16-4)/16 = 0.75 = 75%; Flow = 75 m³/h'
    },
    {
      id: 'ef-q96',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the difference between a thermocouple and an RTD?',
      options: ['Thermocouple uses voltage; RTD uses resistance', 'Thermocouple is more accurate; RTD is cheaper', 'Same principle', 'No difference'],
      correctAnswer: 'Thermocouple uses voltage; RTD uses resistance',
      explanation: 'Thermocouple generates voltage from temperature difference; RTD changes resistance with temperature'
    },
    {
      id: 'ef-q97',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the purpose of a thermowell?',
      options: ['Protects temperature sensor', 'Measures pressure', 'Controls flow', 'Filters fluid'],
      correctAnswer: 'Protects temperature sensor',
      explanation: 'A thermowell protects the temperature sensor and allows removal under pressure'
    },
    {
      id: 'ef-q98',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What is the difference between a flowline and a trunk line?',
      options: ['Flowline is short; trunk line is long-distance', 'Flowline is long; trunk line is short', 'Same thing', 'Flowline is offshore; trunk line is onshore'],
      correctAnswer: 'Flowline is short; trunk line is long-distance',
      explanation: 'Flowlines are short (well to facility); trunk lines are long-distance transmission lines'
    },
    {
      id: 'ef-q99',
      topic: 'Oil & Gas',
      difficulty: 'Hard',
      question: 'What is the resistance of a Pt100 RTD at 100°C?',
      options: ['118.5Ω', '128.5Ω', '138.5Ω', '148.5Ω'],
      correctAnswer: '138.5Ω',
      explanation: 'At 0°C, R=100Ω; At 100°C, R = 100 × (1 + 0.00385 × 100) = 138.5Ω'
    },
    {
      id: 'ef-q100',
      topic: 'Oil & Gas',
      difficulty: 'Medium',
      question: 'What type of rig is used for deep water operations?',
      options: ['Jack-up rig', 'Semi-submersible', 'Fixed platform', 'Land rig'],
      correctAnswer: 'Semi-submersible',
      explanation: 'Semi-submersible rigs are used for deep water operations (150-3,000m)'
    }
  ]
};

export default engineeringFundamentalsQuestions;