canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");
background_img = "https://thumbs.dreamstime.com/b/road-top-view-asphalt-highway-marks-asphalt-highway-road-top-view-111247068.jpg";
console.log(background_img);

CarImage1 = "https://www.clipartmax.com/png/middle/17-172157_racing-car-cartoon-car-top-view.png";
RovW1=100;
RovH1=90;
RovY1 = 10;
RovX1 = 10;

CarImage2 = "https://www.kindpng.com/picc/m/224-2246620_race-car-clipart-above-car-vector-top-view.png";
RovW2=100;
RovH2=90;
RovY2 = 100;
RovX2 = 10;

function add() {
    Ba1 = new Image();
    Ba1.onload = uploadBackground;
    Ba1.src = background_img;

    Ro1 = new Image();
    Ro1.onload = uploadRover1;
    Ro1.src = CarImage1;

    
    Ro2 = new Image();
    Ro2.onload = uploadRover2;
    Ro2.src = CarImage2;
}

function uploadBackground() {
    ctx.drawImage(Ba1, 0,0, canvas.width, canvas.height);
}

function uploadRover1() {
    ctx.drawImage(Ro1, RovX1, RovY1, RovW1, RovH1);
}

function uploadRover2() {
    ctx.drawImage(Ro2, RovX2, RovY2, RovW2, RovH2);
}

window.addEventListener("keydown", I);
function I(e){
    keyp = e.keyCode;
    if(keyp == '38') {
        up1();
        console.log("up");
    }

    if(keyp == '40') {
        down1();
        console.log("down");
    }

    if(keyp == '37') {
        left1();
        console.log("left");
    }

    if(keyp == '39') {
        right1();
        console.log("right");
    }
    if(keyp == '87') {
        up2();
        console.log("W");
    }
    if(keyp == '65') {
        left2();
        console.log("A");
    }
    if(keyp == '83') {
        down2();
        console.log("S");
    }
    if(keyp == '68') {
        right2();
        console.log("D");
    }
}
function up1(){
    if (RovY1 >=0){
        RovY1 = RovY1-10;
        uploadBackground();
            uploadRover();
            console.log("when up is pressed X="+RovX1+" Y ="+RovY1);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}

function down1(){
    if (RovY1 <=400){
        RovY1 = RovY1+10;
        uploadBackground();
            uploadRover();
            console.log("when down is pressed X="+RovX1+" Y ="+RovY1);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}

function left1(){
    if (RovX1 >=0){
        RovX1 = RovX1-10;
        uploadBackground();
            uploadRover();
            console.log("when left is pressed X="+RovX1+" Y ="+RovY1);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}

function right1(){
    if (RovX1 <=1000){
        RovX1 = RovX1+10;
        uploadBackground();
            uploadRover();
            console.log("when right is pressed X="+RovX1+" Y ="+RovY1);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}

function up2(){
    if (RovY2 >=0){
        RovY2 = RovY2-10;
        uploadBackground();
            uploadRover();
            console.log("when up is pressed X="+RovX2+" Y ="+RovY2);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}

function down2(){
    if (RovY2 <=400){
        RovY2 = RovY2+10;
        uploadBackground();
            uploadRover();
            console.log("when down is pressed X="+RovX2+" Y ="+RovY2);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}

function left2(){
    if (RovX2 >=0){
        RovX2 = RovX2-10;
        uploadBackground();
            uploadRover();
            console.log("when left is pressed X="+RovX2+" Y ="+RovY2);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}

function right2(){
    if (RovX2 <=1000){
        RovX2 = RovX2+10;
        uploadBackground();
            uploadRover();
            console.log("when right is pressed X="+RovX2+" Y ="+RovY2);
    }
    if(Ro1>1000){
        console.log("car1 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow keys has won!"
    }
    if(Ro2>1000){
        console.log("car2 won")
        document.getElementById("GameStatus").innerHTML="Player using arrow WASD has won!"
    }
}