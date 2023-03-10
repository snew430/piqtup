const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
