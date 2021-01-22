const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const data = require('./products.json');

app.use(cors());

app.get('/products', (req, res, next) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Your Backend is running on http://localhost:${port}/products`);
});
