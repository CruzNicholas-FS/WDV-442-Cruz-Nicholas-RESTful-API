const express=require("express");
const router=express.Router();
const variantControl = require("../controllers/VariantsController");

router.get("/", variantControl.index);

router.get("/new", variantControl.form);

router.get("/:id", variantControl.show);

router.get("/:id/edit", variantControl.form);

router.post("/", variantControl.create);

router.post("/:id", variantControl.update);

router.delete("/:id", variantControl.remove);

router.get("/:id/delete", variantControl.remove);

module.exports=router;