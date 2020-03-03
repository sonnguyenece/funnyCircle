function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    // this.setX = function (x) {
    //     this.x = x;
    // };
    // this.setY = function (y) {
    //     this.y = y;
    // };
}

function createCircle(x, y, R, color) {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var circle = new Circle(x, y, R, color);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createRadomRCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    console.log(radius);
    var circle = new Circle(300, 100, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.stroke();
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

function createRandomColorCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var circle = new Circle(500, 100, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
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
    // if (Math.floor(Math.random() * 2) >= 0.5)
        ctx.fill();
    // else ctx.stroke();
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
let moveRight=true;

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
    if (count===20){
        moveRight=false;
        moveLeft=true
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
    if (count===-20){
        moveRight=true;
        moveLeft=false
    }

}

createCircle();
createRadomRCircle();
createRandomColorCircle();
createRadomXYCircle();
createMultipleCircle();