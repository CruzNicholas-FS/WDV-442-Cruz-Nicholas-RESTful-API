const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products");
const variantsRouter = require("./routes/Variants");
const imagesRouter = require("./routes/Images");
const storeRouter = require("./routes/Store");
const {index}=require("./controllers/StoreController");
const hb = require("express-handlebars");

const app = express();
const fileUpload = require('express-fileupload');
app.use(fileUpload());

const hbs = hb.create({
    defaultLayout:"main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers:{
        isEqual: (variantProductId, id) => {
            if (variantProductId==id) {
                return true;
            }
        },
        lessThan: (inventory, minStock) =>{
            if (inventory < minStock) {
                return true;
            }
        },
        sameProduct: (variant, index)=>{
            if (variant[index-1]===undefined) {
                return true;
            } else if (variant[index].productId!=variant[index-1].productId) {
                return true;
            }
        }
    }
});

app.set("views", __dirname + "/templates/views");
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended:false}));

app.use("/public", express.static("public"));

app.get("/", index);
app.use("/store", storeRouter);
app.use("/products", productRouter);
app.use("/variants", variantsRouter);
app.use("/images", imagesRouter);

app.listen(3000);