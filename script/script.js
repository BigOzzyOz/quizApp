let currentQuestion = 1;
let rightAnswer = 0;

function init() {
  document.getElementById('questionsLength').innerHTML = questions.length;
  document.getElementById('currentQuestion').innerHTML = currentQuestion;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion - 1];
  document.getElementById('questionText').innerHTML = question['question'];
  document.getElementById('answer1').innerHTML = question['answer1'];
  document.getElementById('answer2').innerHTML = question['answer2'];
  document.getElementById('answer3').innerHTML = question['answer3'];
  document.getElementById('answer4').innerHTML = question['answer4'];
}

function checkAnswer(number) {
  if (number === questions[currentQuestion - 1]['correctAnswer']) {
    correctAnswer(number);
  } else {
    wrongAnswer(number);
  }
  document.getElementById('next').disabled = false;;
}

function correctAnswer(number) {
  document.getElementById(`answer${number}`).parentNode.classList.add('bg-success');
  rightAnswer++;
}

function wrongAnswer(number) {
  document.getElementById(`answer${number}`).parentNode.classList.add('bg-danger');
  document.getElementById(`answer${questions[currentQuestion - 1]['correctAnswer']}`).parentNode.classList.add('bg-success');
}

function nextQuestion() {
  if (currentQuestion < questions.length) {
    for (let i = 0; i < 4; i++) {
      document.getElementById(`answer${i + 1}`).parentNode.classList.remove('bg-success', 'bg-danger');
    }
    document.getElementById('next').disabled = true;
    currentQuestion++;
    init();
  } else {
    showSummary();
  }
}

function showSummary() {
  document.getElementById('containerQuiz').classList.add('d-none');
  document.getElementById('containerSummary').classList.remove('d-none');
  document.getElementById('rightAnswer').innerHTML = rightAnswer;
  document.getElementById('answerProgress').style.width = `${rightAnswer / questions.length * 100}%`;
}

function reset() {
  currentQuestion = 0;
  rightAnswer = 0;
  document.getElementById('containerQuiz').classList.remove('d-none');
  document.getElementById('containerSummary').classList.add('d-none');
  nextQuestion();
}