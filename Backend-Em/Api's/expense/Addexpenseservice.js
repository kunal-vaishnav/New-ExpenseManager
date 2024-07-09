const expenseModel = require("../../../models/expenseModel");
const addExpenseService = ({ title, amount, date, year }) => {
  return new Promise(async (resolve, reject) => {
    try {
      await expenseModel.create({ title, amount, date, year });
      resolve({ message: "Expense added successfully" });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = addExpenseService;
