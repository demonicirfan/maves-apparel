const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const productRouter = require('./routes/Products');

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

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (_req, res) => {
  res.sendFile(
    path.join(__dirname, './client/build/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(process.env.PORT || 3002, () => {
  console.log('Send requests at port ' + process.env.PORT || 5000 + ' 🏃');
}); //deployment check
