import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.yellowBright("                     WELCOME TO A.A TODO LIST APPLICATION                          "));
console.log("====================================");

let todolist = []
let condition = "true";

while (condition) {
    let Addtask = await inquirer.prompt([
        {
            name:"tasks",
            type:"input",
            message:chalk.blueBright("ENTER YOUR NEW TASK")    

        }
    ]);
    todolist.push(Addtask.tasks)
    console.log(`${Addtask.tasks} SUCCESSFULLY ADDED IN YOUR TODO LIST`);
    
    let Addmoretasks = await inquirer.prompt([
        {
            name:"moretasks",
            type:"confirm",
            message:chalk.blueBright("DO YOU WANT ADD ANY MORE TASK"),
            default:"false"
        }
    ])
    condition = Addmoretasks.moretasks
    
    
}
console.log("YOUR UPDATED TODO LIST", todolist);
