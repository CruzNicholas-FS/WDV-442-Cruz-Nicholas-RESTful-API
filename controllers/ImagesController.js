const {Image, Variant} = require("../models");

const index = async (req, res) =>{
    const images = await Image.findAll();
    res.render("images/index", {images});
    //res.json(images);
}

const form = async (req, res)=>{
    //res.send("Products.form")
    const variants = await Variant.findAll();
    if (req.params.id) {
        const image=await Image.findByPk(req.params.id)
        const parameters = {image, variants}
        res.render("images/edit", {parameters})
    } else{
        res.render("images/create", {variants})
    }
}

const show = async (req, res)=>{
    const image = await Image.findByPk(req.params.id);
    const variant = await image.getVariant();
    res.render("images/show", {image, variant})
    //res.json(image)
}

const create = async (req, res, next)=>{
    const image = await Image.create(req.body);
    req.imageId = image.id;
    next()
    res.redirect("/images/" + image.id);
}

const update = async (req, res, next)=>{
    const image = await Image.update(req.body, {
        where:{id:req.params.id}
    });
    req.imageId=req.params.id
    next()
    res.redirect("/images/" + req.params.id)
    //res.json(image);
}

const remove = async (req, res)=>{
    const images = await Image.destroy({where:{id:req.params.id}})
    res.render("images/index", {images});
}

module.exports={index, form, show, create, update, remove};