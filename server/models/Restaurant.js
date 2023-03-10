const mongoose = require('mongoose');
const {Schema} = mongoose;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  adress: {
    type: String,
    required: true,
  },
});



const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
