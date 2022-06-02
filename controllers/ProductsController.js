const Products = require("../models/ProductsModel");

const index = (req, res) =>{
    const products = Products.all()
    res.json(products);
}

//const form = (req, res)=>{
//    res.send("Products.form")
//}

const show = (req, res)=>{
    const product = Products.find(req.params.id);
    res.json(product)
}

const create = (req, res)=>{
    const product = Products.create(req.body);
    res.json(product);
}

const update = (req, res)=>{
    const product = Products.update(req.params.id, req.body);
    res.json(product);
}

const remove = (req, res)=>{
    const products = Products.remove(req.params.id)
    res.json(products)
}

module.exports={index, show, create, update, remove};