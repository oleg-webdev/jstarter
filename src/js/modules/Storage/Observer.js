class Observer {
  constructor(behavior) {
    this.notify = function (msg) {
      behavior(msg);
    };
  }
}

export default Observer;

// const subject = new Subject();
// const o1 = new Observer((msg) => {
//   console.log(msg);
// });
// const o2 = new Observer((msg) => {
//   alert(msg);
// });

// subject.addObserver(o1);
// subject.addObserver(o2);

// setTimeout(() => {
//   subject.sendMessage(`Date: ${new Date()}`);
// }, 3000);

