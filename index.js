const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products")
const variantsRouter = require("./routes/Variants")
const imagesRouter = require("./routes/Images")
const hb = require("express-handlebars");

const app = express();
const fileUpload = require('express-fileupload');
app.use(fileUpload());

const hbs = hb.create({
    defaultLayout:"main",

    helpers:{
        isEqual: (variantProductId, id) => {
            if (variantProductId==id) {
                console.log(variantProductId, id)
                return true
            }
        }
    }
});

app.set("views", __dirname + "/templates/views");
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

let people = ["John", "Sarah", "Tristen"];

app.get("/", (req, res)=>{
    res.render("home", {
        title:"Home",
        browser:"Home",
        stylesheet:"./public/app.css",
        app:"./public/app.js"
    });
})

app.get("/about", (req, res)=>{
    res.render("about", {
        content: "This is the about page",
        title:"About",
        browser:"About",
        stylesheet:"./public/app.css",
        app:"./public/app.js"
    })
})

app.use(bodyParser.urlencoded({extended:false}));

app.use("/public", express.static("public"));

app.use("/products", productRouter);
app.use("/variants", variantsRouter);
app.use("/images", imagesRouter);

app.listen(3000);