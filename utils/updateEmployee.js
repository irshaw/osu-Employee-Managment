module.exports = {
    
    //  new employee 
    updateEmployee: (roles, employees) => [{
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
   
    // quit 
    quit: {
        type: "list",
        message: "would like to quit?",
        name: "quit",
        choices: ["Yes", "No"]
    },
   
}