const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

orderSchema.virtual('daysOverdue').get(function () {
  return t`${this.date} - ${Date.now}`;
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
