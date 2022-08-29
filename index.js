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

	constructor(menuItem) {

		this.menuItem = menuItem
	}

	addToMenu(menuItem) {
		this.CoffeeShop.menu.push(menuItem)
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

	}
}