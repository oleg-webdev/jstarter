class UiAlert {
  answer = false;
  removed = false;

  constructor(element) {
    if (!element) {
      throw new Error('Element should be defined');
    }

    this.element = element;
  }

  init() {
    const { element } = this;
    let { answer } = this;
    answer = 'pending';
    this.removed = false;

    this.initializeBackdrop();
    element.classList.add('show');
    setTimeout(() => {
      element.querySelector('.inner-modal-wrapper')
        .classList.add('reveal');
    }, 0);

    return new Promise((resolve, reject) => {
      const confirmButton = element.querySelector('.confirm');

      /** *
       * Reject
       */
      // Modal window have to contain the button.
      if (!confirmButton) {
        answer = false;
        reject(new Error('Modal window have to contain the button.'));
      }

      /** *
       * Resolve
       */
      // Handle button click
      confirmButton.addEventListener('click', (event) => {
        answer = 'confirmed';
        resolve({ event, answer });
        this.revoke();
      });
      // Click on wrapper
      this.element.addEventListener('click', (event) => {
        if (event.target.classList.contains('UI-modal-body')) {
          answer = 'confirmed';
          resolve({ event, answer });
          this.revoke();
        }
      });
    });
  }

  revoke() {
    if (this.removed) return;
    this.removed = true;

    this.element.querySelector('.inner-modal-wrapper')
      .classList.remove('reveal');
    this.backdrop.classList.remove('reveal');

    setTimeout(() => {
      this.element.classList.remove('show');
      document.body.removeChild(this.backdrop);
    }, 300);
  }

  initializeBackdrop() {
    this.backdrop = document.createElement('DIV');
    this.backdrop.classList.add('generic-backdrop');
    document.body.appendChild(this.backdrop);
    setTimeout(() => {
      this.backdrop.classList.add('reveal');
    }, 0);
  }
}

export default UiAlert;

