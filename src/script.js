let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;
const buttonsCount = 4;

const Mode = {
  Learn: 'Learn',
  Test: 'Test',
};

function setElementText(elementId, text) {
  return document.getElementById(elementId).innerText = text;
}

function toggleModifier(elementId, modifier, force) {
  document.getElementById(elementId).classList.toggle(modifier, force);
}

function hideSpacers(hide) {
  var elements = document.getElementsByClassName('spacer');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('d-hide', hide);
  }
}

function disableAnswerButtons() {
  for (let i = 0; i < buttonsCount; i++) {
    toggleModifier('answerButton' + i, 'disabled', true);
  }
}

function enableAnswerButtons() {
  for (let i = 0; i < buttonsCount; i++) {
    toggleModifier('answerButton' + i, 'btn-success', false);
    toggleModifier('answerButton' + i, 'btn-error', false);
    toggleModifier('answerButton' + i, 'disabled', false);
  }
}

function showAnswer() {
  toggleModifier('answerText', 'd-invisible', false);
}

function updateScore() {
  setElementText('question', currentQuestion);
  setElementText('correct', correctCount);
  setElementText('incorrect', incorrectCount);
}

function proceed() {
  return currentQuestion < signs.length;
}

function getRandomQuestion() {
  let availableQuestions = signs.filter(question => !question.used);
  if (availableQuestions.length === 0) {
    signs.forEach(question => question.used = false);
    availableQuestions = signs;
  }
  let randomIndex = Math.floor(Math.random() * availableQuestions.length);
  let question = availableQuestions[randomIndex];
  question.used = true;
  return question;
}

function getRandomAnswers(count) {
  let answers = [...signs];
  answers.sort(() => Math.random() - 0.5);
  return answers.slice(0, count);
}

function assignAnswer(element, answer) {
  element.innerText = answer.name;
  element.name = answer.name;
  element.ru = answer.ru;
}

function showQuestion() {
  const question = getRandomQuestion();
  let image = document.getElementById('signImage');
  image.src = question.image;

  const mode = document.getElementById('mode').checked ? Mode.Test : Mode.Learn;
  toggleModifier('score', 'd-hide', mode === Mode.Test);
  toggleModifier('answers', 'd-hide', mode === Mode.Test);
  toggleModifier('answerText', 'd-hide', mode === Mode.Learn);
  toggleModifier('showAnswerButton', 'd-hide', mode === Mode.Learn);
  hideSpacers(mode === Mode.Learn);

  if (mode === Mode.Test) {
    toggleModifier('answerText', 'd-invisible', true);
    assignAnswer(document.getElementById('answerText'), question);
  } else if (mode === Mode.Learn) {
    let answers = getRandomAnswers(buttonsCount);
    if (!answers.find(answer => answer.name === question.name)) {
      answers[0] = question;
      answers.sort(() => Math.random() - 0.5);
    }

    const answerIndex = answers.findIndex(a => a.name === question.name);
    for (let i = 0; i < buttonsCount; i++) {
      let button = document.getElementById('answerButton' + i);
      assignAnswer(button, answers[i]);
      button.onclick = function() {
        disableAnswerButtons();
        let theAnswer = document.getElementById('answerButton' + answerIndex);
        theAnswer.classList.add('btn-success');
        if (button === theAnswer) {
          correctCount++;
          if (proceed()) {
            setTimeout(nextQuestion, 150);
          }
        } else {
          incorrectCount++;
          button.classList.add('btn-error');
        }
        updateScore();
        document.getElementById('nextButton').focus();

        if (!proceed()) {
          nextQuestion();
        }
      };
    }
  }
  updateTranslation();
}

function nextQuestion() {
  setElementText('nextButton', proceed() ? 'Next' : 'Restart');
  toggleModifier('finishText', 'd-hide', proceed());
  if (proceed()) {
    currentQuestion++;
    updateScore();
    showQuestion();
    enableAnswerButtons();
  } else {
    disableAnswerButtons();
    resetState();
  }
}

function resetState() {
  currentQuestion = 0;
  correctCount = 0;
  incorrectCount = 0;
  signs.forEach(question => question.used = false);
}

function switchMode() {
  resetState();
  nextQuestion();
}

function updateTranslation() {
  let ru = document.getElementById('lang').checked;
  for (let i = 0; i < buttonsCount; i++) {
    let button = document.getElementById('answerButton' + i);
    button.innerText = ru ? button.ru : button.name;
  }
  let answerText = document.getElementById('answerText');
  answerText.innerText = ru ? answerText.ru : answerText.name;
}

function preloadImages() {
  toggleModifier('signContainer', 'loading', true);
  window.onload = function() {
    toggleModifier('signContainer', 'loading', false);
  };
  for (let i = 0; i < signs.length; i++) {
    let image = new Image();
    image.src = signs[i].image;
  }
}

setElementText('total', signs.length);
preloadImages();
nextQuestion();