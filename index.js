const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const categoryRoutes = require("./routes/categories");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/categories", categoryRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
