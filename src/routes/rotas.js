const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const menuController = require("../controllers/menuController");

router.get("/menu", menuController.getAllMenu);
router.get("/item", itemController.getAllItems);
router.get("/item/:id", itemController.getItemById);
router.post("/item", itemController.addItem);
router.delete("/item/:id", itemController.deleteItem);

module.exports = router;