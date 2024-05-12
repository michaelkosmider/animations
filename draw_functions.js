function drawDots(ctx, width, height, cellSize, angle, radius) {
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
            let scale = 50/(50 + dist)
            let xComp = i + (i-mouseX) * scale + Math.sin(i/3000*angle)*5
            let yComp = j + (j-mouseY) * scale + Math.cos(j/3000*angle)*5
            ctx.moveTo(xComp+radius, yComp)
            ctx.arc(xComp, yComp, radius, 0, 2*Math.PI)    
        }
    }
    ctx.fill()
}

function drawCircles(ctx, width, height, cellSize, angle, radius) {
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
            let scale = 50/(50 + dist)
            let xComp = i + (i-mouseX) * scale + Math.sin(i/3000*angle)*5
            let yComp = j + (j-mouseY) * scale + Math.cos(j/3000*angle)*5
            ctx.moveTo(xComp+radius, yComp)
            ctx.arc(xComp, yComp, radius, 0, 2*Math.PI)    
        }
    }
    ctx.stroke()
}

function drawLines(ctx, width, height, cellSize, angle, radius) {
    angle = Math.sin(angle/5)*50
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
            ctx.moveTo(i, j)
            ctx.lineTo(i+radius*Math.cos(dist*i/3000000*angle),j+radius*Math.sin(dist*j/2000000*angle))
        }
    }
    ctx.stroke()
}

function drawSpirals(ctx, width, height, cellSize, angle, radius) {
    angle = Math.sin(angle/5)*50
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
            ctx.moveTo(i, j)
            ctx.lineTo(i+radius*Math.cos(dist/3000*(angle+50)),j+radius*Math.sin(dist/3000*(angle+50)))
        }
    }
    ctx.stroke()
}