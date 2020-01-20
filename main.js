const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    listOrders: function() {
        console.log(this.orders)
    }

}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "liter of Cola"
}

const baconCheeseBurgerCombo = {
    sandwichType: "cheeseburger",
    fries: true,
    drinkSize: "liter of Cola"
}


// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(baconCheeseBurgerCombo);


// Invoke the function to return the list of all orders
restaurant.listOrders();
console.table(restaurant.orders)
// Output all orders to the console using console.table()