const addExpense = require("./controller/addExpense");
const deleteExpense = require("./controller/deleteExpenses");
const fetchExpense = require("./controller/fetchExpense");
const router = require("express").Router();
router.post("/add_expense", addExpense);
router.get("/expense/:year", fetchExpense);
router.delete("/delete/:expense_id", deleteExpense);
module.exports = router;
