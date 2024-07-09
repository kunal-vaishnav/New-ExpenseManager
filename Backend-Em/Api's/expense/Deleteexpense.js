const deleteExpenseService = require("../services/deleteExpenseService");

const deleteExpense = async (req, res) => {
  try {
    const expense_id = req.params.expense_id;
    if (!expense_id)
      return res.status(400).json({ message: "Please provide expense_id" });
    await deleteExpenseService(expense_id);
    return res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteExpense;
