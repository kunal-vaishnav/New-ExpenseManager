const express = require("express");
const expenseRouter = require("./apis");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://kunalvaishnav110:XtHKeWATEZMK6EBh@cluster0.2jvkbud.mongodb.net/expenseApp"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/v1", expenseRouter);

app.get("/", (req, res) => {
  res.send("testing");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
