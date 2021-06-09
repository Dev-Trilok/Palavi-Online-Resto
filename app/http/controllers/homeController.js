const Menu = require("../../models/menu");

function homeController() {
console.log("Menu")
  
  return {
    async index(req, res) {
      const pizzas = await Menu.find();
      console.log(pizzas);
      res.render("home", { pizzas: pizzas });
      //below method are also work same
      //   Menu.find().then(function (pizzas) {
      //     // console.log(pizzas);
      //     res.render("home", {pizzas:pizaas});
      //   });
    },
  };
}
module.exports = homeController;
