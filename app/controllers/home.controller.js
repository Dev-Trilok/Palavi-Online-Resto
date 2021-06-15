const Menu = require('../models/menu.model');

function homeController() { 
	// const pizzas=[{name:'A',price:10,size:10}]
	return {
		async index(req, res) {
			const pizzas = await Menu.find();
			return res.render('home', { pizzas });
		}
	}
}

module.exports = homeController;