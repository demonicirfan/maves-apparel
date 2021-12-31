const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String },
  img: { type: String },
  category: {
    type: String,
    enum: {
      values: ['gloves', 'tshirt', 'polo', 'hoodies', 'tracksuits', 'shorts'],
    },
  },
  size: { type: String },
  code: { type: String },
  featured: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', productSchema);
