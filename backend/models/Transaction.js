const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: String,
  amount: Number
});

module.exports = mongoose.model('Transaction', TransactionSchema);
