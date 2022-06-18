const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products")
const variantsRouter = require("./routes/Variants")
const imagesRouter = require("./routes/Images")
const hb = require("express-handlebars");

const app = express();

const hbs = hb.create({
    defaultLayout:"main",

    helpers:{
        isEqual: (variantProductId, id) => {
            console.log(variantProductId, id)
            if (variantProductId==id) {
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
    res.render("home");
})

app.get("/about", (req, res)=>{
    res.render("about", {
        content: "This is the about page",
        title:"About",
        browser:"About"
    })
})

app.use(bodyParser.urlencoded({extended:false}));

app.use("/products", productRouter);
app.use("/variants", variantsRouter);
app.use("/images", imagesRouter);

app.listen(3000);