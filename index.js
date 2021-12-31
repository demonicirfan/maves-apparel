const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRouter = require('./routes/Products');
const cors = require('cors')
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to mongo DB 🗃'))
  .catch((err) => {
    console.log(err);
  });

app.use('/api/v1/products', productRouter);

app.listen(process.env.PORT || 3002, () => {
  console.log('Send requests at port ' + process.env.PORT || 5000 + ' 🏃');
});
