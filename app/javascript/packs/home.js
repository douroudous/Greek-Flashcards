function HomepageHandler() {
  this.init();
}

HomepageHandler.prototype = {
  init() {
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
        console.log(event.target.dataset.result);
        // NOW SEND TO GUESSES CONTROLLER!!!
      })
    })
  },
};

document.addEventListener('DOMContentLoaded', () => {
  new HomepageHandler();

});
