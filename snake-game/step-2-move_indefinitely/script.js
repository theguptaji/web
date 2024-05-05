const snake = document.getElementById("snake")

const SPEED = {
    HIGH: 10,
    MEDIUM: 150,
    LOW: 400
}

var speed = SPEED.MEDIUM;

function setSpeed(option) {
    switch (option) {
        case "high":
            speed = SPEED.HIGH;
        case "medium":
            speed = SPEED.MEDIUM;
        case "low":
            speed = SPEED.LOW;
    }
}

var positionQueue = [];
var direction = "right";
var x = 0;
var y = 0;
let prevTime = 0;

function moveSnake() {
    const now = performance.now();
    const deltaTime = now - prevTime;
    if (deltaTime >= speed) { 
        switch (direction) {
            case "left":
                x -= 2;
                snake.style.left = `${x}vh`;
                break;
            case "right":
                x += 2;
                snake.style.left = `${x}vh`;
                break;
            case "up":
                y -= 2;
                snake.style.top = `${y}vh`;
                break;
            case "down":
                y += 2;
                snake.style.top = `${y}vh`;
                break;
        }
        prevTime = now;
    }

    window.requestAnimationFrame(moveSnake);
}

document.addEventListener("keydown", function onEvent(event) {
    if (event.key === "ArrowLeft") {
        direction = "left";
    }
    else if (event.key === "ArrowRight") {
        direction = "right";
    }
    else if (event.key === "ArrowUp") {
        direction = "up";
    }
    else if (event.key === "ArrowDown") {
        direction = "down"
    }
    else {
        return;
    }
    
    positionQueue.push({ x, y });
    console.log(`left ${x}`, `top ${y}`);
});

moveSnake();
