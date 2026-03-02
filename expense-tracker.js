const {
  addExpense,
  deleteExpense,
  listExpenses,
  getSummary,
} = require("./expenseManager");

const args = process.argv.slice(2);
const command = args[0];

switch (command) {

  case "add":
    const descIndex = args.indexOf("--description");
    const amountIndex = args.indexOf("--amount");

    if (descIndex === -1 || amountIndex === -1) {
      console.log("Usage: add --description <text> --amount <number>");
      break;
    }

    const description = args[descIndex + 1];
    const amount = args[amountIndex + 1];

    addExpense(description, amount);
    break;

  case "delete":
    const idIndex = args.indexOf("--id");
    if (idIndex === -1) {
      console.log("Usage: delete --id <number>");
      break;
    }

    deleteExpense(args[idIndex + 1]);
    break;

  case "list":
    listExpenses();
    break;

  case "summary":
    const monthIndex = args.indexOf("--month");
    const month = monthIndex !== -1 ? args[monthIndex + 1] : null;
    getSummary(month);
    break;

  default:
    console.log("Unknown command.");
}