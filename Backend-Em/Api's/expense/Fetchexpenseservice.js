const expenseModel = require("../../../models/expenseModel");
const fetchExpenseService = async (year) => {
  return new Promise(async (resolve, reject) => {
    try {
      const expenses = await expenseModel.find({ year: year, is_active: true });
      resolve(expenses);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = fetchExpenseService;
