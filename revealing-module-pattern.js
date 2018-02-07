const ItemController = (function () {
  let _data = [];

  function add (item) {
    _data.push(item);
    console.log('Item added...');
  }

  function get (id) {
    return _data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

ItemController.add({id: 1, name: 'Pesho'});
ItemController.add({id: 2, name: 'Gosho'});
console.log(ItemController.get(2));
