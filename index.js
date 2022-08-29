class CoffeeShop {

	constructor(name) {

		this.name = name
		this.menu = []
		this.orders = []

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

		const smallest = this.CoffeeShop.menu.sort((a, b) => a.price - b.price)
		return smallest[0]
	}

	drinksOnly() {

		const onlyDrinks = this.CoffeeShop.menu.filter(type === 'drink')
		return onlyDrinks
	}

	foodOnly() {

		return onlyFood = this.CoffeeShop.menu.filter(type === 'Food')

	}

}


class OrdersManager {

	constructor(orderItem) {

		this.orderItem = orderItem

	}

	addOrder(orderItem) {

		this.CoffeeShop.menu.includes(orderItem) ? this.CoffeeShop.order.push(orderItem) : console.log("This item is currently unavailable!");

	}

	fulfillOrder() {

		this.CoffeeShop.order != -1 ? console.log(`The ${this.CoffeeShop.order} is ready!`) : console.log("All orders have been fulfilled!");
	}

	listOrders() {

		this.CoffeeShop.order
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

menuManager.addToMenu(salamePanini, pizzaMargherita, pastaArrabbiata, pizzaSalame)

console.log(bestCoffeeInTown);