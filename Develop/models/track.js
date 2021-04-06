const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
// Enter reverse engineer here

});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;