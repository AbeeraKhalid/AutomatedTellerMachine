#! /usr/bin/env node

// Automated Teller Machine (ATM):
import inquirer from "inquirer";

let mytotalBalance: number = 12000;
let mypinNumber: number = 2002;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number!",
    type: "number",
  },
]);
// console.log(pinAns.pin);
if (pinAns.pin === mypinNumber) {
  console.log("Correct pin code!");
  let atm_operations = await inquirer.prompt([
    {
      name: "account type",
      message: "Select your account type",
      type: "list",
      choices: ["Currentaccount", "Savingaccount"],
    },
    {
      name: "transactionmethod",
      message: "Select your transaction method",
      type: "list",
      choices: ["Cash withdrawal", "Fastcash", "Check Balance"],
    },
  ]);
  if (atm_operations.transactionmethod == "Cash withdrawal") {
    let Cashwithdrawal_amount = await inquirer.prompt([
      {
        name: "withdrawal",
        message: "Enter your withdrawal amount",
        type: "number",
      },
    ]);
    // greaterthan & equalsto operator
    if (mytotalBalance >= Cashwithdrawal_amount.withdrawal) {
      mytotalBalance -= Cashwithdrawal_amount.withdrawal;
      console.log(`Your remaining Total Balance is${mytotalBalance}`);
    } else console.log("Insufficient Balance");
  } else {
    let fastcashAmount = await inquirer.prompt([
      {
        name: "fastcash",
        message: "Select the amount you  want to withdrawal",
        type: "number",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    if (mytotalBalance >= fastcashAmount.fastcash) {

        mytotalBalance -= fastcashAmount.fastcash; //mytotalbalance=mytotalbalance-cashwithdrawalamount
        console.log(`Your remaining Total Balance is${mytotalBalance}`);

    }
    else(console.log("Insufficient Balance")
)
  }
}
