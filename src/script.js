let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;
const buttonsCount = 4;
const scoreDisplay = getElementDisplay('score');
const answersDisplay = getElementDisplay('answers');
const answerTextDisplay = getElementDisplay('answerText');
const showAnswerButtonDisplay = getElementDisplay('showAnswerButton');

const Mode = {
  LEARN: 'LEARN',
  TEST: 'TEST',
};

function getElementDisplay(elementId) {
  return document.getElementById(elementId).style.display;
}

function setElementDisplay(elementId, display) {
  return document.getElementById(elementId).style.display = display;
}

function setElementText(elementId, text) {
  return document.getElementById(elementId).innerText = text;
}

function getRandomAnswers(count) {
  let answers = [...signs];
  answers.sort(() => Math.random() - 0.5);
  return answers.slice(0, count);
}

let showAnswer = function() {}

function hideAnswer() {
  let answerText = document.getElementById('answerText');
  answerText.innerText = '';
}

function setSpacersDisplay(display) {
  var elements = document.getElementsByClassName('spacer');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}

function hideSpacers() {
  setSpacersDisplay('none');
}

function showSpacers() {
  setSpacersDisplay('block');
}

function disableAnswerButtons() {
  for (let i = 0; i < buttonsCount; i++) {
    const id = 'answerButton' + (i + 1);
    document.getElementById(id).classList.add('disabled');
  }
}

function enableAnswerButtons() {
  for (let i = 0; i < buttonsCount; i++) {
    let answer = document.getElementById('answerButton' + (i + 1));
    answer.classList.remove('btn-success');
    answer.classList.remove('btn-error');
    answer.classList.remove('disabled');
  }
}

function showQuestion() {
  setElementText('question', currentQuestion + 1);
  setElementText('total', signs.length);
  enableAnswerButtons();

  const question = getRandomQuestion();
  let image = document.getElementById('signImage');
  image.src = question.image;
  image.alt = question.name;

  const mode = document.getElementById('mode').checked ? Mode.TEST : Mode.LEARN;
  if (mode === Mode.TEST) {
    setElementDisplay('score', 'none');
    setElementDisplay('answers', 'none');
    setElementDisplay('answerText', answerTextDisplay);
    setElementDisplay('showAnswerButton', showAnswerButtonDisplay);
    showSpacers();
    hideAnswer();

    let answerText = document.getElementById('answerText');
    answerText.name = `${question.name}`;
    answerText.ru = `${question.ru}`;
    showAnswer = function() {
      answerText.innerText = `${question.name}`;
      updateTranslation();
    };
  } else if (mode === Mode.LEARN) {
    hideSpacers();
    setElementDisplay('answerText', 'none');
    setElementDisplay('showAnswerButton', 'none');
    setElementDisplay('answers', answersDisplay);
    setElementDisplay('score', scoreDisplay);

    let answers = getRandomAnswers(buttonsCount);
    if (!answers.find(answer => answer.name === question.name)) {
      answers[0] = question;
      answers.sort(() => Math.random() - 0.5);
    }

    let answerIndex = answers.findIndex(a => a.name === question.name) + 1;
    let theAnswerButton = document.getElementById('answerButton' + answerIndex);

    for (let i = 0; i < buttonsCount; i++) {
      const id = 'answerButton' + (i + 1);
      let button = document.getElementById(id);
      button.innerText = answers[i].name;
      button.name = answers[i].name;
      button.ru = answers[i].ru;
      button.onclick = function() {
        disableAnswerButtons();
        theAnswerButton.classList.add('btn-success');
        if (button === theAnswerButton) {
          correctCount++;
          setTimeout(nextQuestion, 150);
        } else {
          incorrectCount++;
          button.classList.add('btn-error');
        }
        setElementText('correct', correctCount);
        setElementText('incorrect', incorrectCount);
      };
    }
  }

  updateTranslation();
  document.getElementById('nextButton').classList.remove('disabled');
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
  document.getElementById('nextButton').classList.add('disabled');
  currentQuestion++;
  if (currentQuestion < signs.length) {
    showQuestion();
  } else {
    disableAnswerButtons();
    let answerText = document.getElementById('answerText');
    answerText.style.display = answerTextDisplay;
    answerText.innerText = 'Test finished!';
  }
}

function switchMode() {
  currentQuestion = 0;
  correctCount = 0;
  incorrectCount = 0;
  showQuestion();
}

function updateTranslation() {
  let ru = document.getElementById('lang').checked;
  for (let i = 0; i < buttonsCount; i++) {
    const id = 'answerButton' + (i + 1);
    let button = document.getElementById(id);
    button.innerText = ru ? button.ru : button.name;
  }
  if (answerText.innerText !== '') {
    answerText.innerText = ru ? answerText.ru : answerText.name;
  }
}

function preloadImages() {
  for (let i = 0; i < signs.length; i++) {
    let image = new Image();
    image.src = signs[i].image;
  }
}

function start() {
  document.getElementById('nextButton').classList.add('disabled');
  preloadImages();
  showQuestion();
};

start();
