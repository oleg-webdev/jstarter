import UiAlert from './UiAlert';

class UiConfirm extends UiAlert {
  constructor(element) {
    super(element);

    this.decline = this.element.querySelector('.decline');
    console.log(this.decline);
    if (!this.decline) {
      throw new Error('Element should contain decline button');
    }
  }

  init() {
    this.prepareToInit();

    return new Promise((resolve, reject) => {
      const confirmButton = this.element.querySelector('.confirm');

      /** *
       * Reject
       */
      // Modal window have to contain the button.
      if (!confirmButton) {
        this.answer = false;
        reject(new Error('Modal window have to contain confirm button.'));
      }

      /** *
       * Resolve
       */
      // Handle button click
      confirmButton.addEventListener('click', (event) => {
        this.answer = 'confirmed';
        resolve({ event, answer: this.answer });
        this.revoke();
      });

      // Click on wrapper
      this.element.addEventListener('click', (event) => {
        if (event.target.classList.contains('UI-modal-body')) {
          this.answer = 'dismiss-confirm';
          resolve({ event, answer: this.answer });
          this.revoke();
        }
      });

      // Click on dismiss
      this.decline.addEventListener('click', (event) => {
        this.answer = 'decline';
        resolve({ event, answer: this.answer });
        this.revoke();
      });
    });
  }
}

export default UiConfirm;
