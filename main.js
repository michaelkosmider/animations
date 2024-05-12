let canvas
let ctx
let dots
let lines
let effect
let effects
let mouseX = 0
let mouseY = 0

window.onload = function() {
    //preparing the canvas
    canvas = document.querySelector("#main-canvas")
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    ctx = canvas.getContext("2d")

    // loading the effects
    effects = new Map()    
    effects.set("Dots", new Effect(ctx, canvas.width, canvas.height, 30, 10, 1, 1, drawDots))
    effects.set("Lines", new Effect(ctx, canvas.width, canvas.height, 30, 100, 1, 1, drawLines))
    effects.set("Spirals", new Effect(ctx, canvas.width, canvas.height, 30, 50, 1, 1, drawSpirals))
    effects.set("Circles", new Effect(ctx, canvas.width, canvas.height, 30, 40, 1, 1, drawCircles))

    // parameter buttons
    let temp = document.querySelectorAll(".form-range")
    let parameters = new Map()
    for(i = 0; i < temp.length; i ++) {
        temp[i].addEventListener("input", function(event) {
            cancelAnimationFrame(effect.id)
            let parameter = event.target.dataset.parameter
            let value = event.target.valueAsNumber
            if(parameter === "cell-size") {
                effect.setCellSize(value)
            }
            else if(parameter === "speed") {
                effect.setSpeed(value)
            }
            else if(parameter === "radius") {
                effect.setRadius(value)
            }
            else if(parameter === "mouse-effect") {
                effect.setCellSize(value)
            }
            effect.animate()
        })
        parameters.set(temp[i].dataset.parameter, temp[i])
    }

    // animation buttons
    let animations = document.querySelectorAll("#animations .dropdown-item")
    for(i = 0; i < animations.length; i ++) {
        animations[i].addEventListener("click", function(event) {
            cancelAnimationFrame(effect.id)
            loadEffect(event.target.textContent)
        })
    }

    // playing the default effect
    loadEffect("Spirals")
    
    function loadEffect(effectName) {
        effect = effects.get(effectName)
        parameters.get("cell-size").value = effect.getCellSize()
        parameters.get("speed").value = effect.getSpeed()
        parameters.get("radius").value = effect.getRadius()
        parameters.get("mouse-effect").value = effect.getMouseEffect()
        effect.animate()
    }
}

window.addEventListener("mousemove", function(event) {
    mouseX = event.pageX
    mouseY = event.pageY
})

window.onresize = function() {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    cancelAnimationFrame(effect.id)
    effect.adjustWindowSize(canvas.width, canvas.height)
    effect.animate()
}


