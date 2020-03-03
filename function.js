function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function createCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var circle = new Circle(100, 100, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2  * Math.PI);
    ctx.fill();
}

function createRadomRCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    console.log(radius);
    var circle= new Circle(300, 100, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createRandomColorCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var circle= new Circle(500, 100, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}


function createRadomXYCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    if(Math.floor(Math.random()*2)>=0.5)
    ctx.fill();
    else ctx.stroke();
}

function createMultipleCircle(){
    for(var i = 0; i < 30; i++){
        createRadomXYCircle();
    }
}


createCircle();
createRadomRCircle();
createRandomColorCircle();
createRadomXYCircle();
createMultipleCircle();