const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api.v1", mainRouter);

app.listen(() => {
  console.log(`Listening to the ${Port}`);
});
