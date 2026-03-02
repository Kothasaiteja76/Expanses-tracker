const { loadExpenses, saveExpenses } = require("./storage");

function getNextId(expenses) {
  return expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
}

function addExpense(description, amount) {
  if (!description || amount <= 0) {
    console.log("Invalid description or amount.");
    return;
  }

  const expenses = loadExpenses();

  const newExpense = {
    id: getNextId(expenses),
    date: new Date().toISOString().split("T")[0],
    description,
    amount: Number(amount),
  };

  expenses.push(newExpense);
  saveExpenses(expenses);

  console.log(`Expense added successfully (ID: ${newExpense.id})`);
}

function deleteExpense(id) {
  const expenses = loadExpenses();
  const filtered = expenses.filter(e => e.id !== Number(id));

  if (filtered.length === expenses.length) {
    console.log("Expense not found.");
    return;
  }

  saveExpenses(filtered);
  console.log("Expense deleted successfully.");
}

function listExpenses() {
  const expenses = loadExpenses();

  if (!expenses.length) {
    console.log("No expenses found.");
    return;
  }

  console.log("ID  Date        Description   Amount");
  expenses.forEach(e => {
    console.log(`${e.id}   ${e.date}   ${e.description}   $${e.amount}`);
  });
}

function getSummary(month) {
  const expenses = loadExpenses();

  let filtered = expenses;

  if (month) {
    filtered = expenses.filter(e => {
      return new Date(e.date).getMonth() + 1 === Number(month);
    });
  }

  const total = filtered.reduce((sum, e) => sum + e.amount, 0);

  if (month) {
    console.log(`Total expenses for month ${month}: $${total}`);
  } else {
    console.log(`Total expenses: $${total}`);
  }
}

module.exports = {
  addExpense,
  deleteExpense,
  listExpenses,
  getSummary,
};