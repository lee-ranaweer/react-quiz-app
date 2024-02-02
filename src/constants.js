export const jsQuizz = {
    questions: [
      {
        question:
          "What year was the University of Guelph founded?",
        choices: [
          "1964",
          "1975",
          "1900",
          "2000",
        ],
        type: "MCQs",
        correctAnswer: "1964",
      },
      {
        question: "What are the official colours of the University of Guelph?",
        choices: [
          "Blue, gray, and gold",
          "Red, silver, and White",
          "Black, red, and yellow",
          "Yellow, orange, and purple",
        ],
        type: "MCQs",
        correctAnswer: "Black, red, and yellow",
      },
      {
        question:
          "What is the official mascot of the University of Guelph?",
        choices: [
          "Gryph the Gryphon", 
          "Thunder the Horse", 
          "Griffin the Eagle", 
          "Guelphie the Goat"
        ],
        type: "MCQs",
        correctAnswer: "Gryph the Gryphon",
      },
      {
        question: "What is the name of the library at the University of Guelph?",
        choices: [
          "Wilson Library", 
          "McLaughlin Library", 
          "Guelph Central Library", 
          "Griffin Library"
        ],
        type: "MCQs",
        correctAnswer: "McLaughlin Library",
      },
      {
        question: "What is the University of Guelph's motto?",
        choices: [
          "Veritas vos liberabit",
          "Wisdom, Integrity, Respect",
          "Leading Through Innovation",
          "Rerum cognoscere causas",
        ],
        type: "MCQs",
        correctAnswer: "Rerum cognoscere causas",
      },
    ],
  };

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0
};