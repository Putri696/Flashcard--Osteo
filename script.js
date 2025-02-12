document.addEventListener('DOMContentLoaded', () => {
  const flashcards = [
    { question: 'Apa kamu suka dia?', 
      answer: 'beneran ga salah' },
    { question: 'What your type of boyfriend?', 
      answer: 'The Men' },
    { question: 'Do You like her?', 
      answer: 'yes' },
  ];

  let currentCard = 0;

  const flashcardElement = document.getElementById ('flashcard'); 
  const questionElement = document.getElementById ('question');
  const answerElement = document.getElementById ('answer');

  function displayCard() {
    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;
    flashcardElement.classList.removed('is-flipped');
  }

  document.getElementById('flip-card').addEventListener('click', () => {
    flashcardElement.classList.toggle('is-flipped');
  });

  document.getElementById('next-card').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
  })

  displayCard()
});


