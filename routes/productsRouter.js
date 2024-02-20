const express = require("express");
const router = express.Router();
const {getAllProductsStatic, getAllProducts} = require("../controllers/productsController");

router.route("/").get(getAllProductsStatic);
router.route("/new").get(getAllProducts);

module.exports = router;