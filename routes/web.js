const homeController = require("../app/http/controllers/homeController");
const authController = require('../app/http/controllers/authController')
const cartController = require("../app/http/controllers/Customer/cartController");


function initRoutes(app) 
{
  app.get("/", homeController().index); //  homeController().index == (req, res)=>{ res.render('home')}

  app.get("/cart", cartController().index);

  app.get("/update-cart", cartController().update);


  app.get("/login", authController().login);
 
  app.get("/register", authController().register);
}

module.exports = initRoutes;
