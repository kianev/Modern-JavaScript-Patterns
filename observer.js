function EventObserver () {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter(item => {
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach((item) => {
      item.call();
    })
  }
}

const click = new EventObserver();

//Event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrentMiliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrentMiliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

//Click handler
const getCurrentMiliseconds = function () {
  console.log(`Current miliseconds ${new Date().getMilliseconds()}`)
}

const getCurrentSeconds = function () {
  console.log(`Current seconds ${new Date().getSeconds()}`)
}