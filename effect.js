class Effect {
    #ctx
    #width
    #height
    #lastTime
    #timer
    #interval
    #cellSize
    #radius
    #draw
    #speed
    #mouseEffect

    constructor(ctx, width, height, cellSize, radius, speed, mouseEffect, draw){
        this.id
        this.#draw = draw
        this.#ctx = ctx
        this.#width = width
        this.#height = height
        this.#interval = 1000/120
        this.#timer = 0
        this.#lastTime = 0
        this.#cellSize = cellSize
        this.#radius = radius
        this.#speed = speed
        this.#mouseEffect = mouseEffect
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
        this.#ctx.strokeStyle = grad
        this.#ctx.fillStyle = grad
    }
    
    #animateFrame(timeStamp) {
        console.log("animating")
        let deltaTime = timeStamp - this.#lastTime
        this.#lastTime = timeStamp
        this.#timer += deltaTime
        if(this.#timer > this.#interval) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height)
            this.#draw(this.#ctx,this.#width,this.#height,this.#cellSize,timeStamp*this.#speed/1000,this.#radius)
            this.#timer -= this.#interval
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

    //getters
    setCellSize(cellSize) {
        this.#cellSize = cellSize
    }
    setSpeed(speed) {
        this.#speed = speed
    }
    setRadius(radius) {
        this.#radius = radius
    }
    setMouseEffect(mouseEffect) {
        this.#mouseEffect = mouseEffect
    }

    //setters
    getCellSize() {
        return this.#cellSize
    }
    getSpeed() {
        return this.#speed
    }
    getRadius() {
        return this.#radius 
    }
    getMouseEffect() {
        return this.#mouseEffect
    }
}