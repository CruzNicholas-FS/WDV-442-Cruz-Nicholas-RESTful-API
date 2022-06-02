const express=require("express");
const router=express.Router();
const productControl = require("../controllers/ProductsController");

router.get("/", productControl.index);

//router.get("/new", productControl.form);

router.get("/:id", productControl.show);

//router.get("/:id/edit", productControl.form);

router.post("/", productControl.create);

router.post("/:id", productControl.update);

router.delete("/:id", productControl.remove);

router.post("/:id/delete", productControl.remove);

module.exports=router;