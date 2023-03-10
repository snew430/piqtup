const mongoose = require('mongoose');
const {Schema} = mongoose;

const distributorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Distributor = mongoose.model('Distributor', distributorSchema);

module.exports = Distributor;
