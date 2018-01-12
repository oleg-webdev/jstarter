import UiAlert from './UiAlert';

class UiConfirm extends UiAlert {
  constructor(element) {
    super(element);

    this.decline = this.element.querySelector('.decline');

    if (!this.decline) {
      throw new Error('Element should contain decline button');
    }
  }
}

export default UiConfirm;
