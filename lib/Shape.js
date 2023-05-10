class Shape{
    constructor(color, text, textColor){
        this.color=color
        this.text=text
        this.textColor=textColor
    }
    renderShape(){
       return`<circle cx="50" cy="50" r="40" 
        stroke="green" 
        stroke-width="4" 
        fill="${this.color}"/>`
    }
     render() {
        return`<svg width="100" height="100">
        ${this.renderShape()}
        <text x="0" y="15" fill="${this.textColor}">"${this.text}"</text>
      </svg>`
    }
} 
module.exports=Shape;