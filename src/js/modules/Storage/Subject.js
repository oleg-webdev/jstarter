class Subject {
  constructor() {
    this.observers = [];
  }

  sendMessage(message) {
    this.observers.forEach((item) => {
      item.notify(message);
    });
  }

  addObserver(observer) {
    this.observers.push(observer);
  }
}

export default Subject;
