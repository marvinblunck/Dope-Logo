const Square= require("./lib/Square.js");
const Circle= require("./lib/Circle.js");
const Triangle= require("./lib/Triangle.js");
function generateSvg(data){
    //check if data.shape is a certain shape
    //if its ssquare use new sqaure syntax to make a new object
    // replace svg in return with square.render ()

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generate SVG</title>
</head>
<body>
    <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" 
    stroke="green" 
    stroke-width="4" 
    fill="${data.logoColor}"/>
    <text x="0" y="15" fill="${data.textColor}">"${data.text}"</text>
  </svg>
  </body>
  </html>
    `;
}
module.exports = generateSvg;