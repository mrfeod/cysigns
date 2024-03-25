let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;

function getRandomAnswers() {
  let answers = [...signs];
  answers.sort(() => Math.random() - 0.5);
  return answers.slice(0, 4);
}

function showQuestion() {
  let question = getRandomQuestion();
  document.getElementById('signImage').src = question.image;
  let answerText = document.getElementById('answer');
  answerText.innerText = '';
  let answers = getRandomAnswers();
  if (!answers.find(answer => answer.name === question.name)) {
    answers[0] = question;
    answers.sort(() => Math.random() - 0.5);
  }
  let answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  for (let i = 0; i < answers.length; i++) {
    let answer = document.createElement('button');
    answer.className = 'answer';
    answer.innerText = answers[i].name;
    answer.onclick = function() {
      let toNext = false;
      if (this.innerText === question.name) {
        correctCount++;
      } else {
        incorrectCount++;
        let answerText = document.getElementById('answer');
        answerText.innerText = `${question.name}`;
      }
      document.getElementById('correct').innerText = correctCount;
      document.getElementById('incorrect').innerText = incorrectCount;
      if (toNext) nextQuestion();
    };
    answersDiv.appendChild(answer);
  }
}

function getRandomQuestion() {
  let availableQuestions = signs.filter(question => !question.used);
  if (availableQuestions.length === 0) {
    // All questions have been used, reset the used flag for all questions
    signs.forEach(question => question.used = false);
    availableQuestions = signs;
  }
  let randomIndex = Math.floor(Math.random() * availableQuestions.length);
  let question = availableQuestions[randomIndex];
  question.used = true;
  return question;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < signs.length) {
    showQuestion();
  } else {
    alert('Test finished!');
  }
}

showQuestion();