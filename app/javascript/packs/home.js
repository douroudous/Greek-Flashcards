import ApiHelper from './apiHelper';

function HomepageHandler() {
  this.apiHelper = new ApiHelper();
  this.init();
}

HomepageHandler.prototype = {
  init() {
    this.flashcard = document.querySelector('#flashcard');
    this.translation = document.querySelector('#translation');
    this.reveal = document.querySelector('#reveal');
    this.results = document.querySelectorAll('#result-button');
    this.handleCardReveal();
    this.handleResultClick();
  },
  handleCardReveal() {
    this.reveal.addEventListener('click', (event) => {
      this.reveal.className = 'd-none';
      this.translation.className = 'd-block';
    });
  },
  handleResultClick() {
    this.results.forEach(result => {
      result.addEventListener('click', event => {
        const correct = event.target.dataset.result === 'correct';
        const wordId = this.flashcard.dataset.wordId;
        const payload = { guess: { correct: correct, word_id: wordId }};
        this.apiHelper.post_json('/guesses', payload, this.displayMessage);
      })
    })
  },
  displayMessage(payload) {
    const buttons = document.querySelector('#buttons');
    const next = document.querySelector('#next');
    const correctMessage = document.querySelector('#correct-message');
    const incorrectMessage = document.querySelector('#incorrect-message');
    buttons.className = 'd-none';
    next.className = 'd-block';
    if (payload.result) {
      correctMessage.className = 'd-block';
    } else {
      incorrectMessage.className = 'd-block';
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  new HomepageHandler();

});
