const addExpenseService = require("../services/addExpenseService");

const addExpense = async (req, res) => {
  try {
    const { title, amount, date } = req.body;
    if (!title || !amount || !date)
      return res.status(400).json({ message: "Please fill all the fields" });
    const year = new Date(date).getFullYear();
    await addExpenseService({ title, amount, date, year });
    return res.status(200).json({ message: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addExpense;
