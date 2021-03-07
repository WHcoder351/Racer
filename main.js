canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");
background_img = "https://thumbs.dreamstime.com/b/asphalt-road-texture-white-stripes-vector-illustration-86428221.jpg";
CarImage = "https://www.dlf.pt/dfpng/middlepng/539-5393049_audi-clipart-race-car-animated-car-top-view.png";
CarW=100;
CarH=90;
CarY = 10;
CarX = 10;

CarImage2 = "https://www.pikpng.com/pngl/m/284-2848268_the-gallery-for-car-top-view-png-car.png";
CarW2=100;
CarH2=90;
CarY2 = 305;
CarX2 = 10;

function add() {
    Ba1 = new Image();
    Ba1.onload = uploadBackground;
    Ba1.src = background_img;

    Car1 = new Image();
    Car1.onload = uploadCar;
    Car1.src = CarImage;

    Car2 = new Image();
    Car2.onload = uploadCar2;
    Car2.src = CarImage2;
}

function uploadBackground() {
    ctx.drawImage(Ba1, 0,0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(Car2, CarX2, CarY2, CarW2, CarH2);
}

function uploadCar2() {
    ctx.drawImage(Car1, CarX, CarY, CarW, CarH);
}

window.addEventListener("keydown", ASCII);
function ASCII(e){
    keyp=e.keycode;
    if(keyp == "38") {
        up();
        console.log("up");
    }

    if(keyp == "40") {
        down();
        console.log("down");
    }

    if(keyp == "37") {
        left();
        console.log("left");
    }

    if(keyp == "39") {
        right();
        console.log("right");
    }
}
window.addEventListener("keydown", ASCII2);
function ASCII2(e){
    keyp2=e.keycode;
    if(keyp2 == "87") {
        up2();
        console.log("W");
    }

    if(keyp2== "83") {
        down2();
        console.log("S");
    }

    if(keyp2 == "65") {
        left2();
        console.log("A");
    }

    if(keyp2 == "68") {
        right2();
        console.log("D");
    }
}
