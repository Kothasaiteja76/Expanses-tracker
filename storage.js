const fs = require("fs");

const FILE = "expenses.json";

function loadExpenses() {
  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify([], null, 2));
  }
  return JSON.parse(fs.readFileSync(FILE));
}

function saveExpenses(expenses) {
  fs.writeFileSync(FILE, JSON.stringify(expenses, null, 2));
}

module.exports = {
  loadExpenses,
  saveExpenses,
};