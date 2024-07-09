const expenseModel = require("../../../models/expenseModel");
const deleteExpenseService = async (expense_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await expenseModel.findByIdAndUpdate(expense_id, { is_active: false });
      resolve({ message: "Expense deleted successfully" });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = deleteExpenseService;
