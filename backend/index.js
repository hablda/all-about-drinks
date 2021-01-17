const express = require("express");
const app = express();
const port = 3003;

const data = require("./products.json");

app.get("/products", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Your Backend is running on http://localhost:${port}`);
});
