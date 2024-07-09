const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  year: {
    type: Number,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
