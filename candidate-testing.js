const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? " ,
 "True or false: 5 kilometer == 5000 meters? "  ,
 "(5 + 3)/2 * 10 = ? " ,
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " ,
  "What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
 candidateName = input.question("What's your name? ");


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++){
  candidateAnswers.push(input.question(questions[i]));
    //candidateAnswers.push(answer);


}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < questions.length; i++){
  console.log(`Question ${i + 1}: ${questions[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log('\n');
}

//let caseInsensitiveCorrectAnswers = correctAnswers.join(",").toLowerCase().split(",");
//let caseInsensitiveCandidateAnswers = candidateAnswers.join(",").toLowerCase().split(",");


let numberCorrect = 0;
for (let i = 0; i < correctAnswers.length; i++) {
 // console.log(typeof(candidateAnswers[i]) + "to check");
  //if (caseInsensitiveCandidateAnswers[i] === caseInsensitiveCorrectAnswers[i]) {
   if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  numberCorrect++;
  }
 }
 let grade = (numberCorrect / 5) * 100;
console.log(grade);

console.log(numberCorrect);

  console.log("Candidate's Score: " + grade + "%")
  if (grade >= 80) {
    console.log("You have passed the quiz.");
  } else {
    console.log("You have failed the quiz.")
  }
  return grade;
}

 


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Greetings " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram 
};