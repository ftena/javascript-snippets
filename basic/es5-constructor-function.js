// In ES5, we usually define a constructor function and use the new keyword
// to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus);

// Second example

function ShoppingCart() {
    var items = [];

    this.getPrice = function () {
       var total = 0;
       for (var i = 0; i < items.length; i += 1) {
          total += items[i].price;
       }
       return total;
    }

    this.addItem = function (item) {
        items.push(item);
    }

    this.getItems = function()
    {
        return items;
    }

    this.checkOut = function () {
        var serializedItems = JSON.strigify(items);
        //send request to the server...
    }
}

var cart = new ShoppingCart();
cart.addItem({ price: 10, type: 'T-shirt' });
cart.addItem({ price: 20, type: 'Pants' });
console.log(cart.getItems());
console.log("cart.getPrice() = " + cart.getPrice()); //30
