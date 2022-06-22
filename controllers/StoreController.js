const {Product, Variant, Image} = require("../models");

const index = async (req, res) => {
    const products = await Product.findAll({
        include:[
            {model: Variant, include:[Image]}
        ]
    })
    res.render("store/index", {products, "browser":"All Products", "stylesheet":"../public/app.css"})
}

const show = async (req, res)=>{
    const product = await Product.findOne({
        where:{slug:req.params.slug},
        include:[
            {model:Variant, include:[Image]}
        ]
    })

    let variant = product.Variants[0];
    if (req.query.v) {
        variant=product.Variants.find(v=>v.slug===req.query.v)
    }

    res.render("store/show", {product, variant, "browser":product.name, "stylesheet":"../public/app.css"})
}

module.exports={
    index, show
}