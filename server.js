// const requires 

const inquirer = require("inquirer");
const connection = require('./utils/connection.js')
const add = require('./utils/addEmployee.js')
const update = require('./utils/updateEmployee.js')
const view = require('./utils/viewEmployee.js')
const deleteEmployee = require('./utils/deleteEmployee.js')

// start the application 
Introduction();

// home page view for what you want to do 
function Introduction() {
    inquirer.prompt({

            name: "Intro",
            type: "list",
            message: "Welcome! what would you like to do?",
            choices: ["ADD", "UPDATE", "VIEW", "DELETE", "EXIT"]

        }).then(function (answer) {
            // add new employee
            if (answer.first === "ADD") {
                add.addEmployee();
            }// update employees
            else if (answer.first === "UPDATE") {
                update.updateEmployee();
            }// view employees
            else if (answer.first === "VIEW") {
                view.viewEmployee();

            }// delete employee 
            else if (answer.first === "DELETE") {
                deleteEmployee.deleteEmployee();

            }// exit
            else {
                console.table("Goodbye!")
                connection.end();
            }
        });
}
        

// switch case for options 
name:"choice"
.then(function(res) {
    console.log(
      res.choice
      );
      switch (res.choice) {

case "Add Employee":
    addEmployee();
    break;

case "Update Employee ":
    updateEmployee();
    break;

case "View employees":
    viewEmployee();
     break;


case "delete Employee":
    deleteEmployee();
    break;


case "Quit":
    connection.end();
    break;
// after choice run the function selected and return to the home page 
// update the view after action 
      }});

