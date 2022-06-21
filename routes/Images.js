const express=require("express");
const router=express.Router();
const imageControl = require("../controllers/ImagesController");
const {uploadImage}=require("../middlewares")

router.get("/", imageControl.index);

router.get("/new", imageControl.form);

router.get("/:id", imageControl.show);

router.get("/:id/edit", imageControl.form);

router.post('/', imageControl.create, uploadImage)

router.post('/:id', imageControl.update, uploadImage)

router.post("/", imageControl.create);

router.post("/:id", imageControl.update);

router.delete("/:id", imageControl.remove);

router.get("/:id/delete", imageControl.remove);

module.exports=router;