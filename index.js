const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products")
const hb = require("express-handlebars");

const app = express();

app.set("views", __dirname + "/templates/views");
app.engine("handlebars", hb.engine({defaultLayout:"main"}));
app.set("view engine", "handlebars");

let people = ["John", "Sarah", "Tristen"];

app.get("/", (req, res)=>{
    res.render("home", {
        content: "This is content",
        title: "Home",
        browser:"Home",
        ppl: people
    });
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

app.listen(3000);