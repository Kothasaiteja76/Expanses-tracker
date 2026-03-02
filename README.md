# 💰 Expense Tracker CLI

A simple command-line application built with Node.js to manage personal expenses.  
Data is stored locally in a JSON file.

---

# Expense Tracker
 the simple solution of give [Expense Tracker](https://roadmap.sh/projects/expense-tracker) from the[roadmap.sh](https://roadmap.sh/)


---

## 🚀 Features

- Add an expense
- Delete an expense
- View all expenses
- View total summary
- View monthly summary

---

## 🛠 Tech Stack

- Node.js
- Built-in `fs` module
- JSON file storage

---

## 📂 Project Structure

expense-tracker/
│
├── expense-tracker.js   (CLI Controller)  
├── expenseManager.js    (Business Logic)  
├── storage.js           (File Handling)  
├── expenses.json        (Data Storage)  
└── README.md  

---

## ▶️ How to Run

Navigate to project folder:

cd expense-tracker

Run commands:

node expense-tracker.js <command>

---

## ➕ Add Expense

node expense-tracker.js add --description "Lunch" --amount 20

---

## 📋 List Expenses

node expense-tracker.js list

---

## ❌ Delete Expense

node expense-tracker.js delete --id 1

---

## 📊 View Total Summary

node expense-tracker.js summary

---

## 📅 View Monthly Summary

node expense-tracker.js summary --month 8

---

## 📌 Expense Data Format

{
  "id": 1,
  "date": "2024-08-06",
  "description": "Lunch",
  "amount": 20
}

---

## 👨‍💻 Author

Sai Teja