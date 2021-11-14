const Employee = require("./lib/Employee")
const newEmployee = new Employee("Karen", "7414", "karen@gmail.com")
console.log(newEmployee.getName())
console.log(newEmployee.getId())

//Engineer
const Engineer = require("./lib/Engineer")
const newEngineer = new Engineer("Phil", "2310", "phil@gmail.com", "gitHub")
console.log(newEngineer.getName())
console.log(newEngineer.getId())


//Itern
const Intern = require("./lib/Intern")
const newIntern = new Intern("Paul", "4232", "paul@gmail.com", "gitHub", "school")
console.log(newIntern.getName())
console.log(newIntern.getId())

//Manager
const Manager = require("./lib/Manager")
const newManager = new Manager("Sara", "5164", "Sara@gmail.com", "Office Number")
console.log(newManager.getName())
console.log(newManager.getId())

const inquirer = require("inquirer")
inquirer.prompt([
    {
        name: "userChoice",
        message: "what employee would you like to make",
        type: "list",
        choices: ["Engineer", "Intern", "Manager", "No more Employees"]
    }
])
    .then(answers => {
        console.log("you made a ")
        console.log(answers.userChoice)
        if (answers.userChoice==="Engineer"){
            //ask engineer questions and create a engineer
            createEngineer()
        }
        else if (answers.userChoice==="Intern"){
            //ask intern questions and create intern
            createIntern()
        }

        else if (answers.userChoice==="Manager"){
            //ask manager questions and create manager
            createManager()
        }
        else {
            //finish program
        }
        
    })

function createEngineer (){
    inquirer.prompt([
        {
            message: "what is the Engineer name",
            type: "input",
            name: "engineerName",
        },
        {
            message: "what is the Engineer id",
            type: "input",
            name: "engineerId",

        },
        {
            message: "what is the Engineer email",
            type: "input",
            name: "engineerEmail",
        },
        {
            message: "what is the Engineer github",
            type: "input",
            name:"engineerGitHub",
        }
    ])
        .then(engineerAnswers => {
            const newEngineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGitHub)  

        })
}


function createManager (){
    inquirer.prompt([
        {
            message: "what is the Manager name",
            type: "input",
            name: "managerName",
        },
        {
            message: "what is the Manager id",
            type: "input",
            name: "managerId",

        },
        {
            message: "what is the Manager email",
            type: "input",
            name: "managerEmail",
        },
        {
            message: "what is Manager office number",
            type: "input",
            name:"managerOfficeNumber",
        }
    ])
        .then(managerAnswers => {
            const newManager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber)  

        })
}

function createIntern (){
    inquirer.prompt([
        {
            message: "what is the Intern name",
            type: "input",
            name: "internName",
        },
        {
            message: "what is the Intern id",
            type: "input",
            name: "internId",

        },
        {
            message: "what is the Intern email",
            type: "input",
            name: "internEmail",
        },
        {
            message: "what is Intern School",
            type: "input",
            name:"internSchool",
        }
    ])
        .then(internAnswers => {
            const newIntern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool)  

        })
}