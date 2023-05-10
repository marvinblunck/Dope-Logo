const Shape= require("./Shape.js");
class Circle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    renderShape(){
        return`<circle cx="50" cy="50" r="40"
        stroke="green" 
        stroke-width="4" 
        fill="${this.color}"/>`
    }
}
module.exports=Circle