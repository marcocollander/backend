function gameRoutes(app) {
  let goodAnswers = 0;
  let isGameOver = false;
  let callToAFriendUsed = false;
  let questionToTheCrowdUsed = false;
  let halfOnHalfUsed = false;

  const questions = [
    {
      question: 'W którym roku urodził się Chopin?',
      answers: ['1809', '1811', '1810', '1813'],
      corectAnswer: 2,
    },
    {
      question: 'Ile Chopin skomponował koncertów fortepianowych',
      answers: ['1', '2', '3', '4'],
      corectAnswer: 1,
    },
    {
      question:
        'Jak nazywała się francuska pisarka, która była partnerką Chopina',
      answers: ['George Sand', 'Yve Montand', 'Edit Piaff', 'Mire Mattie'],
      corectAnswer: 0,
    },
  ];

  app.get('/question', (req, res) => {
    if (goodAnswers === questions.length) {
      res.json({
        winner: true,
      });
    } else if (isGameOver) {
      res.json({
        loser: true,
      });
    } else {
      const nextQuestion = questions[goodAnswers];
      const { question, answers } = nextQuestion;
      res.json({
        question,
        answers,
      });
    }
  });

  app.post('/answer/:index', (req, res) => {
    if (isGameOver) {
      res.json({
        loser: true,
      });
    }
    const { index } = req.params;
    const question = questions[goodAnswers];
    const isGoodAnswer = question.corectAnswer === Number(index);

    if (isGoodAnswer) {
      goodAnswers++;
    } else {
      isGameOver = true;
    }

    res.json({
      correct: isGoodAnswer,
      goodAnswers,
    });
  });
}

module.exports = gameRoutes;
