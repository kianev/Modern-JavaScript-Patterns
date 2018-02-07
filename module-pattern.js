
// Module Pattern
/*
(function () {
    //Declare private variables and functions

    return {
   //Declare public variables and functions
    }
})();*/

const UIcontrol = (function () {
  let text = 'Hello World';

  const changeText = function () {
   const element =  document.querySelector('h1');
   element.textContent = text;
  }

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    }
  }
})();

UIcontrol.callChangeText();