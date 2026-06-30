export const situationalJudgementQuestions = {
  sectionId: 'situational-judgement',
  sectionTitle: 'Situational Judgement Test (SJT)',
  totalQuestions: 100,
  questions: [
    // ============================================
    // SAFETY PROCEDURES (Questions 1-25)
    // ============================================
    {
      id: 'sj-q1',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'You are under pressure to restart a pump, but the pre-start checklist is incomplete. What do you do?',
      options: [
        'Restart the pump to meet the deadline',
        'Refuse to restart until the checklist is completed',
        'Start the pump and complete the checklist later',
        'Ask a colleague to start the pump'
      ],
      correctAnswer: 'Refuse to restart until the checklist is completed',
      explanation: 'Safety procedures must never be compromised for production targets. Complete the checklist first.'
    },
    {
      id: 'sj-q2',
      topic: 'Safety Procedures',
      difficulty: 'Easy',
      question: 'A colleague is operating equipment without proper PPE. What do you do?',
      options: [
        'Ignore it',
        'Politely remind them about the safety requirement',
        'Report them immediately to management',
        'Take a photo as evidence'
      ],
      correctAnswer: 'Politely remind them about the safety requirement',
      explanation: 'The most professional approach is to politely remind them about safety requirements.'
    },
    {
      id: 'sj-q3',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'You notice a ladder is damaged. What do you do?',
      options: [
        'Use it carefully',
        'Tag it "Out of Service" and report it',
        'Ignore it and let someone else deal with it',
        'Try to repair it yourself'
      ],
      correctAnswer: 'Tag it "Out of Service" and report it',
      explanation: 'Damaged equipment must be tagged out and reported immediately to prevent injury.'
    },
    {
      id: 'sj-q4',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'Production is behind and you are asked to operate a machine without the required guard. What do you do?',
      options: [
        'Operate the machine without the guard',
        'Refuse and explain the safety risk',
        'Put the guard on later',
        'Work faster to catch up'
      ],
      correctAnswer: 'Refuse and explain the safety risk',
      explanation: 'Machine guards are essential safety devices. Never operate equipment without proper guards.'
    },
    {
      id: 'sj-q5',
      topic: 'Safety Procedures',
      difficulty: 'Easy',
      question: 'A fire extinguisher is located near a heat source. What do you do?',
      options: [
        'Ignore it',
        'Report it to the safety department',
        'Move it yourself',
        'Use it as a door stop'
      ],
      correctAnswer: 'Report it to the safety department',
      explanation: 'Fire extinguishers must be accessible and in proper condition. Report any concerns to safety.'
    },
    {
      id: 'sj-q6',
      topic: 'Safety Procedures',
      difficulty: 'Easy',
      question: 'You see water on the floor in a walkway. What do you do?',
      options: [
        'Walk around it',
        'Clean it up or place warning signs',
        'Wait for someone else to clean it',
        'Ignore it'
      ],
      correctAnswer: 'Clean it up or place warning signs',
      explanation: 'Wet floors are slip hazards. Clean up or place warning signs immediately.'
    },
    {
      id: 'sj-q7',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'A colleague is working at height without a safety harness. What do you do?',
      options: [
        'Ignore it',
        'Stop them and remind them to use a harness',
        'Report them immediately',
        'Take a photo as evidence'
      ],
      correctAnswer: 'Stop them and remind them to use a harness',
      explanation: 'Working at height without proper fall protection is extremely dangerous. Stop them immediately.'
    },
    {
      id: 'sj-q8',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'You are asked to work on a live electrical circuit. You are not trained for live work. What do you do?',
      options: [
        'Do the work carefully',
        'Refuse and request a qualified electrician',
        'Ask a colleague to help',
        'Work on it with gloves on'
      ],
      correctAnswer: 'Refuse and request a qualified electrician',
      explanation: 'Live electrical work requires specific training and authorization. Never work beyond your competence.'
    },
    {
      id: 'sj-q9',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'A safety guard on a conveyor is damaged but still functional. What do you do?',
      options: [
        'Continue using it',
        'Report it and tag it for repair',
        'Fix it yourself',
        'Remove it for easier access'
      ],
      correctAnswer: 'Report it and tag it for repair',
      explanation: 'Damaged safety equipment must be reported and tagged for repair, even if still functional.'
    },
    {
      id: 'sj-q10',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'You smell gas in a processing area. What do you do?',
      options: [
        'Ignore it',
        'Evacuate the area and report immediately',
        'Try to find the source yourself',
        'Wait and see if it goes away'
      ],
      correctAnswer: 'Evacuate the area and report immediately',
      explanation: 'Gas leaks are extremely dangerous. Evacuate immediately and report to authorities.'
    },
    {
      id: 'sj-q11',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'A colleague is using a cell phone while operating a forklift. What do you do?',
      options: [
        'Ignore it',
        'Stop them and report the unsafe act',
        'Let them finish',
        'Use your phone too'
      ],
      correctAnswer: 'Stop them and report the unsafe act',
      explanation: 'Distracted operation of heavy equipment is extremely dangerous. Stop them immediately.'
    },
    {
      id: 'sj-q12',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'You are asked to sign off on a safety checklist for a task you haven\'t inspected. What do you do?',
      options: [
        'Sign it anyway',
        'Refuse and explain you must inspect first',
        'Sign it but inspect later',
        'Ask a colleague to sign it'
      ],
      correctAnswer: 'Refuse and explain you must inspect first',
      explanation: 'Never sign for work you haven\'t personally verified. This is a serious integrity and safety issue.'
    },
    {
      id: 'sj-q13',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'A contractor is working without a valid permit to work. What do you do?',
      options: [
        'Ignore it',
        'Stop the work and report to supervisor',
        'Let them continue as long as they are careful',
        'Give them permission'
      ],
      correctAnswer: 'Stop the work and report to supervisor',
      explanation: 'Work permits are essential for safety. Stop unpermitted work immediately.'
    },
    {
      id: 'sj-q14',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'You see a serious safety hazard that could result in injury, but your supervisor is unavailable. What do you do?',
      options: [
        'Wait for your supervisor',
        'Use stop work authority and address the hazard',
        'Ignore it',
        'Ask a colleague what to do'
      ],
      correctAnswer: 'Use stop work authority and address the hazard',
      explanation: 'Everyone has stop work authority to address serious safety hazards. Act immediately.'
    },
    {
      id: 'sj-q15',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'A colleague is injured but insists they are fine and continues working. What do you do?',
      options: [
        'Let them continue',
        'Encourage medical attention and report the incident',
        'Ignore it',
        'Tell them to work harder'
      ],
      correctAnswer: 'Encourage medical attention and report the incident',
      explanation: 'Any injury should be evaluated by medical professionals. Report all injuries.'
    },
    {
      id: 'sj-q16',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'A safety system has been bypassed to "improve efficiency." What do you do?',
      options: [
        'Ignore it',
        'Report immediately and do not operate the equipment',
        'Continue using the equipment',
        'Bypass it yourself'
      ],
      correctAnswer: 'Report immediately and do not operate the equipment',
      explanation: 'Safety systems must never be bypassed. Report and do not operate until fixed.'
    },
    {
      id: 'sj-q17',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'A worker is performing a task with expired safety certification. What do you do?',
      options: [
        'Ignore it',
        'Stop the work and report the expired certification',
        'Let them continue because they are experienced',
        'Get them to work faster'
      ],
      correctAnswer: 'Stop the work and report the expired certification',
      explanation: 'Valid certification is required for safety. Stop work until certification is renewed.'
    },
    {
      id: 'sj-q18',
      topic: 'Safety Procedures',
      difficulty: 'Easy',
      question: 'The fire alarm sounds. What is the first thing you do?',
      options: [
        'Finish your task',
        'Evacuate immediately using designated exits',
        'Look for the fire',
        'Call your supervisor'
      ],
      correctAnswer: 'Evacuate immediately using designated exits',
      explanation: 'Always evacuate immediately when the fire alarm sounds. Assume it is real.'
    },
    {
      id: 'sj-q19',
      topic: 'Safety Procedures',
      difficulty: 'Easy',
      question: 'You discover a small chemical spill. What do you do?',
      options: [
        'Ignore it',
        'Alert others, contain the spill, and report it',
        'Clean it with a rag',
        'Add water to dilute it'
      ],
      correctAnswer: 'Alert others, contain the spill, and report it',
      explanation: 'Chemical spills require proper handling. Alert others, contain, and report.'
    },
    {
      id: 'sj-q20',
      topic: 'Safety Procedures',
      difficulty: 'Easy',
      question: 'A colleague sustains a minor cut. What do you do?',
      options: [
        'Ignore it',
        'Administer first aid and report the incident',
        'Tell them to handle it themselves',
        'Wait for a supervisor'
      ],
      correctAnswer: 'Administer first aid and report the incident',
      explanation: 'Provide first aid and report all injuries, even minor ones.'
    },
    {
      id: 'sj-q21',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'You see a near miss (almost an accident) but no one was hurt. What do you do?',
      options: [
        'Ignore it',
        'Report the near miss immediately',
        'Wait to see if it happens again',
        'Forget about it'
      ],
      correctAnswer: 'Report the near miss immediately',
      explanation: 'Near misses are warnings. Reporting helps prevent future incidents.'
    },
    {
      id: 'sj-q22',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'You are asked to work at height using a ladder that is too short. What do you do?',
      options: [
        'Use it carefully',
        'Refuse and find a proper ladder',
        'Stand on the top rung',
        'Ask a colleague to hold it'
      ],
      correctAnswer: 'Refuse and find a proper ladder',
      explanation: 'Using an improperly sized ladder is dangerous. Use the right equipment for the job.'
    },
    {
      id: 'sj-q23',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'A colleague has not performed the required pre-start inspection on equipment. What do you do?',
      options: [
        'Ignore it',
        'Remind them of the requirement and offer to help',
        'Do the inspection for them',
        'Report them immediately'
      ],
      correctAnswer: 'Remind them of the requirement and offer to help',
      explanation: 'Pre-start inspections are essential. Remind them professionally and offer support.'
    },
    {
      id: 'sj-q24',
      topic: 'Safety Procedures',
      difficulty: 'Medium',
      question: 'You see a colleague climbing a ladder while carrying heavy tools. What do you do?',
      options: [
        'Ignore it',
        'Stop them and remind them to use a tool belt or hoist',
        'Help them carry the tools',
        'Take a photo'
      ],
      correctAnswer: 'Stop them and remind them to use a tool belt or hoist',
      explanation: 'Carrying tools while climbing is dangerous. Use proper tool belts or hoists.'
    },
    {
      id: 'sj-q25',
      topic: 'Safety Procedures',
      difficulty: 'Hard',
      question: 'You need to open an electrical panel but are not a qualified electrician. What do you do?',
      options: [
        'Open it carefully',
        'Call a qualified electrician',
        'Ask a colleague to open it',
        'Try to work around it'
      ],
      correctAnswer: 'Call a qualified electrician',
      explanation: 'Electrical work requires proper qualification. Never work beyond your competence.'
    },

    // ============================================
    // TEAMWORK (Questions 26-50)
    // ============================================
    {
      id: 'sj-q26',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A colleague consistently fails to complete tasks on time. What is your best initial action?',
      options: [
        'Report them to the supervisor',
        'Privately and respectfully discuss the issue',
        'Ignore it and do their work',
        'Publicly criticize them'
      ],
      correctAnswer: 'Privately and respectfully discuss the issue',
      explanation: 'Private, respectful communication is the most professional first step.'
    },
    {
      id: 'sj-q27',
      topic: 'Teamwork',
      difficulty: 'Easy',
      question: 'A new employee is struggling with equipment. What do you do?',
      options: [
        'Ignore them',
        'Offer training and support',
        'Tell them to figure it out themselves',
        'Complain to the supervisor'
      ],
      correctAnswer: 'Offer training and support',
      explanation: 'Supporting new employees with training is the professional thing to do.'
    },
    {
      id: 'sj-q28',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'Your team has a conflict over different approaches. What do you do?',
      options: [
        'Take sides',
        'Facilitate a constructive discussion',
        'Ignore the conflict',
        'Ask management to resolve it immediately'
      ],
      correctAnswer: 'Facilitate a constructive discussion',
      explanation: 'Facilitating discussion helps resolve conflicts constructively.'
    },
    {
      id: 'sj-q29',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'A team member is consistently negative and affecting morale. What do you do?',
      options: [
        'Ignore it',
        'Address the behavior privately and constructively',
        'Publicly confront them',
        'Report them immediately'
      ],
      correctAnswer: 'Address the behavior privately and constructively',
      explanation: 'Address negative behavior privately and constructively to avoid embarrassment.'
    },
    {
      id: 'sj-q30',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A team member has good ideas but is too shy to share them. What do you do?',
      options: [
        'Ignore them',
        'Ask for their opinion directly',
        'Share their ideas for them',
        'Let them speak when ready'
      ],
      correctAnswer: 'Ask for their opinion directly',
      explanation: 'Encourage participation by directly asking for their input.'
    },
    {
      id: 'sj-q31',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'You disagree with your supervisor\'s approach. What do you do?',
      options: [
        'Ignore it and follow orders',
        'Privately discuss your concerns',
        'Publicly challenge them',
        'Refuse to do the work'
      ],
      correctAnswer: 'Privately discuss your concerns',
      explanation: 'Respectful private discussion is the professional way to raise concerns.'
    },
    {
      id: 'sj-q32',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A team member appears stressed and overwhelmed. What do you do?',
      options: [
        'Ignore it',
        'Check in privately and offer support',
        'Tell them to work harder',
        'Report them to the supervisor'
      ],
      correctAnswer: 'Check in privately and offer support',
      explanation: 'Showing empathy and offering support helps team members in distress.'
    },
    {
      id: 'sj-q33',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'Your team has to make a decision but there is no consensus. What do you do?',
      options: [
        'Let the majority decide',
        'Seek a compromise or escalate',
        'Refuse to make a decision',
        'Make the decision yourself'
      ],
      correctAnswer: 'Seek a compromise or escalate',
      explanation: 'Try to find a compromise. If impossible, escalate to the appropriate authority.'
    },
    {
      id: 'sj-q34',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'A team member is underperforming and it\'s affecting the team. What do you do?',
      options: [
        'Ignore it',
        'Provide constructive feedback privately',
        'Publicly criticize them',
        'Complain to others'
      ],
      correctAnswer: 'Provide constructive feedback privately',
      explanation: 'Private constructive feedback is the professional way to address performance issues.'
    },
    {
      id: 'sj-q35',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'Your team is being asked to do more work than originally planned with the same deadline. What do you do?',
      options: [
        'Just work harder',
        'Communicate with stakeholders and negotiate',
        'Ignore the new requests',
        'Stop all work'
      ],
      correctAnswer: 'Communicate with stakeholders and negotiate',
      explanation: 'Communicate constraints and negotiate priorities or timeline.'
    },
    {
      id: 'sj-q36',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A colleague is taking credit for your work. What do you do?',
      options: [
        'Ignore it',
        'Address it professionally and assert your contribution',
        'Take credit for their work',
        'Complain to others'
      ],
      correctAnswer: 'Address it professionally and assert your contribution',
      explanation: 'Professional assertiveness is the appropriate way to address credit issues.'
    },
    {
      id: 'sj-q37',
      topic: 'Teamwork',
      difficulty: 'Easy',
      question: 'A new team member seems lost. What do you do?',
      options: [
        'Ignore them',
        'Offer help and guidance',
        'Let them figure it out',
        'Watch them struggle'
      ],
      correctAnswer: 'Offer help and guidance',
      explanation: 'Helping new team members is part of being a supportive colleague.'
    },
    {
      id: 'sj-q38',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A team member is being disrespectful to others. What do you do?',
      options: [
        'Ignore it',
        'Address the behavior directly and respectfully',
        'Be disrespectful back',
        'Report them immediately'
      ],
      correctAnswer: 'Address the behavior directly and respectfully',
      explanation: 'Address disrespectful behavior directly but professionally.'
    },
    {
      id: 'sj-q39',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'Your team is facing a deadline and morale is low. What do you do?',
      options: [
        'Push harder',
        'Boost morale and ensure tasks are clear',
        'Give up',
        'Blame the team'
      ],
      correctAnswer: 'Boost morale and ensure tasks are clear',
      explanation: 'Good leadership involves maintaining morale and providing clarity during pressure.'
    },
    {
      id: 'sj-q40',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'Two team members are not getting along and it\'s affecting work. What do you do?',
      options: [
        'Ignore it',
        'Facilitate communication between them',
        'Take sides',
        'Separate them'
      ],
      correctAnswer: 'Facilitate communication between them',
      explanation: 'Facilitating communication helps resolve interpersonal conflicts.'
    },
    {
      id: 'sj-q41',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'A team member is overworking and burning out. What do you do?',
      options: [
        'Ignore it',
        'Check in and redistribute work',
        'Tell them to work harder',
        'Let them burn out'
      ],
      correctAnswer: 'Check in and redistribute work',
      explanation: 'Supporting overworked colleagues prevents burnout and maintains productivity.'
    },
    {
      id: 'sj-q42',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'The team is divided on a decision. What do you do?',
      options: [
        'Forced decision by leader',
        'Seek compromise or escalate',
        'Split the team',
        'Make the decision yourself'
      ],
      correctAnswer: 'Seek compromise or escalate',
      explanation: 'Try to find common ground. If impossible, seek higher guidance.'
    },
    {
      id: 'sj-q43',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'A conflict is escalating and affecting team cohesion. What do you do?',
      options: [
        'Ignore it',
        'Mediate and find a solution',
        'Take sides',
        'Let it resolve itself'
      ],
      correctAnswer: 'Mediate and find a solution',
      explanation: 'Intervene to mediate and resolve escalating conflicts before they cause lasting damage.'
    },
    {
      id: 'sj-q44',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'Your team\'s project is at risk due to unforeseen challenges. What do you do?',
      options: [
        'Give up',
        'Communicate and adapt',
        'Blame others',
        'Hide the problems'
      ],
      correctAnswer: 'Communicate and adapt',
      explanation: 'Transparency and adaptability are key when facing challenges.'
    },
    {
      id: 'sj-q45',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A team member has an idea you know won\'t work. What do you do?',
      options: [
        'Dismiss it immediately',
        'Provide constructive feedback respectfully',
        'Ignore it',
        'Accept it to avoid conflict'
      ],
      correctAnswer: 'Provide constructive feedback respectfully',
      explanation: 'Provide respectful feedback on why the idea won\'t work and offer alternatives.'
    },
    {
      id: 'sj-q46',
      topic: 'Teamwork',
      difficulty: 'Easy',
      question: 'A colleague is struggling with a task. What do you do?',
      options: [
        'Ignore them',
        'Offer to help',
        'Tell them to work harder',
        'Let them fail'
      ],
      correctAnswer: 'Offer to help',
      explanation: 'Offering help is a supportive team behavior.'
    },
    {
      id: 'sj-q47',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A colleague is absent and their work is piling up. What do you do?',
      options: [
        'Ignore it',
        'Help where you can and communicate with the team',
        'Complain about it',
        'Let it pile up'
      ],
      correctAnswer: 'Help where you can and communicate with the team',
      explanation: 'Supporting absent colleagues is part of being a team player.'
    },
    {
      id: 'sj-q48',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'A colleague is spreading rumors about others. What do you do?',
      options: [
        'Spread rumors too',
        'Address it professionally and report if necessary',
        'Ignore it',
        'Laugh it off'
      ],
      correctAnswer: 'Address it professionally and report if necessary',
      explanation: 'Rumor-mongering is harmful. Address it professionally and escalate if needed.'
    },
    {
      id: 'sj-q49',
      topic: 'Teamwork',
      difficulty: 'Medium',
      question: 'A colleague makes a mistake that affects the team. What do you do?',
      options: [
        'Blame them',
        'Focus on solving the problem and learn from the mistake',
        'Report them immediately',
        'Ignore it'
      ],
      correctAnswer: 'Focus on solving the problem and learn from the mistake',
      explanation: 'Focus on solutions and learning, not blame. Mistakes are opportunities for improvement.'
    },
    {
      id: 'sj-q50',
      topic: 'Teamwork',
      difficulty: 'Hard',
      question: 'A team member is not contributing equally. What do you do?',
      options: [
        'Ignore it',
        'Address it privately and constructively',
        'Do their work for them',
        'Complain to others'
      ],
      correctAnswer: 'Address it privately and constructively',
      explanation: 'Private, constructive feedback is the professional way to address unequal contribution.'
    },

    // ============================================
    // CONFIDENTIALITY (Questions 51-75)
    // ============================================
    {
      id: 'sj-q51',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'A contractor asks for specifications of unreleased equipment. What do you do?',
      options: [
        'Provide the specifications',
        'Politely decline and direct them to the appropriate department',
        'Ask them to sign a confidentiality agreement',
        'Provide limited information'
      ],
      correctAnswer: 'Politely decline and direct them to the appropriate department',
      explanation: 'Confidential information should only be released through proper channels.'
    },
    {
      id: 'sj-q52',
      topic: 'Confidentiality',
      difficulty: 'Easy',
      question: 'You find classified documents in a shared printer tray. What do you do?',
      options: [
        'Leave them there',
        'Secure them and report to the appropriate person',
        'Read them out of curiosity',
        'Dispose of them'
      ],
      correctAnswer: 'Secure them and report to the appropriate person',
      explanation: 'Classified documents should be secured and reported immediately.'
    },
    {
      id: 'sj-q53',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'A former employee asks for current client information. What do you do?',
      options: [
        'Provide the information',
        'Politely decline and cite confidentiality policies',
        'Give limited information',
        'Ask them why they need it'
      ],
      correctAnswer: 'Politely decline and cite confidentiality policies',
      explanation: 'Client information is confidential and must be protected.'
    },
    {
      id: 'sj-q54',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'You receive an email containing sensitive data meant for someone else. What do you do?',
      options: [
        'Forward it to the correct person',
        'Inform the sender and do not share',
        'Read it and delete it',
        'Share it with your team'
      ],
      correctAnswer: 'Inform the sender and do not share',
      explanation: 'Inform the sender of the mistake and do not share the sensitive data.'
    },
    {
      id: 'sj-q55',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'A colleague starts discussing a confidential project in a public area. What do you do?',
      options: [
        'Join the discussion',
        'Politely remind them about confidentiality and suggest moving',
        'Ignore it',
        'Report them immediately'
      ],
      correctAnswer: 'Politely remind them about confidentiality and suggest moving',
      explanation: 'Confidential matters should be discussed in private, secure locations.'
    },
    {
      id: 'sj-q56',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'You receive a phishing email asking for system access credentials. What do you do?',
      options: [
        'Respond with the information',
        'Do not respond and report to IT security',
        'Click the link to see what it is',
        'Forward it to a colleague'
      ],
      correctAnswer: 'Do not respond and report to IT security',
      explanation: 'Phishing attempts must be reported to IT security immediately.'
    },
    {
      id: 'sj-q57',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'A senior colleague asks you to share a confidential report with an unauthorized person. What do you do?',
      options: [
        'Share the report',
        'Politely explain it is confidential and offer to help them get authorization',
        'Share it and hope no one finds out',
        'Ignore the request'
      ],
      correctAnswer: 'Politely explain it is confidential and offer to help them get authorization',
      explanation: 'Confidentiality policies must be followed regardless of who makes the request.'
    },
    {
      id: 'sj-q58',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'Your company-issued smartphone with confidential information is lost. What do you do?',
      options: [
        'Wait to see if it turns up',
        'Report immediately and request remote wipe',
        'Buy a new phone',
        'Change your passwords only'
      ],
      correctAnswer: 'Report immediately and request remote wipe',
      explanation: 'Lost devices with confidential data must be reported immediately and remote wiped.'
    },
    {
      id: 'sj-q59',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'A colleague posts company photos on social media showing confidential equipment. What do you do?',
      options: [
        'Ignore it',
        'Approach them privately and remind them of company policy',
        'Like and share the post',
        'Comment publicly on the post'
      ],
      correctAnswer: 'Approach them privately and remind them of company policy',
      explanation: 'Address the issue privately to avoid embarrassment while enforcing policy.'
    },
    {
      id: 'sj-q60',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'You see someone attempting to access a restricted area without authorization. What do you do?',
      options: [
        'Ignore them',
        'Politely challenge them and report to security',
        'Let them in if they look professional',
        'Follow them'
      ],
      correctAnswer: 'Politely challenge them and report to security',
      explanation: 'Security is everyone\'s responsibility. Challenge unauthorized access attempts.'
    },
    {
      id: 'sj-q61',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'You discover customer data has been accidentally exposed. What do you do?',
      options: [
        'Ignore it',
        'Report immediately and follow incident response procedures',
        'Try to fix it yourself',
        'Delete the data'
      ],
      correctAnswer: 'Report immediately and follow incident response procedures',
      explanation: 'Data breaches must be reported immediately and handled according to procedures.'
    },
    {
      id: 'sj-q62',
      topic: 'Confidentiality',
      difficulty: 'Easy',
      question: 'A journalist asks about your company\'s new project. What do you do?',
      options: [
        'Provide information',
        'Refer them to the appropriate department',
        'Give vague answers',
        'Ignore them'
      ],
      correctAnswer: 'Refer them to the appropriate department',
      explanation: 'Media inquiries should be handled by authorized personnel or departments.'
    },
    {
      id: 'sj-q63',
      topic: 'Confidentiality',
      difficulty: 'Easy',
      question: 'You find a USB drive in the parking lot. What do you do?',
      options: [
        'Plug it into your computer',
        'Do not plug it in and report to IT',
        'Keep it',
        'Give it to a colleague'
      ],
      correctAnswer: 'Do not plug it in and report to IT',
      explanation: 'Unknown USB drives could contain malware. Report to IT for secure handling.'
    },
    {
      id: 'sj-q64',
      topic: 'Confidentiality',
      difficulty: 'Easy',
      question: 'A cleaner asks about a project visible on your screen. What do you do?',
      options: [
        'Explain the project',
        'Do not discuss and secure your screen',
        'Show them more',
        'Ignore them'
      ],
      correctAnswer: 'Do not discuss and secure your screen',
      explanation: 'Protect sensitive information from unauthorized viewers.'
    },
    {
      id: 'sj-q65',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'You are on a call and someone asks about a confidential project. What do you do?',
      options: [
        'Discuss the project',
        'Verify their identity and authority first',
        'Give vague information',
        'Hang up'
      ],
      correctAnswer: 'Verify their identity and authority first',
      explanation: 'Always verify identity and authority before discussing confidential matters.'
    },
    {
      id: 'sj-q66',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'You find confidential documents in the waste bin. What do you do?',
      options: [
        'Leave them',
        'Secure them and report the issue',
        'Read them',
        'Throw them away properly'
      ],
      correctAnswer: 'Secure them and report the issue',
      explanation: 'Confidential documents must be disposed of securely. Report the improper disposal.'
    },
    {
      id: 'sj-q67',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'You are asked to provide information about your company to a potential client. How do you respond?',
      options: [
        'Provide all information',
        'Follow proper procedures and provide approved information',
        'Refuse to provide anything',
        'Provide information verbally only'
      ],
      correctAnswer: 'Follow proper procedures and provide approved information',
      explanation: 'Follow established procedures for sharing company information with clients.'
    },
    {
      id: 'sj-q68',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'Someone is asking for sensitive information and claiming to be from a regulatory agency. What do you do?',
      options: [
        'Provide the information immediately',
        'Verify their identity and follow procedures',
        'Ignore them',
        'Give limited information'
      ],
      correctAnswer: 'Verify their identity and follow procedures',
      explanation: 'Verify identity and follow established procedures for regulatory inquiries.'
    },
    {
      id: 'sj-q69',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'A colleague shares confidential information with you that they shouldn\'t have. What do you do?',
      options: [
        'Keep it secret',
        'Remind them of confidentiality and report if necessary',
        'Share it with others',
        'Use it for your benefit'
      ],
      correctAnswer: 'Remind them of confidentiality and report if necessary',
      explanation: 'Mishandling of confidential information should be addressed and reported if needed.'
    },
    {
      id: 'sj-q70',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'Your laptop with confidential data is stolen. What do you do?',
      options: [
        'Wait to see if it turns up',
        'Report immediately and change all passwords',
        'Buy a new laptop',
        'Ignore it'
      ],
      correctAnswer: 'Report immediately and change all passwords',
      explanation: 'Stolen devices with confidential data require immediate reporting and password changes.'
    },
    {
      id: 'sj-q71',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'A client asks for information about another client\'s project. What do you do?',
      options: [
        'Share the information',
        'Politely decline citing confidentiality policies',
        'Give vague information',
        'Ask for permission'
      ],
      correctAnswer: 'Politely decline citing confidentiality policies',
      explanation: 'Client information is strictly confidential and cannot be shared with others.'
    },
    {
      id: 'sj-q72',
      topic: 'Confidentiality',
      difficulty: 'Hard',
      question: 'You discover a colleague has been accessing files they are not authorized to access. What do you do?',
      options: [
        'Ignore it',
        'Report to the appropriate authority',
        'Confront them',
        'Access the files too'
      ],
      correctAnswer: 'Report to the appropriate authority',
      explanation: 'Unauthorized access to confidential files must be reported immediately.'
    },
    {
      id: 'sj-q73',
      topic: 'Confidentiality',
      difficulty: 'Easy',
      question: 'A visitor asks about the equipment they see. What do you do?',
      options: [
        'Provide detailed information',
        'Provide general information only, following policy',
        'Tell them to leave',
        'Ignore them'
      ],
      correctAnswer: 'Provide general information only, following policy',
      explanation: 'Visitors should only receive approved, general information about operations.'
    },
    {
      id: 'sj-q74',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'A friend who works for a competitor asks about your company\'s new technology. What do you do?',
      options: [
        'Share some information',
        'Politely decline, citing confidentiality',
        'Lie to them',
        'Change the subject'
      ],
      correctAnswer: 'Politely decline, citing confidentiality',
      explanation: 'Never share confidential information with competitors, even friends.'
    },
    {
      id: 'sj-q75',
      topic: 'Confidentiality',
      difficulty: 'Medium',
      question: 'You are in a meeting and someone mentions a competitor\'s confidential information they obtained. What do you do?',
      options: [
        'Ask for more details',
        'Remind them that using competitor confidential information is unethical',
        'Use the information',
        'Ignore it'
      ],
      correctAnswer: 'Remind them that using competitor confidential information is unethical',
      explanation: 'Using competitor confidential information is unethical and potentially illegal.'
    },

    // ============================================
    // ETHICAL DILEMMAS (Questions 76-100)
    // ============================================
    {
      id: 'sj-q76',
      topic: 'Ethical Dilemmas',
      difficulty: 'Medium',
      question: 'A vendor offers a gift in exchange for favorable contract consideration. What do you do?',
      options: [
        'Accept the gift',
        'Politely decline, citing company policy',
        'Accept but don\'t change the contract',
        'Accept and report it'
      ],
      correctAnswer: 'Politely decline, citing company policy',
      explanation: 'Always comply with company policy and decline unethical offers.'
    },
    {
      id: 'sj-q77',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A colleague has been falsifying safety inspection records. What do you do?',
      options: [
        'Ignore it',
        'Confront them privately',
        'Report it to the appropriate authority',
        'Help them fix the records'
      ],
      correctAnswer: 'Report it to the appropriate authority',
      explanation: 'Falsifying safety records is a serious violation that must be reported.'
    },
    {
      id: 'sj-q78',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A supplier offers to pay for your training in exchange for favorable consideration. What do you do?',
      options: [
        'Accept the offer',
        'Politely decline, citing conflict of interest',
        'Accept but don\'t give favorable treatment',
        'Ask for more benefits'
      ],
      correctAnswer: 'Politely decline, citing conflict of interest',
      explanation: 'Accepting such offers creates a conflict of interest and is unethical.'
    },
    {
      id: 'sj-q79',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A government official asks for a gift to expedite your permit application. What do you do?',
      options: [
        'Pay the bribe',
        'Politely decline and report it',
        'Offer a smaller gift',
        'Ignore the request'
      ],
      correctAnswer: 'Politely decline and report it',
      explanation: 'Bribery is illegal and must be reported. Follow the law and company policy.'
    },
    {
      id: 'sj-q80',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'Your supervisor asks you to cut corners on a quality check to meet a deadline. What do you do?',
      options: [
        'Cut corners',
        'Refuse and explain the risks',
        'Cut corners but document it',
        'Pretend you did the check'
      ],
      correctAnswer: 'Refuse and explain the risks',
      explanation: 'Never compromise quality or safety for deadlines. Explain the risks.'
    },
    {
      id: 'sj-q81',
      topic: 'Ethical Dilemmas',
      difficulty: 'Medium',
      question: 'A colleague is using company equipment for personal projects. What do you do?',
      options: [
        'Ignore it',
        'Approach them privately and remind them of policy',
        'Use the equipment yourself',
        'Report them immediately'
      ],
      correctAnswer: 'Approach them privately and remind them of policy',
      explanation: 'Address minor policy violations privately first, then escalate if needed.'
    },
    {
      id: 'sj-q82',
      topic: 'Ethical Dilemmas',
      difficulty: 'Medium',
      question: 'A friend who works at a competitor asks for information about your company\'s processes. What do you do?',
      options: [
        'Share general information',
        'Politely decline, citing confidentiality',
        'Share a little information',
        'Lie to them'
      ],
      correctAnswer: 'Politely decline, citing confidentiality',
      explanation: 'Never share confidential information, even with friends at competitors.'
    },
    {
      id: 'sj-q83',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You are in a position to hire someone. A qualified family member applies. What do you do?',
      options: [
        'Hire them if qualified',
        'Recuse yourself and follow standard process',
        'Reject them to avoid nepotism',
        'Hire them without telling others'
      ],
      correctAnswer: 'Recuse yourself and follow standard process',
      explanation: 'Avoid conflicts of interest by recusing yourself and following fair hiring processes.'
    },
    {
      id: 'sj-q84',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You discover data has been misreported to a client. What do you do?',
      options: [
        'Ignore it',
        'Inform the client and provide correct data',
        'Fix it without telling the client',
        'Blame someone else'
      ],
      correctAnswer: 'Inform the client and provide correct data',
      explanation: 'Honesty with clients is essential. Correct errors and inform them promptly.'
    },
    {
      id: 'sj-q85',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You witness a colleague being subjected to inappropriate comments. What do you do?',
      options: [
        'Ignore it',
        'Step in to stop it and support the victim',
        'Laugh it off',
        'Tell the victim to ignore it'
      ],
      correctAnswer: 'Step in to stop it and support the victim',
      explanation: 'Harassment is unacceptable. Intervene to stop it and support the victim.'
    },
    {
      id: 'sj-q86',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You discover your company is engaging in illegal activities. What do you do?',
      options: [
        'Ignore it',
        'Report internally through proper channels',
        'Go to the media immediately',
        'Resign quietly'
      ],
      correctAnswer: 'Report internally through proper channels',
      explanation: 'Report illegal activities through internal channels first, documenting everything.'
    },
    {
      id: 'sj-q87',
      topic: 'Ethical Dilemmas',
      difficulty: 'Medium',
      question: 'A client offers an expensive meal for a favorable inspection report. What do you do?',
      options: [
        'Accept the meal',
        'Politely decline and cite company policy',
        'Accept but do the inspection fairly',
        'Accept and give them a good report'
      ],
      correctAnswer: 'Politely decline and cite company policy',
      explanation: 'Accepting gifts that could influence decisions is unethical and against most policies.'
    },
    {
      id: 'sj-q88',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'Your supervisor asks you to sign off on a report you haven\'t verified. What do you do?',
      options: [
        'Sign it',
        'Refuse and explain you cannot sign without verification',
        'Sign it and verify later',
        'Ask a colleague to sign it'
      ],
      correctAnswer: 'Refuse and explain you cannot sign without verification',
      explanation: 'Never sign for work you haven\'t personally verified. This is a serious integrity issue.'
    },
    {
      id: 'sj-q89',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A colleague is taking credit for your work. What do you do?',
      options: [
        'Let it go',
        'Address it professionally and assert your contribution',
        'Take credit for their work',
        'Complain to everyone'
      ],
      correctAnswer: 'Address it professionally and assert your contribution',
      explanation: 'Professional assertiveness is the appropriate way to address credit issues.'
    },
    {
      id: 'sj-q90',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You discover a safety violation that the company is trying to cover up. What do you do?',
      options: [
        'Ignore it',
        'Report to the appropriate authority',
        'Help cover it up',
        'Confront management directly'
      ],
      correctAnswer: 'Report to the appropriate authority',
      explanation: 'Safety violations must be reported to the appropriate authority, even if being covered up.'
    },
    {
      id: 'sj-q91',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A senior executive asks you to break company policy for the "good of the company." What do you do?',
      options: [
        'Break the policy',
        'Refuse and escalate if needed',
        'Follow the instruction',
        'Ignore it'
      ],
      correctAnswer: 'Refuse and escalate if needed',
      explanation: 'Policies exist for a reason. Refuse to break them and escalate the issue.'
    },
    {
      id: 'sj-q92',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You witness a colleague stealing from the company. What do you do?',
      options: [
        'Ignore it',
        'Report to management',
        'Confront them',
        'Join them'
      ],
      correctAnswer: 'Report to management',
      explanation: 'Theft is a serious matter that must be reported to management.'
    },
    {
      id: 'sj-q93',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You are offered a job by a competitor who wants inside information. What do you do?',
      options: [
        'Accept and share information',
        'Politely decline and maintain confidentiality',
        'Accept but don\'t share information',
        'Share general information'
      ],
      correctAnswer: 'Politely decline and maintain confidentiality',
      explanation: 'Maintain confidentiality about your current employer, even when considering a new job.'
    },
    {
      id: 'sj-q94',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You discover a colleague has been concealing a serious safety issue. What do you do?',
      options: [
        'Ignore it',
        'Report it immediately',
        'Confront them',
        'Help them cover it up'
      ],
      correctAnswer: 'Report it immediately',
      explanation: 'Concealed safety issues must be reported immediately to prevent potential harm.'
    },
    {
      id: 'sj-q95',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You are asked to approve a payment to a "consultant" who provides no real services. What do you do?',
      options: [
        'Approve the payment',
        'Investigate and report if suspicious',
        'Ask no questions',
        'Approve but document it'
      ],
      correctAnswer: 'Investigate and report if suspicious',
      explanation: 'Suspicious payments must be investigated. This could be fraud or bribery.'
    },
    {
      id: 'sj-q96',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A colleague asks you to lie to a client about a delay. What do you do?',
      options: [
        'Lie to the client',
        'Refuse and suggest honest communication',
        'Tell a partial truth',
        'Ignore the request'
      ],
      correctAnswer: 'Refuse and suggest honest communication',
      explanation: 'Honesty with clients is essential. Refuse to lie and suggest honest communication.'
    },
    {
      id: 'sj-q97',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You are offered a kickback for recommending a supplier. What do you do?',
      options: [
        'Accept the kickback',
        'Politely decline and report the offer',
        'Accept but recommend the best supplier anyway',
        'Ignore the offer'
      ],
      correctAnswer: 'Politely decline and report the offer',
      explanation: 'Kickbacks are a form of bribery and must be declined and reported.'
    },
    {
      id: 'sj-q98',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A colleague is using insider information for personal gain. What do you do?',
      options: [
        'Ignore it',
        'Report to the appropriate authority',
        'Join them',
        'Confront them'
      ],
      correctAnswer: 'Report to the appropriate authority',
      explanation: 'Insider trading is illegal and must be reported to the appropriate authority.'
    },
    {
      id: 'sj-q99',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'You are asked to dump waste illegally to save money. What do you do?',
      options: [
        'Do it to save money',
        'Refuse and report the request',
        'Find a cheaper legal option',
        'Ignore the request'
      ],
      correctAnswer: 'Refuse and report the request',
      explanation: 'Illegal dumping is environmentally harmful and must be refused and reported.'
    },
    {
      id: 'sj-q100',
      topic: 'Ethical Dilemmas',
      difficulty: 'Hard',
      question: 'A colleague is falsifying qualifications to get a promotion. What do you do?',
      options: [
        'Ignore it',
        'Report it to HR',
        'Confront them',
        'Help them get the promotion'
      ],
      correctAnswer: 'Report it to HR',
      explanation: 'Falsifying qualifications is fraud and must be reported to HR.'
    }
  ]
};

export default situationalJudgementQuestions;