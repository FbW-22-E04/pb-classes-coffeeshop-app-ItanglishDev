class CoffeeShop {

	constructor(name) {

		this.name = name
		this.menuItem = []
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

}



class OrdersManager {

	constructor() {

	}
}