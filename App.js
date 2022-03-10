const diceContainer = document.getElementById("dice-container")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let dice = []



btn1.addEventListener("click", () => new Die())
btn2.addEventListener("click", () => loopRoll())

const loopRoll = () => {
    dice.map((d) => {
        console.log(d)
        d.roll()
    })
}


class Die {
    constructor() {
        this.div = document.createElement('div')
        this.div.className = "dice"
        this.div.addEventListener("click", () => this.roll())
        this.roll();
        diceContainer.appendChild(this.div)
        dice.push(this)
    }

    roll() {
        this.value = Math.floor((Math.random() * 7));
        this.div.innerText = this.value
    }

}