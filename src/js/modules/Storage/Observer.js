/**
 * Observers bundle model
 */
class Observable {
  constructor() {
    this.observers = [];
  }

  // Broadcast to every observer
  sendMessage(message) {
    this.observers.forEach((item) => {
      item.notify(message);
    });
  }

  // Add an observer to bundle
  addObserver(observer) {
    this.observers.push(observer);
  }
}

/**
 * Single Observer model
 */
class Observer {
  constructor(behavior) {
    this.notify = function (msg) {
      behavior(msg);
    };
  }
}

export { Observable, Observer };

// import { Observable, Observer } from './modules/Storage/Observer';

// const subscription = new Observable();
// const o1 = new Observer((msg) => {
//   console.log(msg);
// });
// const o2 = new Observer((msg) => {
//   alert(msg);
// });

// subscription.addObserver(o1);
// subscription.addObserver(o2);

// setTimeout(() => {
//   subscription.sendMessage(`Date: ${new Date()}`);
// }, 3000);

