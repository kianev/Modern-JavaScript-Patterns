
// singelton to create only one instance of an object
const Singelton = (function () {
  let instance;
  
  function createInstance () {
    const object = new Object({name: 'Pesho'});
    return object;
  }

  return {
    getInstance: function () {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singelton.getInstance();
const instanceB = Singelton.getInstance();
console.log(instanceA === instanceB);