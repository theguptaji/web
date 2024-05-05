const snake = document.getElementById("snake")

var positionQueue = [];
var direction = "right";
var x = 0;
var y = 0;

function moveSnake(direction) {
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

    window.requestAnimationFrame(moveSnake);
}

document.addEventListener("keydown", function onEvent(event) {
    if (event.key === "ArrowLeft") {
        direction = "left";
        moveSnake(direction);
        console.log(`left ${x}`, `top ${y}`);
    }
    else if (event.key === "ArrowRight") {
        direction = "right";
        moveSnake(direction);
        console.log(`left ${x}`, `top ${y}`);
    }
    else if (event.key === "ArrowUp") {
        direction = "up";
        moveSnake(direction);
        console.log(`left ${x}`, `top ${y}`);
    }
    else if (event.key === "ArrowDown") {
        direction = "down"
        moveSnake(direction);
        console.log(`left ${x}`, `top ${y}`);
    }
    else {
        console.log(`left ${x}`, `top ${y}`);
    }
});

