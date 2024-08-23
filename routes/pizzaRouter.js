var express = require('express');
var router = express.Router();
var pizzaController = require("../controllers/pizzaController")

/* GET users listing. */
router.route('/create').post(pizzaController.createPizza);
router.route('/allpizza').get(pizzaController.allPizzas);
router.route('/update/:id').put(pizzaController.updatePizza);
router.route('/delete/:id').delete(pizzaController.deletePizza);

module.exports = router;
