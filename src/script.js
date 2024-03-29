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
  setElementText('answerText', '');
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
    const id = 'answerButton' + i;
    document.getElementById(id).classList.add('disabled');
  }
}

function enableAnswerButtons() {
  for (let i = 0; i < buttonsCount; i++) {
    let answer = document.getElementById('answerButton' + i);
    answer.classList.remove('btn-success');
    answer.classList.remove('btn-error');
    answer.classList.remove('disabled');
  }
}

function showQuestion() {
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
      setElementText('answerText', `${question.name}`);
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

    let answerIndex = answers.findIndex(a => a.name === question.name);
    let theAnswerButton = document.getElementById('answerButton' + answerIndex);

    for (let i = 0; i < buttonsCount; i++) {
      const id = 'answerButton' + i;
      let button = document.getElementById(id);
      button.innerText = answers[i].name;
      button.name = answers[i].name;
      button.ru = answers[i].ru;
      button.onclick = function() {
        disableAnswerButtons();
        theAnswerButton.classList.add('btn-success');
        if (button === theAnswerButton) {
          correctCount++;
          if (currentQuestion < signs.length) {
            setTimeout(nextQuestion, 150);
          }
        } else {
          incorrectCount++;
          button.classList.add('btn-error');
        }

        setElementText('correct', correctCount);
        setElementText('incorrect', incorrectCount);
        if (currentQuestion === signs.length) {
          nextQuestion();
        }
      };
    }
  }

  setElementText('correct', correctCount);
  setElementText('incorrect', incorrectCount);
  updateTranslation();
  enableAnswerButtons();
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
  if (currentQuestion < signs.length) {
    currentQuestion++;
    setElementText('question', currentQuestion);
    setElementText('nextButton', 'Next');
    showQuestion();
  } else {
    let answerText = document.getElementById('answerText');
    answerText.style.display = answerTextDisplay;
    answerText.innerText = 'Test finished!';
    disableAnswerButtons();
    setElementText('nextButton', 'Restart');
    resetState();
  }
}

function resetState() {
  currentQuestion = 0;
  correctCount = 0;
  incorrectCount = 0;
  // Reset the used flag for all questions due to reset the state
  signs.forEach(question => question.used = false);
}

function switchMode() {
  resetState();
  nextQuestion();
}

function updateTranslation() {
  let ru = document.getElementById('lang').checked;
  for (let i = 0; i < buttonsCount; i++) {
    const id = 'answerButton' + i;
    let button = document.getElementById(id);
    button.innerText = ru ? button.ru : button.name;
  }
  let answerText = document.getElementById('answerText');
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
  setElementText('total', signs.length);
  preloadImages();
  nextQuestion();
};

start();
