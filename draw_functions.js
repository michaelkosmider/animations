function drawDots(ctx, width, height, cellSize, angle, radius, mouseEffect) {
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
            let scale = 50*mouseEffect/(50*mouseEffect + dist)
            let xComp = i + (i-mouseX) * scale + Math.sin(i/3000*angle)*5
            let yComp = j + (j-mouseY) * scale + Math.cos(j/3000*angle)*5
            ctx.moveTo(xComp+radius, yComp)
            ctx.arc(xComp, yComp, radius, 0, 2*Math.PI)    
        }
    }
    ctx.fill()
}

function drawCircles(ctx, width, height, cellSize, angle, radius, mouseEffect) {
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
            let scale = 50*mouseEffect/(50*mouseEffect + dist)
            let xComp = i + (i-mouseX) * scale + Math.sin(i/3000*angle)*5
            let yComp = j + (j-mouseY) * scale + Math.cos(j/3000*angle)*5
            ctx.moveTo(xComp+radius, yComp)
            ctx.arc(xComp, yComp, radius, 0, 2*Math.PI)    
        }
    }
    ctx.stroke()
}

function drawLines(ctx, width, height, cellSize, angle, radius, mouseEffect) {
    angle = Math.sin(angle/5)*50
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = (mouseEffect)/5*Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2) + (5-mouseEffect)/5*Math.sqrt((i-width/2) ** 2 + (j-height/2) ** 2)
            ctx.moveTo(i, j)
            ctx.lineTo(i+radius*Math.cos(dist*i/3000000*angle),j+radius*Math.sin(dist*j/2000000*angle))
        }
    }
    ctx.stroke()
}

function drawSpirals(ctx, width, height, cellSize, angle, radius, mouseEffect) {
    angle = Math.sin(angle/5)*50
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            let dist = (mouseEffect)/5*Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2) + (5-mouseEffect)/5*Math.sqrt((i-width/2) ** 2 + (j-height/2) ** 2)
            ctx.moveTo(i, j)
            ctx.lineTo(i + radius*Math.cos(dist/3000*(angle+50)),j + radius*Math.sin(dist/3000*(angle+50)))
        }
    }
    ctx.stroke()
}

function drawMagnet(ctx, width, height, cellSize, angle, radius, mouseEffect) {
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            ctx.moveTo(i, j)
            ctx.arc(i,j,2,0,2*Math.PI)
            ctx.moveTo(i, j)
            let dist = Math.sqrt((i-mouseX) ** 2 + (j-mouseY) ** 2)
            let mouseUnitVectorX = (mouseX - i)/dist
            let mouseUnitVectorY = (mouseY - j)/dist
            let scale = 100*mouseEffect/(100*mouseEffect + dist)
            let randomUnitVectorX = (1-scale)*Math.cos((i*29+j*53)** 2) + scale * mouseUnitVectorX
            let randomUnitVectorY = (1-scale)*Math.sin((i*29+j*53)** 2) + scale * mouseUnitVectorY
            ctx.lineTo(i + (1-scale)*radius*randomUnitVectorX, j + (1-scale)*radius*randomUnitVectorY)
        }
    }
    ctx.fill()
    ctx.stroke()
}

function drawEternal(ctx, width, height, cellSize, angle, radius, mouseEffect) {
    ctx.beginPath()
    for(let i = 0; i < width; i+= cellSize) {
        for(let j = 0; j < height; j += cellSize) {
            ctx.moveTo(i, j)
            ctx.lineTo(i+radius*Math.cos(i/3000*angle),j+radius*Math.sin(j/2000*angle))
        }
    }
    ctx.stroke()
}