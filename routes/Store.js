const express = require("express");
const router = express.Router();
const storeController = require("../controllers/StoreController");

router.get("/products", storeController.index);
router.get("/products/:slug", storeController.show);

module.exports=router;