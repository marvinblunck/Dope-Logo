const Shape= require("./Shape.js");
class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    renderShape(){
        return`<square cx="50" cy="50" 
        stroke="green" 
        stroke-width="4" 
        fill="${this.colorcolor}"/>`
    }
}
module.exports=Square