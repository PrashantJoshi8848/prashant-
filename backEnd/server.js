const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const { home } = require("./controller/controller");
const productRouter = require("./router/Productroutes");
const middleware = require("./middleware/middleware");
const cors = require("cors");

app.use(cors());

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", middleware, home);
app.use("/product/api", productRouter);

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
