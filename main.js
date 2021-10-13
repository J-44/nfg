canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_X = 10;
car1_Y = 10;
car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png"
car2_width = 120;
car2_height = 70;
car2_X = 10;
car2_Y = 100;
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png"
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadcar1;
    car_1_imgTag.src = car1_image;

    car_2_imgTag = new Image();
    car_2_imgTag.onload = uploadcar2;
    car_2_imgTag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car_1_imgTag, car1_X, car1_Y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car_2_imgTag, car2_X, car2_Y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("Key Pressed");
    if (keyPressed == '38') {
        caroneup();
        console.log("Up key pressed");
    }
    if (keyPressed == '39') {
        caroneright();
        console.log("Right key pressed");
    }
    if (keyPressed == '40') {
        caronedown();
        console.log("Down key pressed");
    }
    if (keyPressed == '37') {
        caroneleft();
        console.log("Left key pressed");
    }
    if (keyPressed == '87') {
        cartwoup();
        console.log("W key pressed");
    }
    if (keyPressed == '83') {
        cartwodown();
        console.log("S key pressed");
    }
    if (keyPressed == '65') {
        cartwoleft();
        console.log("A key pressed");
    }
    if (keyPressed == '68') {
        cartworight();
        console.log("D key pressed");
    }
    if (car1_X == 700) {
        console.log("Car 1 has win");
        document.getElementById("game_status").innerHTML = "Car 1 has win";
    }
    if (car2_X == 700) {
        console.log("Car 2 has win");
        document.getElementById("game_status").innerHTML = "Car 2 has win";
    }
}

function caroneup() {
    if (car1_Y >= 0)
        car1_Y = car1_Y - 10;
    console.log("X position is" + car1_X + "and position Y" + car1_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}

function cartwoup() {
    if (car2_Y >= 0)
        car2_Y = car2_Y - 10;
    console.log("X position is" + car2_X + "and position Y" + car2_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}

function caronedown() {
    if (car1_Y <= 500)
        car1_Y = car1_Y + 10;
    console.log("X position is" + car1_X + "and position Y" + car1_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}

function cartwodown() {
    if (car2_Y <= 500)
        car2_Y = car2_Y + 10;
    console.log("X position is" + car2_X + "and position Y" + car2_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}

function caroneright() {
    if (car1_X <= 700)
        car1_X = car1_X + 10;
    console.log("X position is" + car1_X + "and position Y" + car1_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}

function cartworight() {
    if (car2_X <= 700)
        car2_X = car2_X + 10;
    console.log("X position is" + car2_X + "and position Y" + car2_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}

function caroneleft() {
    if (car1_X >= 0)
        car1_X = car1_X - 10;
    console.log("X position is" + car1_X + "and position Y" + car1_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}

function cartwoleft() {
    if (car2_X >= 0)
        car2_X = car2_X - 10;
    console.log("X position is" + car2_X + "and position Y" + car2_Y)
    uploadbackground();
    uploadcar1();
    uploadcar2();
}