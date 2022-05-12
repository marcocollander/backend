const question = document.querySelector('#question');
const gameBoard = document.querySelector('#game-board');
const h2 = document.querySelector('h2');

function fillQuestionElements(data) {
  if (data.winner === true) {
    gameBoard.style.display = 'none';
    h2.innerText = 'WYGRAŁAŚ/EŚ!!!';
    return;
  }

  if (data.loser === true) {
    gameBoard.style.display = 'none';
    h2.innerText = 'Nie poszło tym razem, spróbuj ponownie!';
    return;
  }

  question.innerText = data.question;
  
  for (const i in data.answers) {
    const answerEl = document.querySelector(`#answer${Number(i) + 1}`);
    answerEl.innerText = data.answers[i];
  }
}

function showNexQuestion() {
  fetch('/question', {
    method: 'GET',
  }).then(res => res.json().then(data => fillQuestionElements(data)));
}

showNexQuestion();

const goodAnswersSpan = document.querySelector('#good-answers');

function handleAnswerFeedback(data) {
  goodAnswersSpan.innerText = data.goodAnswers;
  showNexQuestion();
}

function sendAnswer(answerIndex) {
  fetch(`/answer/${answerIndex}`, {
    method: 'POST',
  })
    .then(res => res.json())
    .then(data => {
      handleAnswerFeedback(data);
    });
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', event => {
    const answerIndex = event.target.dataset.answer;
    sendAnswer(answerIndex);
  });
}
