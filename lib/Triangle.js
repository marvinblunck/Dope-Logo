const Shape= require("./Shape.js");
class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    renderShape(){
        return`<triangle cx="50" cy="50" 
        stroke="green" 
        stroke-width="4" 
        fill="${this.color}"/>`
    }
}
module.exports=Triangle