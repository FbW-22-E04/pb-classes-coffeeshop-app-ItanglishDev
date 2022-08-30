class CoffeeShop {

	constructor(name) {

		this.name = name
		this.menu = []      // menu
		this.orders = []    //orders
		this.drinksMenu = []

	}
}

class MenuItem {

	constructor(name, type, price) {

		this.name = name
		this.type = type
		this.price = price

	}
}

class Order {
	constructor(name) {

		this.name = name

	}

}


class MenuItemManager {

	constructor(menu) {

		this.menu = menu
	}

	addToMenu(...menuItems) {
		this.menu.push(...menuItems)
	}

	cheapestItem() {

		const smallest = this.menu.sort((a, b) => a.price - b.price)
		return smallest[0]
	}

	drinksOnly() {

		const drinksMenu = this.menu.filter(el => el.type === 'drink')
		console.log(drinksMenu)
		// drinksMenu = this.menu.filter(
		// this.menu.type === 'drink'
		// )

		// const onlyDrinks = this.menu.filter(this.type === 'drink')
		// return onlyDrinks
	}

	foodOnly() {

		const onlyFood = this.menu.filter(el => el.type === 'Food')
		return onlyFood

	}

}


class OrdersManager {

	constructor(orderItem) {

		this.orderItem = orderItem

	}

	addOrder(orderItem) {

		const result = this.menu.findIndex(el => el.name === orderItem)
		if (result > -1) {
			this.orders.push(orderItem)
		} else {
			console.log("This item is currently unavailable!");
		}

		// this.menu[orderItem].forEach(element => this.menu[element] == -1 ? console.log("This item is currently unavailable!") : this.order.push(orderItem)
		// );
		// return info = this.menu[orderItem] = -1 ? console.log("This item is currently unavailable!") : this.order.push(orderItem);

	}

	fulfillOrder() {

		this.CoffeeShop.order > -1 ? console.log(`The ${this.CoffeeShop.order} is ready!`) : console.log("All orders have been fulfilled!");
	}

	listOrders() {

		if (this.orders.length > 0) {
			console.log(`The ${this.orders.item[0]} is ready!`);

			this.orders.shift()
			return

		}
		console.log("All orders have been fulfilled");

	}

	listOrders() {

		console.log(this.orders);
	}

	dueAmount() {

		this.CoffeeShop.orders.reduce((acc, item) => acc + item.price, 0)
	}


}


const bestCoffeeInTown = new CoffeeShop('Segafredo')
const menuManager = new MenuItemManager(bestCoffeeInTown.menu)

const salamePanini = new MenuItem('Salame Panini', 'food', 4)
const pizzaMargherita = new MenuItem('Pizza Margherita', 'food', 7)
const pastaArrabbiata = new MenuItem('Pasta arrabbiata', 'food', 9)
const pizzaSalame = new MenuItem('Pizza Salame', 'food', 9)
const espresso = new MenuItem('Espresso', 'drink', 2)
const beer = new MenuItem('Beer', 'drink', 5)
const coke = new MenuItem('Coke', 'drink', 3)
const water = new MenuItem('Water', 'drink', 3)

menuManager.addToMenu(salamePanini, pizzaMargherita, pastaArrabbiata, pizzaSalame, espresso, beer, coke, water)

const orderManager = new OrdersManager(bestCoffeeInTown.orders)

// orderManager.addOrder(pizzaSalame)

// console.log(bestCoffeeInTown.order);
console.log(bestCoffeeInTown);

console.log('The cheapest item is', menuManager.cheapestItem());

console.log(menuManager.drinksOnly());
// menuManager.foodOnly()