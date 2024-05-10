let canvas
let ctx
let dots
let mouseX = 0
let mouseY = 0

window.onload = function() {
    canvas = document.querySelector("#main-canvas")
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    ctx = canvas.getContext("2d")
    dots = new DotEffect(ctx, canvas.width, canvas.height)
    dots.animate()
}

window.addEventListener("mousemove", function(event) {
    mouseX = event.pageX
    mouseY = event.pageY
})

window.onresize = function() {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    cancelAnimationFrame(dots.id)
    dots.adjustWindowSize(canvas.width, canvas.height)
    dots.animate()
}

class DotEffect {
    #ctx
    #width
    #height
    #lastTime
    #timer
    #interval
    #cellSize
    #radius
    constructor(ctx, width, height){
        this.id
        this.#ctx = ctx
        this.#width = width
        this.#height = height
        this.#interval = 1000/60
        this.#timer = 0
        this.#lastTime = 0
        this.#cellSize = 30
        this.#radius = 10
    }

    #drawCircles() {
        this.#ctx.beginPath()
        for(let i = 0; i < this.#width; i+= this.#cellSize) {
            for(let j = 0; j < this.#height; j += this.#cellSize) {

                let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
                let scale = 50/(50 + dist)
                let xComp = i + (i-mouseX) * scale
                let yComp = j + (j-mouseY) * scale
                this.#ctx.moveTo(xComp+this.#radius, yComp)
                this.#ctx.arc(xComp, yComp, this.#radius, 0, 2*Math.PI)

            }
        }
        this.#ctx.fill()
    }

    #setStyle() {
        let grad = this.#ctx.createLinearGradient(0,this.#height/2,this.#width,this.#height/2)
        grad.addColorStop(0/6, "red")
        grad.addColorStop(1/6, "orange")
        grad.addColorStop(2/6, "yellow")
        grad.addColorStop(3/6, "green")
        grad.addColorStop(4/6, "blue")
        grad.addColorStop(5/6, "indigo")
        grad.addColorStop(6/6, "violet")
        this.#ctx.strokeStyle = grad;
        //this.#ctx.lineWidth = 5;
        this.#ctx.fillStyle = grad;
    }

    #animateFrame(timeStamp) {
        console.log("animating")
        let deltaTime = timeStamp - this.#lastTime
        this.#lastTime = timeStamp
        this.#timer += deltaTime
        if(this.#timer > this.#interval) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height)
            this.#drawCircles()
            this.#timer = 0
        }
        this.id=requestAnimationFrame(this.#animateFrame.bind(this))
    }

    animate() {
        this.#setStyle()
        this.#animateFrame(0)
    }

    adjustWindowSize(width, height) {
        this.#width = width
        this.#height = height
    }
}
