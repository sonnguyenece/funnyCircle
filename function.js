function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

function createCircle(x, y, R, color) {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var circle = new Circle(x, y, R, color);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function createRadomXYCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle = new Circle(x, y, radius, color);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    return circle;
}

let idCircle = [];

function createMultipleCircle() {
    for (var i = 0; i < 300; i++) {
        idCircle[i] = createRadomXYCircle();
    }

    timeOut(idCircle);
}

function timeOut(idCircle) {
    setTimeout(function () {
        moveCircle(idCircle);
    }, 50);
}

let count = 0;
let moveLeft;
let moveRight = true;

function moveCircle(idCircle) {
    // if (count===20){
    //     moveRight=false;
    //     moveLeft=true
    // }
    // if (count===-20){
    //     moveRight=true;
    //     moveLeft=false
    // }
    if (moveRight) {
        document.getElementById("myCanvas").getContext("2d").clearRect(0, 0, 1368, 768);
        for (let i = 0; i < idCircle.length; i++) {
            idCircle[i].x += 10;
            createCircle(idCircle[i].x, idCircle[i].y, idCircle[i].radius, idCircle[i].color);
        }
        count++;
        timeOut(idCircle);
    }
    if (count === 20) {
        moveRight = false;
        moveLeft = true;
    }

    if (moveLeft) {
        document.getElementById("myCanvas").getContext("2d").clearRect(0, 0, 1368, 768);
        for (let i = 0; i < idCircle.length; i++) {
            idCircle[i].x -= 10;
            createCircle(idCircle[i].x, idCircle[i].y, idCircle[i].radius, idCircle[i].color);
        }
        count--;
        timeOut(idCircle);
    }
    if (count === -20) {
        moveRight = true;
        moveLeft = false
    }

}

createCircle();
createRadomXYCircle();
createMultipleCircle();