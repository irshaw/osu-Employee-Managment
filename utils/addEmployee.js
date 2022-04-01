module.exports = {
    
    //  new employee 
    addEmployee: (roles, employees) => [{
            type: "input",
            message: "What is your employee's first name?",
            name: "first_name",
        },
        {
            type: "input",
            message: "What is your employee's last name?",
            name: "last_name",
        },
        {
            type: "list",
            message: "What is your employee's roleID?",
            name: "role_id",
            choices: roles    
        }
    ],
   
    // quit if you dont want to add employee
    quit: {
        type: "list",
        message: "would like to quit?",
        name: "quit",
        choices: ["Yes", "No"]
    },
   
}