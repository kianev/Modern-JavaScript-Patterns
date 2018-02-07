const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to)
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}

const Chatroom = function () {
 let users = {};

 return {
   register: function (user) {
     users[user.name] = user;
     user.chatroom = this;
   },
   send: function (message, from, to) {
     if(to){
        //single user message
       to.receive(message, from);
     } else {
        //mass message
       for (key in users) {
         if(users[key] !== from) {
           users[key].receive(message, from);
         }
       }
     }
   }
 }
}

const pesho = new User('Pesho');
const gosho = new User('Gosho');
const minka = new User('Minka');

const chatroom = new Chatroom();

chatroom.register(pesho);
chatroom.register(gosho);
chatroom.register(minka);

pesho.send('Hello Gosho', gosho);
minka.send('Hello Pesho', pesho);
gosho.send('Hello everyone');