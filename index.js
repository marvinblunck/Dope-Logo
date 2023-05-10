const inquirer = require("inquirer")
const generateSvg = require("./generatesvg")
const fs = require('fs');


function init() {
    inquirer.prompt([
        {
            name: "shape",
            type: "list",
            choices: ["square", "triangle", "circle"],
            message: "what shape would you like"
        },
        {
            name: "textColor",
            type: "input",
            message: "What color would you like the text to be?"
        },
        {
            name: "text",
            type: "input",
            message: "what would you like your logo to be named?"
        },
        {
            name: "logoColor",
            type: "input",
            message: "what color would you like your logo to be?"
        }

    ]).then((answers) => {
        console.log(answers)
        const svg=generateSvg(answers)
        fs.writeFile("name.svg", svg, function(err){
            if(err) throw err 
            console.log("create svg")
        })
    }

    )
}
init();